$(document).ready(function() {
    $(".featues-content .btn").on("click", function () {
        var modal = $(this).attr("href");
        $(modal).show();
        $('body').addClass("modal-open");
    });

    $(".modal").on("click", function (e) {
        var className = e.target.className;
        if (className === "modal" || className === "modal-close") {
            $(this).closest(".modal").hide();
            $('body').removeClass("modal-open");
        }
    });

});
