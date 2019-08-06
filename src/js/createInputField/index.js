import create from "./createDomElement";
import setAttributes from "./setAttributes";

const createInputField = element => attributes =>
  setAttributes(create(element), attributes);

export default createInputField;
