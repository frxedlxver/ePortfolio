


// media query
var mobile = window.matchMedia("(max-width: 768px)")

// disable dragging on mobile
if (!mobile.matches) {
    $(".window-container").draggable({
        handle: ".window-header",
        containment: "#desktop",
        scroll: false
    });    
}

// method to reset all windows to default state
function resetWindows() {
    if (mobile.matches) { // hide all containers on mobile
        $(".window-container").hide();
    } else { // on desktop, set all windows to .background-window
        $(".window-container").removeClass("selected-window")
        $(".window-container").addClass("background-window")
    }
}

// click listener for setting active window
$(".window-container").mousedown(function(){
    if(!mobile.matches) {
        resetWindows()
        $(this).removeClass("background-window")
        $(this).addClass("selected-window")
    }
})

// onload method
function displayWelcome() {
    resetWindows();
    $("#win-welcome").show()
    $("#win-welcome").removeClass("background-window")
    $("#win-welcome").addClass("selected-window")
};

// button listeners
$("#btn-contact").click(function() {
    resetWindows();
    $("#win-contact").show()
    $("#win-contact").removeClass("background-window")
    $("#win-contact").addClass("selected-window")
})


$("#btn-portfolio").click(function() {
    resetWindows();
    $("#win-portfolio").show()
    $("#win-portfolio").removeClass("background-window")
    $("#win-portfolio").addClass("selected-window")
})

// these use different ids to facilitate styling

$(".btn-win-close").click(function() {
    $(this).parent().parent().hide()
})

$("#btn-ok").click(function() {
    $(this).parent().parent().hide()
})