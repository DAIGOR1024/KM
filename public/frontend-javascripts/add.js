$(function () {
    $.valHooks.textarea = {
        get: function( elem ) {
            return elem.value.replace( /\r?\n/g, "\r\n" );
        }
    };

    $('#add').submit(function () {
        $.ajax({
            type: 'POST',
            url: '/add',
            data: {content: $('#old').val() + $('#new').val()},
            error: function (xhr) {
                status('Error: ' + xhr.status);
            },
            success: function (res) {
                $('#old').val(res.content);
                $('#fileName').val(res.fileName);
                $('#AddModal').modal('hide');
            }
        });
        //disable the page refresh.
        return false;
    });
});
