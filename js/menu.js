

$( "#desktop-menu" ).menu();

// Hide context menu
$(document).on('click',function(){
    $(".context-menu").hide();
    $("#txt_id").val("");
});

// disable right click and show custom context menu
$("#desktop").on('contextmenu', function (e) {

        var id = this.id;
        $("#txt_id").val(id);

        var top = e.pageY+5;
        var left = e.pageX+5;

        // Show contextmenu
        $(".context-menu").toggle(100).css({
            top: top + "px",
            left: left + "px"
        });

        // disable default context menu
        return false;
});



// disable context-menu from custom menu
$('.context-menu').on('contextmenu',function(){
    return false;
});

// Clicked context-menu item
$('.context-menu li').on('click', function(){
    var className = $(this).find("span:nth-child(1)").attr("class");
    var titleid = $('#txt_id').val();
    $( "#"+ titleid ).css( "background-color", className );
    $(".context-menu").hide();
});

function setBackgroundBlack() {
    document.getElementById('desktop').style.backgroundImage="url('./img/index0.png')";
    
    var captions = document.getElementsByClassName('icon-caption');
    for(var i = 0; i < captions.length; i++) {
        captions[i].style.color = 'rgb(255, 207, 151)';
    }
}

function setBackgroundBlue() {
    document.getElementById('desktop').style.backgroundImage="url('./img/index1.png')";
    
    var captions = document.getElementsByClassName('icon-caption');
    for(var i = 0; i < captions.length; i++) {
        captions[i].style.color = 'rgb(255, 207, 151)';
    }
}

function setBackgroundLight() {
    document.getElementById('desktop').style.backgroundImage="url('./img/index2.png')";
    
    var captions = document.getElementsByClassName('icon-caption');
    for(var i = 0; i < captions.length; i++) {
        captions[i].style.color = 'rgb(0, 44, 56)';
    }
}



