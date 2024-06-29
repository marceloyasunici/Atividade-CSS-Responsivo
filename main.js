$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
    })
})