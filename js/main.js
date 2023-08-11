$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')

    $('#form-fale-conosco').validate({
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
        messages: {
            nome: 'Por favor digite seu nome completo!!!',
            email: 'Caro cliente seu e-mail é muito importante para nós!!!',
            telefone: 'É através de seu celular que passamos o orçamento!!!',
            mensagem: 'Por favor, deixe aqui seu elogio ou susgestão!!!'
        },
        errorClass: 'text-danger'
    });

    let formFaleConosco = $('#form-fale-conosco')

    $('#enviar').click(function (e){
        e.preventDefault();

        if (formFaleConosco.valid()) {
            abrirImagemEnviar();
        }
    });

    function abrirImagemEnviar() {
        window.open('https://despachantelegaldobrasil.com.br/images/sucesso_email_enviado.jpg')
    }

    let formPreOrcamento = $('#form-inf-orcamento')

    $('#orcar').click(function (e){
        e.preventDefault();

        if(formPreOrcamento.valid()) {
            abrirImagemorcar();
        }
    });

    function abrirImagemorcar() {
        window.open('https://podemos.org.br/wp-content/uploads/2018/08/pedidoenviado.png')
    }

    $('input[type="radio"]').click (function (){
        $('input[type="radio"]').not(this).prop('checked', false);
    });

    let bebidasNaoAlcoolicas = 2;

    $('#bebidas-nao-alcoolicas input[type="checkbox"]').on('change', function () {
        let checkNaoAlcoolicas = $('#bebidas-nao-alcoolicas input[type="checkbox"]:checked');

        if (checkNaoAlcoolicas.length > bebidasNaoAlcoolicas) {
            this.checked = false;
        }
    });
    
    let bebidasAlcoolicas = 2;

    $('#bebidas-alcoolicas input[type="checkbox"]').on('change', function () {
        let checkAlcoolicas = $('#bebidas-alcoolicas input[type="checkbox"]:checked');

        if (checkAlcoolicas.length > bebidasAlcoolicas) {
            this.checked = false;
        }
    });

    let pratoEntradas = 2;

    $('#entradas input[type="checkbox"]').on('change', function () {
        let checkPratoEntradas = $('#entradas input[type="checkbox"]:checked');

        if (checkPratoEntradas.length > pratoEntradas) {
            this.checked = false;
        }
    });

    let pratosPrincipais = 2;

    $('#pratos-principais input[type="checkbox"]').on('change', function () {
        let checkPratosPrincipais = $('#pratos-principais input[type="checkbox"]:checked');

        if (checkPratosPrincipais.length > pratosPrincipais) {
            this.checked = false;
        }
    });

    let sobreMesas = 2;

    $('#sobremesas input[type="checkbox"]').on('change', function () {
        let checkSobreMesas = $('#sobremesas input[type="checkbox"]:checked');

        if (checkSobreMesas.length > sobreMesas) {
            this.checked = false;
        }
    });

    $('.eventos1 input[type="radio"]').click(function() {

        const tipoEventoSelecionado = ($(this).parent().find('h3').text());

        $('#tipo-evento').val(tipoEventoSelecionado);

    });

    let bebidasNaoAlcoolicasSelecionadas = [];

    $('#bebidas-nao-alcoolicas input[type="checkbox"]').on('change', function () {
        bebidasNaoAlcoolicasSelecionadas = [];

        $('#bebidas-nao-alcoolicas input[type="checkbox"]:checked').each(function () {
            if (bebidasNaoAlcoolicasSelecionadas.length < 2) {
                bebidasNaoAlcoolicasSelecionadas.push($(this).parent().find('h5').text());
            } else {
                this.checked = false;
            }
        });

        $('#nao-alcoolicas1').val(bebidasNaoAlcoolicasSelecionadas[0] || '');
        $('#nao-alcoolicas2').val(bebidasNaoAlcoolicasSelecionadas[1] || '');
    });

    let bebidasAlcoolicasSelecionadas = [];

    $('#bebidas-alcoolicas input[type="checkbox"]').on('change', function () {
        bebidasAlcoolicasSelecionadas = [];

        $('#bebidas-alcoolicas input[type="checkbox"]:checked').each(function () {
            if (bebidasAlcoolicasSelecionadas.length < 2) {
                bebidasAlcoolicasSelecionadas.push($(this).parent().find('h5').text());
            } else {
                this.checked = false;
            }
        });

        $('#alcoolicas1').val(bebidasAlcoolicasSelecionadas[0] || '');
        $('#alcoolicas2').val(bebidasAlcoolicasSelecionadas[1] || '');
    });

    let pratosEntradaSelecionadas = [];

    $('#pratos-entradas input[type="checkbox"]').on('change', function () {
        pratosEntradaSelecionadas = [];

        $('#pratos-entradas input[type="checkbox"]:checked').each(function () {
            if (pratosEntradaSelecionadas.length < 2) {
                pratosEntradaSelecionadas.push($(this).parent().find('h5').text());
            } else {
                this.checked = false;
            }
        });

        $('#pratos-entrada1').val(pratosEntradaSelecionadas[0] || '');
        $('#pratos-entrada2').val(pratosEntradaSelecionadas[1] || '');
    });

    let pratosPrincipaisSelecionados = [];

    $('#pratos-principais input[type="checkbox"]').on('change', function () {
        pratosPrincipaisSelecionados = [];

        $('#pratos-principais input[type="checkbox"]:checked').each(function () {
            if (pratosPrincipaisSelecionados.length < 2) {
                pratosPrincipaisSelecionados.push($(this).parent().find('h5').text());
            } else {
                this.checked = false;
            }
        });

        $('#principais1').val(pratosPrincipaisSelecionados[0] || '');
        $('#principais2').val(pratosPrincipaisSelecionados[1] || '');
    });

    let sobreMesasSelecionados = [];

    $('#sobremesas input[type="checkbox"]').on('change', function () {
        sobreMesasSelecionados = [];

        $('#sobremesas input[type="checkbox"]:checked').each(function () {
            if (sobreMesasSelecionados.length < 2) {
                sobreMesasSelecionados.push($(this).parent().find('h5').text());
            } else {
                this.checked = false;
            }
        });

        $('#sobremesas1').val(sobreMesasSelecionados[0] || '');
        $('#sobremesas2').val(sobreMesasSelecionados[1] || '');
    });


});
