import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import NavPanel from './components/Nav';
import './styles.scss';
import PanelBody from './components/Body';

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
