import React, {Fragment, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {includes} from 'lodash';
import {Treebeard, decorators} from 'react-treebeard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



import data from './data';
import styles from './style';
import * as filters from './filter';
import Header from './Header';
import TreeViewer from './TreeViewer';

class TreeViewClass extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    onToggle(node, toggled) {
        const {cursor, data} = this.state;

        if (cursor) {
            this.setState(() => ({cursor, active: false}));
        }

        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }

        this.setState(() => ({cursor: node, data: Object.assign({}, data)}));
    }

    onSelect(node) {
        const {cursor, data} = this.state;

        if (cursor) {
            this.setState(() => ({cursor, active: false}));
            if (!includes(cursor.children, node)) {
                cursor.toggled = false;
                cursor.selected = false;
            }
        }

        node.selected = true;

        this.setState(() => ({cursor: node, data: Object.assign({}, data)}));
    }

    onFilterMouseUp({target: {value}}) {
        const filter = value.trim();
        if (!filter) {
            return this.setState(() => ({data}));
        }
        let filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState(() => ({data: filtered}));
    }

    render() {
        const {data, cursor} = this.state;
        return (
            <Fragment>
  <Row>
    <Col xs lg="3">
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Search in tree..."
      aria-label="Search"
      aria-describedby="basic-addon2"
      onKeyUp={this.onFilterMouseUp.bind(this)}
    />
    <InputGroup.Text id="basic-addon2">

        <FontAwesomeIcon icon={faSearch} />
    </InputGroup.Text>
  </InputGroup>
      <Treebeard
                        data={data}
                        onToggle={this.onToggle}
                        onSelect={this.onSelect}
                        decorators={{...decorators, Header}}
                        customStyles={{
                            header: {
                                title: {
                                    color: 'red'
                                }
                            }
                        }}
                    />
      </Col>
      <Col>
                    <TreeViewer node={cursor}/>
                
      </Col>

  </Row>
               
                    
               
                
            </Fragment>
        );
    }
}

export default TreeViewClass;