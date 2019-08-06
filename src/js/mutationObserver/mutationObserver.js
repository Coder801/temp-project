const mutationObserver = (addedNodes, removedNodes) => {
  return new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach(element => {
          addedNodes(element);
        });
      }

      if (mutation.removedNodes) {
        mutation.removedNodes.forEach(element => {
          removedNodes(element);
        });
      }
    });
  });
};
