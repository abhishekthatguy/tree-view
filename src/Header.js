import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faSitemap } from '@fortawesome/free-solid-svg-icons';
import styles from './style';


// Example: Customising The Header Decorator To Include Icons
const Header = ({onSelect,style, customStyles, node}) => {
    const [checked, setChecked]=useState(false);
    const handleChecked=(e,node)=>{
        alert(node.name);
        setChecked((v)=>!v);
    
    }
    const iconType = node.children ? faSitemap : faFileLines;

    return (
        <div style={style.base} onClick={onSelect}>
            <div style={node.selected ? {...style.title, ...customStyles.header.title} : style.title}>
              
  <div className="form-check">
      
  <input className="form-check-input" type="checkbox" value={node.toggled} id="flexCheckDefault" onChange={onSelect}/>
  <FontAwesomeIcon icon={iconType} className='mx-2' />
  <label className="form-check-label" for="flexCheckDefault">
     {node.name} 
  </label>
</div>
        </div>
             
                
               
            </div>
    );
};

Header.propTypes = {
    onSelect: PropTypes.func,
    node: PropTypes.object,
    style: PropTypes.object,
    customStyles: PropTypes.object
};

Header.defaultProps = {
    customStyles: {}
};

export default Header;