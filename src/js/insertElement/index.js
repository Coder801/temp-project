const insertElement = (element, inject, position = "append") => {
  element[position](inject);
};

export default insertElement;
