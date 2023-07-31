import React, {useEffect, useState} from 'react';
import {calculateAbilityModifier, calculateAvailableSkillPoints} from "../helper/ModiferHelper";

/***
 Component for displaying the skills and points distribution.
 @param {Object} props - The props object containing the skills and attributes.
 @returns {JSX.Element} The Skills component.
 */
const Skills = (props) => {
  const {skills, attributes, setSkills} = props;
  const [availablePoints, setAvailablePoints] = useState(calculateAvailableSkillPoints(attributes['Intelligence']));
  const [total, setTotal] = useState(0);
  const updateTotalAvailablePoints = () => {
    setAvailablePoints(calculateAvailableSkillPoints(attributes['Intelligence']));
  };
  useEffect(() => {
    updateTotalAvailablePoints();
  }, [attributes['Intelligence'], skills]);

  /***
   * Increase the value of the given skill by 1.
   * @param {string} skill - The name of the skill to be increased.
   */
  const handleIncrease = (skill) => {
    if (total < availablePoints) {
      setSkills((prevSkills) => ({
        ...prevSkills,
        [skill]: {
          ...prevSkills[skill],
          points: prevSkills[skill].points + 1,
        },
      }));
      setTotal((prevTotal) => prevTotal + 1);
    }
  };

  /***
   * Decrease the value of the given skill by 1.
   * @param {string} skill - The name of the skill to be decreased.
   */
  const handleDecrease = (skill) => {
    if (skills[skill].points > 0) {
      setSkills((prevSkills) => ({
        ...prevSkills,
        [skill]: {
          ...prevSkills[skill],
          points: prevSkills[skill].points - 1,
        },
      }));
      setTotal((prevTotal) => prevTotal - 1);
    }
  };

  return (
    <div>
      <h1>Skills</h1>
      <p>Total skill points available: {availablePoints}</p>
      { Object.keys(skills).map((skill) => {
        const {attributeModifier, points} = skills[skill];
        const abilityModifier = calculateAbilityModifier(attributes[attributeModifier]);
        return(
          <div key={skill}>
          <span>
            {skill}: {points} (Modifier: {attributeModifier}): {abilityModifier}
          </span>
            <button className='button' onClick={()=> handleDecrease(skill)}>-</button>
            <button className='button' onClick={()=> handleIncrease(skill)}>+</button>
            total: {points+ abilityModifier}
          </div>
        )
      }
      )}
    </div>
  );
};

export default Skills;
