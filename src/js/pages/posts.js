import loadMorePosts from "../services/loadMorePosts.js";

function posts() {
  console.log("Posts");

  // const currentCategory = window.location.pathname.split("/")[2];

  const buttonLoadMore = document.querySelector(".button--load-more");
  buttonLoadMore.addEventListener("click", () =>
    loadMorePosts({
      html: {
        buttonSelector: ".button--load-more",
      },
      wordpress: {
        postsNumber: 3,
      },
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", posts);
});
