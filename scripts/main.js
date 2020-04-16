window.onload = () => {
    determineDayTime();
    // Check time every second
    setInterval(() => {
        determineDayTime();
    }, 1000);
}

$(document).ready(function () {
    $('body').scrollspy({ target: '#laluna__navbar' })
    console.log("scrollspy ready");
});

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    console.log("scrolled")
})