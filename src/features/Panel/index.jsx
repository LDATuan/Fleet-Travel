import React from 'react';
import PanelBody from './components/Body';
import NavPanel from './components/Nav';
import './styles.scss';

PanelFeature.propTypes = {};

function PanelFeature(props) {
    return (
        <div className="panel">
            <NavPanel></NavPanel>
            <PanelBody />
        </div>
    );
}

export default PanelFeature;
