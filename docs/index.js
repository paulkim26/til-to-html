let post = null;
let postHtmlOriginal = "";

// eslint-disable-next-line
document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line
  post = document.getElementById("post-1");
  postHtmlOriginal = post.innerHTML;
});

function resetPost() {
  post.innerHTML = postHtmlOriginal;
}

// eslint-disable-next-line
function handleInput(keyword) {
  resetPost();

  if (keyword.length > 0) {
    // Search for and highlight keyword in post, excluding HTML tags
    const pattern = new RegExp(`${keyword}(?!([^<]+)?>)`, "gi");

    const newHtml = post.innerHTML.replace(
      pattern,
      (match) => `<mark>${match}</mark>`,
    );
    post.innerHTML = newHtml;
  }
}
