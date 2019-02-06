// NAVBAR TRASPARENT TO SOLID
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });
});

// CLOSE MOBILE NAV ON CLICK

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }

    })
})

// SMOOTH SCROLLING TO LINKS
$(document).ready(function (params) {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        } //END if 
    });
});

// BOUNCEING DOWN ARROW
$(document).ready(function () {
    $(window).scroll(function () {
        $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
    });
});