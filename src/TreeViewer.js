import React from 'react';
import PropTypes from 'prop-types';
import CardPlaceholder from './component/cardPlaceholder';

// import {Div} from '../src/components/common';
import styles from './style';

const HELP_MSG = 'Select A Node To See Its Data Structure Here...';

const TreeViewer = ({node}) => {
    const style = styles.viewer;
    let json = JSON.stringify(node, null, 4);

    if (!json) {
        json = HELP_MSG;
    }

    return <div style={style.base}>{json}
    
    </div>;
};

TreeViewer.propTypes = {
    node: PropTypes.object
};

export default TreeViewer;