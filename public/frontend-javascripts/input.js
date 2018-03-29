$(function () {
    $('#upload').submit(function () {
        $(this).ajaxSubmit({
            error: function (xhr) {
                if(xhr.status == 500){
                    alert('please upload a file!')
                }
            },
            success: function (response) {
                $('#old').val(response.toString())
            }
        });
        //disable the page refresh.
        return false;
    });
});