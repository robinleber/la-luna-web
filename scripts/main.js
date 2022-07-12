window.onload = () => {
    determineDayTime();
    // Check time once every minute
    setInterval(() => {
        determineDayTime();
    }, 60000);
}

$(document).ready(function () {
    $('body').scrollspy({ target: '#laluna__navbar' })
    console.log("scrollspy ready");
});

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    console.log("scrolled")
})