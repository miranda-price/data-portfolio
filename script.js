selected = [];

$('#filter-divider').hide();

$('.project-filter').click(function() {
    // select filter
    if ($(this).attr('class').includes('btn-secondary')) {
        // change style and location
        $(this).addClass('btn-primary');
        $(this).removeClass('btn-secondary');
        element = $(this).detach().appendTo($('#checked-filter-buttons'));

        // add class to filters
        id = $(this).attr('id');
        filter = id.slice(0, -6) + "project";
        selected.push(filter);

        // show horizontal divider
        $('#filter-divider').show();
    }

    // deselect filter
    else {
        // change style and location
        $(this).addClass('btn-secondary');
        $(this).removeClass('btn-primary');
        element = $(this).detach().appendTo($('#unchecked-filter-buttons'));

        // remove class from filters
        id = $(this).attr('id');
        filter = id.slice(0, -6) + "project";
        selected.pop(filter);

        // hide horizontal divider if applicable
        if (selected.length == 0){
            $('#filter-divider').hide();
        }
    }
    // filter projects
    if (selected.length == 0) {$('.projects-card').show()}
    else{
        $('.projects-card').hide()
        selected.forEach(element => {
            filter = '.' + element;
            $(filter).show();
        });
    }
})