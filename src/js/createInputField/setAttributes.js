/**
 *
 * @param {*} element
 * @param {*} params
 */
const setAttributeToElement = (element, attributes) =>
  Object.keys(attributes).reduce((current, attribute) => {
    current.setAttribute(attribute, attributes[attribute]);
    return current;
  }, element);

export default setAttributeToElement;
