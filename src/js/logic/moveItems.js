const moveItems = (item, destination, position) => {
  destination.insertAdjacentElement(`${position}`, item);
};

export { moveItems };
