$(document).ready(function () {

    $("#cssmenu").menumaker({
        title: "",
        format: "multitoggle",
    });

    
    $(".searchAbsolute").click(function () {
        $(".searchBarOpen").addClass("search-active");
        $("#pp-nav").hide()
    });
    
    $(".search-icon-onDesktop").click(function () {
        $(".searchBarOpen").addClass("search-active");
        $("#pp-nav").hide()
    });

    $(".searchBarOpen--closeBtn").click(function () {
        $(".searchBarOpen").removeClass("search-active");
        $("#pp-nav").show()
    });

    
    /* *ajax any pagination  */
    $(document).on("click",".by-ajax a",function(event)
    {
        event.preventDefault();
        var section = $(this).parents(".by-ajax").attr("data-section");
        var container = $(this).parents(".by-ajax").attr("data-container");
        $(section).load($(this).attr("href") +" "+container);
    });



});

