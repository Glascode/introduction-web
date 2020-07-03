$(document).ready(function () {

    /* Table of contents */
    var $tocContainer = $("#toc-container");
    $tocContainer.find(".tocnumber").remove();
    var $tocTitle = $tocContainer.find("#toctitle");
    var $tocList = $tocTitle.next();
    $tocContainer.remove();

    var $toc = $(".toc");
    $toc.html($tocList);

    /* Cache selectors */
    var lastId;
    var $header = $(".header");
    var $headerHeight = $header.outerHeight() + 1;

    /* All list items */
    var $tocLinks = $toc.find('a');

    /* Anchors corresponding to menu items */
    var scrollItems = $tocLinks.map(function () {
        var $item = $($(this).attr("href"));
        if ($item.length) {
            return $item;
        }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    $tocLinks.click(function (e) {
        var href = $(this).attr("href");
        var offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
        $("html, body").stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    /* Bind to scroll */
    $(window).scroll(function () {
        // Get container scroll position
        var $windowTop = $(this).scrollTop();
        const SHIFT = 0;
        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < $windowTop + SHIFT)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;

            /* Set or remove active class */
            $tocLinks.parent().removeClass("active")
                    .parent().parent().removeClass("active");
            $tocLinks.filter("[href='#" + id + "']").parent().addClass("active")
                    .parent().parent().addClass("active");

            // $active = $(".active");
            // $active.parent().parent().addClass("active-parent");
        }
    });
});