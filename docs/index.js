let post = null;
let postHtmlOriginal = "";

document.addEventListener("DOMContentLoaded", () => {
  post = document.getElementById("post-1");
  postHtmlOriginal = post.innerHTML;
});

function resetPost() {
  post.innerHTML = postHtmlOriginal;
}

function handleInput(keyword) {
  resetPost();

  if (keyword.length > 0) {
    // Search for and highlight keyword in post, excluding HTML tags
    const pattern = new RegExp(`${keyword}(?!([^<]+)?>)`, "gi");

    const newHtml = post.innerHTML.replace(
      pattern,
      (match) => `<mark>${match}</mark>`
    );
    post.innerHTML = newHtml;
  }
}
