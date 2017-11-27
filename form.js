$(document).ready(function() {

    $("form").click(function(){
        
        $('#submit').click(function(){
            $('table').append('<tr><td>' + $('input[name="firstname"]').val() + '</td><td>'
                + $('input[name="lastname"]').val() + '</td><td>'
                + $('input[name="emailaddress"]').val() + '</td><td>'
                + $('input[name="phonenumber"]').val() + '</td></tr>'
            );
            return false;
        });
    });
});
