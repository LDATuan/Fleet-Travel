import { ReactComponent as NextButton } from 'assets/icons/next.svg';
import { ReactComponent as PrevButton } from 'assets/icons/prev.svg';
import React from 'react';
import './styles.scss';
import useCalender from './useCalender';

Calender.propTypes = {};

function Calender(props) {
    const {
        dayshort,

        todayFormat,
        calenderRows,

        currentMonthFormated,
        getNextMonth,
        getPrevMonth,
    } = useCalender();
    function dayselected(col) {
        console.log(col);
    }
    return (
        <div className="calender">
            <table>
                <thead>
                    <tr>
                        <th colSpan={7}>
                            <div className="calender__head">
                                <div className="calender__icon" onClick={getPrevMonth}>
                                    <PrevButton />
                                </div>
                                <span className="calender__title">{currentMonthFormated}</span>
                                <span className="calender__icon" onClick={getNextMonth}>
                                    {<NextButton />}
                                </span>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        {dayshort.map((day) => (
                            <th className="calender__weekname" key={day}>
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.values(calenderRows).map((cols) => {
                        return (
                            <tr key={cols[0].date}>
                                {cols.map((col) =>
                                    col.date === todayFormat ? (
                                        <td key={col.date}>
                                            <div
                                                className={`calender__day ${col.classes} calender__today`}
                                                onClick={() => dayselected(col)}
                                            >
                                                {col.value}
                                            </div>
                                        </td>
                                    ) : (
                                        <td key={col.date}>
                                            <div
                                                className={`calender__day ${col.classes}`}
                                                onClick={() => dayselected(col)}
                                            >
                                                {col.value}
                                            </div>
                                        </td>
                                    )
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Calender;
