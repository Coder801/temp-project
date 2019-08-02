/**
 *
 * @param {object} params - Input params
 * @return DOMElement
 */
const createElement = params => {
  const { element, ...param } = params;
  const DOMElement = document.createElement(element);

  for (const name in param) {
    if (param[name]) {
      DOMElement.setAttribute(name, param[name]);
    }
  }

  if (/^(textarea)$/.test(element)) {
    DOMElement.placeholder = param.value;
  }

  if (/^(button)$/.test(element)) {
    DOMElement.innerText = param.value;
  }

  return DOMElement;
};

/**
 *
 * @param {object} parent - Parent DOM Element
 * @param {*} element - Child DOM Element
 */
const insertElement = (parent, element) => {
  parent.appendChild(element);
};

class Popup {
  constructor(template, fields) {
    this.popup = template;
  }

  showPopup() {
    this.popup.classList.remove("d-none");
  }

  hidePopup() {
    this.popup.classList.add("d-none");
  }

  changeFields(fields) {}
}

// ******************************************************** //

/** Events */
const buttons = document.querySelectorAll(".js-btn");
const fieldsWrapper = document.querySelector(".js-fields-wrapper");

const popup = new Popup(".js-popup", ".js-popup-fields");

buttons.forEach(button => {
  button.addEventListener("click", event => {
    const {
      dataset: { type, element, value }
    } = event.currentTarget;

    const DOMElement = createElement({
      type,
      element,
      value,
      class: "form-control mb-2",
      id: Date.now()
    });

    DOMElement.addEventListener("click", showPopup);

    insertElement(fieldsWrapper, DOMElement);
  });
});
