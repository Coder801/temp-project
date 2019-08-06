import "../css/style.css";

import createInputField from "./createInputField";
import insertElement from "./insertElement";
import observer from "./mutationObserver";

// ******************************************************** //

/** Events */

document.addEventListener("DOMContentLoaded", event => {
  // Elements
  const buttons = document.querySelectorAll(".js-btn");
  const fieldsWrapper = document.querySelector(".js-fields-wrapper");

  // Event Callbacks
  const clickOnAppendedField = event => {
    console.log(event.currentTarget);
  };

  const clickOnButton = event => {
    const { element, ...attributes } = event.currentTarget.dataset;
    const field = createInputField(element)(attributes);

    insertElement(fieldsWrapper, field);
  };

  // Click on button
  buttons.forEach(button => {
    button.addEventListener("click", clickOnButton);
  });

  // Fields Observer
  observer(fieldsWrapper)
    .onAdd(element => {
      element.addEventListener("click", clickOnAppendedField);
    })
    .onRemove(element => {
      element.removeEventListener("click", clickOnAppendedField);
    });
});
