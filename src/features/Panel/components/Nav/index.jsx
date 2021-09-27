import React, { useState } from 'react';
import NavItem from '../NavItem';
import './styles.scss';

NavPanel.propTypes = {};

function NavPanel(props) {
    const initpanel = [
        {
            id: 0,
            content: 'Stays',
            isActive: true,
            link: '/#',
        },
        {
            id: 1,
            content: 'Flights',
            isActive: false,
            link: '/#',
        },
        {
            id: 2,
            content: 'Cars',
            isActive: false,
            link: '/#',
        },
        {
            id: 3,
            content: 'Things to do',
            isActive: false,
            link: '/#',
        },
    ];

    const [panel, setPanel] = useState(initpanel);

    function handlePanelClick(panelItem) {
        const newPanel = [...panel];
        newPanel.forEach((x) => (x.id === panelItem.id ? (x.isActive = true) : (x.isActive = false)));
        setPanel(newPanel);
    }

    return (
        <div className="navpanel">
            {panel.map((p) => (
                <NavItem key={p.id} content={p.content} onclick={() => handlePanelClick(p)} isActive={p.isActive} />
            ))}
        </div>
    );
}

export default NavPanel;
