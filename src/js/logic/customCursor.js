// Custom Cursor
const customCursor = (cursor) => {
  const trackCursorPosition = function (e) {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  };

  // Imitate default cursor
  window.addEventListener("mousemove", trackCursorPosition);
};

export { customCursor };
