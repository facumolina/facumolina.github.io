$(document).ready(function() {
    $('a.bibtex').click(function() {
        if ($(this).parent().parent().find(".bibtex.hidden")[0]) {
            hiddenBtn = $(this).parent().parent().find(".bibtex.hidden");
            hiddenBtn.addClass('open');
            hiddenBtn.removeClass('hidden');
        } else {
            shownBtn = $(this).parent().parent().find(".bibtex.open");
            shownBtn.addClass('hidden');
            shownBtn.removeClass('open');
        }
    });
});