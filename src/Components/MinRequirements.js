import React from 'react';

/***
 * Component for displaying the minimum requirements of a selected class.
 * @param {Object} props - The props object containing the selectedClass and classList.
 * @param {string} props.selectedClass - The name of the selected class.
 * @param {Object} props.classList - The list of class objects with their minimum requirements.
 * @returns {JSX.Element} The MinRequirements component.
 */

const MinRequirements= (props) => {
  const {selectedClass, setSelectedClass, classList}= props;
  console.log(classList)
  return (
    <div>
      <h1>{selectedClass} Minimum Requirements</h1>
      { selectedClass &&
        Object.keys(classList[selectedClass]).map(item =>
          <p key={item}>
            {item}: {classList[selectedClass][item]}
          </p>)
      }
      <button className='button' onClick={()=> setSelectedClass(null)}>Close</button>
    </div>
  );
};

export default MinRequirements;
