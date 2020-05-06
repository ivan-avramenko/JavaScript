$(function(){
    $('button').click(function() {
        $('#animateMe').animate({
            left:'100px',
            top:'100px'
        }, 500,callback)
    });
});

function callback() {
    alert('Animacion finalizada');
}