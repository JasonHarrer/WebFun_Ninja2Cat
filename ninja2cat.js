$(document).ready(function() {
    $("#image0").attr("src", "img/ninja0.png")
    $("#image1").attr("src", "img/ninja1.png")
    $("#image2").attr("src", "img/ninja2.png")
    $("#image3").attr("src", "img/ninja3.png")
    $("#image4").attr("src", "img/ninja4.png")

    $("#image0").attr("alt", "Image of a ninja")
    $("#image1").attr("alt", "Image of a ninja")
    $("#image2").attr("alt", "Image of a ninja")
    $("#image3").attr("alt", "Image of a ninja")
    $("#image4").attr("alt", "Image of a ninja")

    $("#image0").click(clicked)
    $("#image1").click(clicked)
    $("#image2").click(clicked)
    $("#image3").click(clicked)
    $("#image4").click(clicked)
})

function clicked() {
    var imgNum = $(this).attr("id").charAt(5)
    if($(this).attr("alt") == "Image of a ninja") {
        $(this).attr("src", ("img/cat" + imgNum + ".png"))
        $(this).attr("alt", "Image of a cat")
    } else {
        $(this).attr("src", ("img/ninja" + imgNum + ".png"))
        $(this).attr("alt", "Image of a ninja")
    }
}
