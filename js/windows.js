
var mobile = window.matchMedia("(max-width: 768px)")

function resetWindows() {
    if (mobile.matches) {
        $(".window-container").hide();
    } else {
        $(".window-container").removeClass("selected-window")
        $(".window-container").addClass("background-window")
    }
}


if (!mobile.matches) {
    $(".window-container").draggable({
        handle: ".window-header",
        containment: "#desktop",
        scroll: false
    });    
}

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

function displayWelcome() {
    resetWindows();
    $("#win-welcome").show()
    $("#win-welcome").removeClass("background-window")
    $("#win-welcome").addClass("selected-window")
};

$(".btn-win-close").click(function() {
    $(this).parent().parent().hide()
})

$("#btn-ok").click(function() {
    $(this).parent().parent().hide()
})

$(".window-container").mousedown(function(){
    if(!mobile.matches) {
        resetWindows()
        $(this).removeClass("background-window")
        $(this).addClass("selected-window")
    }
})