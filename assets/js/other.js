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
if (localStorage.getItem("cookieSeen") !== "shown") {
    $(".cookie-banner").delay(2000).fadeIn();
    localStorage.setItem("cookieSeen","shown")
}
$(".close-cookie-banner").click(function() {
    $(".cookie-banner").fadeOut();
})