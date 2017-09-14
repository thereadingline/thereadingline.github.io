$(document).ready(function() {
    $("#see_more_testimonials").click(function() {
        $("#testimonial_list").toggleClass("clipped")
        if ($("#see_more_testimonials").text() === "See More") {
            $("#see_more_testimonials").html("See Less")
        } else {
            $("#see_more_testimonials").html("See More")
            const offset = $("#testimonial_list").offset().top
            $(document).scrollTop(offset)
        }
    })
})
