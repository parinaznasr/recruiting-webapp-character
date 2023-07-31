import React, { useState } from 'react';
import {ATTRIBUTE_LIST} from "../consts";

/***
 * Component for displaying and modifying character attributes.
 * Each attribute can be incremented or decremented by 1 using the + and - buttons.
 * @returns {JSX.Element} The Attributes component.
 */
const Attributes = ({attributes, setAttributes}) => {
  /***
   * Increase the value of the given attribute by 1.
   * @param {string} attribute - The name of the attribute to be increased.
   */
  const handleIncrease = (attribute) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attribute]: prevAttributes[attribute] + 1,
    }));
  };

  /***
   * Decrease the value of the given attribute by 1.
   * @param {string} attribute - The name of the attribute to be decreased.
   */
  const handleDecrease = (attribute) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attribute]: prevAttributes[attribute] - 1,
    }));
  };

  return (
    <div>
      <h1>Attributes</h1>
      { ATTRIBUTE_LIST.map((attribute) => (
        <div key={attribute}>
          <span>{attribute}: {attributes[attribute]}</span>
          <button className='button' onClick={()=> handleDecrease(attribute)}>-</button>
          <button className='button' onClick={()=> handleIncrease(attribute)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Attributes;
