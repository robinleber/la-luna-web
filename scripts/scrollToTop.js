// Get scroll button
const scrollButton = document.getElementById("js-scroll-button");

// Hide scroll button on load
window.onload = () => {
    scrollButton.classList.toggle("shrink-out", true);
}

// Trigger scroll function
window.onscroll = () => { scrollFunction() };

// When the user scrolls down 20px from the top of the document, show scroll button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.classList.toggle("shrink-out", false);
    } else {
        scrollButton.classList.toggle("shrink-out", true);
    }
}

// When the user clicks on scroll button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}