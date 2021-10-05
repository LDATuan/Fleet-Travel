import { useState } from 'react';

const dayShortArr = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const monthNameArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const useCalender = (dayshort = dayShortArr, monthNames = monthNameArr) => {
    const today = new Date();
    const todayFormat = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

    const dayInWeeks = [1, 2, 3, 4, 5, 6, 0];
    const [selectedDate, setSelectedDate] = useState(today);
    const currentMonthFormated = `${monthNameArr[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
    //ngay cuoi cung cua thang
    const selectedMothLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    const prevMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0);
    const dayInMonth = selectedMothLastDate.getDate();
    //get thu trong tuan
    const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    const startingPoint = dayInWeeks.indexOf(firstDayInMonth) + 1;

    let prevMonthStartingPoint = prevMonthLastDate.getDate() - dayInWeeks.indexOf(firstDayInMonth) + 1;
    let currentMonthCounter = 1;
    let nextMonthCounter = 1;
    const rows = 6;
    const cols = 7;
    const calenderRows = {};

    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < cols + 1; j++) {
            if (!calenderRows[i]) {
                calenderRows[i] = [];
            }
            if (i === 1) {
                // kiem tra ngay cua thang truoc
                if (j < startingPoint) {
                    calenderRows[i] = [
                        ...calenderRows[i],
                        {
                            classes: 'calender__inprevmonth',
                            date: `${prevMonthStartingPoint}-${
                                selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()
                            }-${
                                selectedDate.getMonth() === 0
                                    ? selectedDate.getFullYear() - 1
                                    : selectedDate.getFullYear()
                            }`,
                            value: prevMonthStartingPoint,
                        },
                    ];
                    prevMonthStartingPoint++;
                } else {
                    calenderRows[i] = [
                        ...calenderRows[i],
                        {
                            classes: '',
                            date: `${currentMonthCounter}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`,
                            value: currentMonthCounter,
                        },
                    ];
                    currentMonthCounter++;
                }
            }
            //ngay trong thang
            else if (i > 1 && currentMonthCounter < dayInMonth + 1) {
                calenderRows[i] = [
                    ...calenderRows[i],
                    {
                        classes: '',
                        date: `${currentMonthCounter}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`,
                        value: currentMonthCounter,
                    },
                ];
                currentMonthCounter++;
            }
            //ngay cua thang sau
            else {
                calenderRows[i] = [
                    ...calenderRows[i],
                    {
                        classes: 'calender__innextmonth',
                        date: `${nextMonthCounter}-${
                            selectedDate.getMonth() + 2 === 13 ? 1 : selectedDate.getMonth()
                        }-${
                            selectedDate.getMonth() + 2 === 13
                                ? selectedDate.getFullYear() + 1
                                : selectedDate.getFullYear()
                        }`,
                        value: nextMonthCounter,
                    },
                ];
                nextMonthCounter++;
            }
        }
    }
    const getPrevMonth = () => {
        setSelectedDate((preValue) => new Date(preValue.getFullYear(), preValue.getMonth() - 1, 1));
    };
    const getNextMonth = () => {
        setSelectedDate((preValue) => new Date(preValue.getFullYear(), preValue.getMonth() + 1, 1));
    };
    return {
        dayshort,

        todayFormat,
        calenderRows,

        currentMonthFormated,
        getNextMonth,
        getPrevMonth,
    };
};
export default useCalender;
