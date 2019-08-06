import mutationObserver from "./mutationObserver";

const config = {
  attributes: true,
  childList: true,
  characterData: true
};

const observer = target => ({
  onAdd: onAddCallback => ({
    onRemove: onRemoveCallback => {
      mutationObserver(onAddCallback, onRemoveCallback).observe(target, config);
    }
  })
});

export default observer;
