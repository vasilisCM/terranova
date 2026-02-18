// Custom Cursor
class CustomCursor {
  constructor() {
    this.cursor = null;
    this.trackCursorPosition = null;
    this.draggableImages = [];
    this.eventHandlers = new Map(); // Store event handlers for cleanup
  }

  init() {
    this.cursor = document.querySelector(".cursor-track");
    if (!this.cursor) {
      return;
    }

    // Track cursor position
    this.trackCursorPosition = (e) => {
      this.cursor.style.top = e.pageY + "px";
      this.cursor.style.left = e.pageX + "px";
    };

    window.addEventListener("mousemove", this.trackCursorPosition);

    // Setup draggable images
    this.setupDraggableImages();
  }

  setupDraggableImages() {
    this.draggableImages = document.querySelectorAll("[draggable-image]");

    if (!this.draggableImages.length || !this.cursor) return;

    this.draggableImages.forEach((img) => {
      const handlers = {
        mouseover: () => {
          this.cursor.classList.add("cursor-track--active");
        },
        mousedown: () => {
          this.cursor.classList.add("cursor-track--clicked");
          gsap.to(this.cursor, { scale: 0.9 });
        },
        mouseup: () => {
          this.cursor.classList.remove("cursor-track--clicked");
          gsap.to(this.cursor, { scale: 1 });
        },
        mouseout: () => {
          this.cursor.classList.remove("cursor-track--active");
          this.cursor.classList.remove("cursor-track--clicked");
        },
      };

      // Add event listeners and store them
      Object.entries(handlers).forEach(([event, handler]) => {
        img.addEventListener(event, handler);
      });

      // Store handlers for this image
      this.eventHandlers.set(img, handlers);
    });
  }

  destroy() {
    // Remove cursor position tracker
    if (this.trackCursorPosition) {
      window.removeEventListener("mousemove", this.trackCursorPosition);
      this.trackCursorPosition = null;
    }

    // Remove all draggable image event listeners
    this.eventHandlers.forEach((handlers, img) => {
      Object.entries(handlers).forEach(([event, handler]) => {
        img.removeEventListener(event, handler);
      });
    });

    this.eventHandlers.clear();
    this.draggableImages = [];
    this.cursor = null;
  }
}

export default CustomCursor;
