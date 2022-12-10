function resetWindows() {           
    $(".window-container").removeClass("selected-window")
}

$(".window-container").draggable({
    handle: ".window-header"
});

$("#btn-contact").click(function() {            
    resetWindows()
    $("#win-contact").show()
    $("#win-contact").addClass("selected-window")

})

$("#btn-portfolio").click(function() {            
    resetWindows()
    $("#win-portfolio").show()
    $("#win-portfolio").addClass("selected-window")
})

$(".btn-win-close").click(function() {            
    $(this).parent().hide()            
})

$(".window-header").click(function(){           
    resetWindows()
    $(this).parent().addClass("selected-window")
})