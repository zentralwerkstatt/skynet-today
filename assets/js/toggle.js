$(function() {
    var currentDisplay = $(".page-content > div:visible");
    document.querySelector("#writingToggleForm").addEventListener("change", function(event) {
        console.log("Toggling writing display!");
        currentDisplay.fadeToggle(function() {
            currentDisplay = $(event.target.getAttribute("data-st-contentid"));
            currentDisplay.fadeToggle();
        });
    });
})
