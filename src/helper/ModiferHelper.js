/***
 * Helper function to calculate the ability modifier based on the attribute value.
 * The ability modifier is calculated as +1 for each 2 points above 10.
 * @param {number} attributeValue - The value of the attribute to calculate the modifier for.
 * @returns {number} The calculated ability modifier.
 */
export const calculateAbilityModifier = (attributeValue) => {
  return (Math.floor((attributeValue - 10) / 2));
};

export const calculateAvailableSkillPoints = (attributeValue) => {
  const points = (10 + (4 * calculateAbilityModifier(attributeValue)));
  return (points > 0 ? points : 0)
};
