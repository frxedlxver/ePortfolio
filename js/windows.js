function resetWindows() {
    $(".window-container").removeClass("selected-window")
    $(".window-container").addClass("background-window")
}

$(".window-container").draggable({
    handle: ".window-header"
});

$(".window-header").mousedown()


$("#btn-contact").click(function() {
    $("#win-contact").show()
    resetWindows();
    $("#win-contact").removeClass("background-window")
    $("#win-contact").addClass("selected-window")
})


$("#btn-portfolio").click(function() {
    $("#win-portfolio").show()
    resetWindows();
    $("#win-portfolio").removeClass("background-window")
    $("#win-portfolio").addClass("selected-window")
})

function displayWelcome() {
  $("#win-welcome").show()
  resetWindows();
  $("#win-welcome").removeClass("background-window")
  $("#win-welcome").addClass("selected-window")
};

$(".btn-win-close").click(function() {
    $(this).parent().parent().hide()
})

$(".window-container").mousedown(function(){
    resetWindows()
    $(this).removeClass("background-window")
    $(this).addClass("selected-window")
})