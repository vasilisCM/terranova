function updateActiveMenuItem(nextUrl) {
  // Remove existing active classes
  document
    .querySelectorAll(
      ".current-menu-item, .current_page_item, .current-menu-ancestor",
    )
    .forEach((item) => {
      item.classList.remove(
        "current-menu-item",
        "current_page_item",
        "current-menu-ancestor",
      );
    });

  // Normalize URL
  const cleanNextUrl = nextUrl.replace(/\/$/, "");

  // Find matching menu links
  document.querySelectorAll(".menu-item a").forEach((link) => {
    const cleanHref = link.href.replace(/\/$/, "");

    if (cleanHref === cleanNextUrl) {
      const li = link.closest(".menu-item");

      if (li) {
        li.classList.add("current-menu-item", "current_page_item");

        // Optional: add ancestor classes
        let parent = li.parentElement;

        while (parent) {
          const parentLi = parent.closest(".menu-item-has-children");

          if (parentLi) {
            parentLi.classList.add("current-menu-ancestor");
          }

          parent = parent.parentElement;
        }
      }
    }
  });
}

export default updateActiveMenuItem;
