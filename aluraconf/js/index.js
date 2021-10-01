function ativaScroll(selector) {

    $(selector).click(function(event) {

        event.preventDefault();
        var target = $(this).attr("href");

        $("html, body").animate({
                scrollTop: $(target).offset().top
            }, 500);
    });
}

ativaScroll("a[href*=panel-about]");
ativaScroll("a[href*=panel-speakers]");
ativaScroll("a[href*=panel-form]");