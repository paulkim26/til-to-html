export default function searchBarHtml() {
  let html = "";

  html += `<div class="search-container">`;
  html += `<input id="search-input" placeholder="Search...." type="text" oninput="handleInput(this.value)">`;
  html += `</div>`;

  return html;
}
