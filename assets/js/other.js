function copy_text(element) {
    //Before we copy, we are going to select the text.
    const text = document.getElementById(element);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    //add to clipboard.
    document.execCommand('copy');
}
if (localStorage.getItem("cookieAccept") !== "accepted") {
    $(".cookie-banner").delay(2000).fadeIn();
}
$(".close-cookie-banner").click(function() {
    $(".cookie-banner").fadeOut();
    localStorage.setItem("cookieAccept","accepted")
})


// Dark mode toggles
const btn = document.querySelector(".slider");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});