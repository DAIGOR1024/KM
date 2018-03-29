$(function () {
    $('#output').click(function () {
        if($('#old').val() ==''){
            alert('please upload a file!')
        }else {
            $('#outputform').submit();
        }
        return false;
    });
});
