import React, { useState } from 'react';
import {ATTRIBUTE_LIST} from "../consts";

/***
 * Component for displaying and modifying character attributes.
 * @param {Object} props - The props object includes the list of class objects and attributes.
 * @param {Object} props.classList - The list of class objects with their minimum attribute requirements.
 * @param {Object} props.attributes - The attribute values.
 * @returns {JSX.Element} The Classes component.
 */
const Classes = (props) => {
  const {classList , attributes, selectedClass, setSelectedClass} = props;
  /***
   * Check if the minimum requirements for a given class are met.
   * @param {string} className - The name of class.
   * @returns {boolean} True if the character meets the minimum requirements, otherwise false.
   */
  const isQualified = (className) => {
    const classRequirements = classList[className];
    return ATTRIBUTE_LIST.every((attribute) => attributes[attribute] >= classRequirements[attribute]);
  };

  const handleClick = (className) => {
    setSelectedClass(selectedClass === className ? null : className);
  };

  return (
    <div className='item-list'>
      <h1>Classes</h1>
      {Object.keys(props.classList).map((item) => (
        <div
          key={item}
          className={`class ${isQualified(item)? 'eligible' : ''}`}
          onClick={() => handleClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Classes;
