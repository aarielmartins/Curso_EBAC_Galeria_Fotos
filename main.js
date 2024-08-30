
$('header button').click(function(){
    $('form').slideDown();
})

$('#botao-cancelar').click(function(){
    $('form').slideUp();
})

$('form').on('submit', function(e){
    e.preventDefault();
    const enderecoNovaImagem = $('#endereco-imagem-nova').val(); //PEGA O ENDEREÇO DIGITADO NO CAMPO DO ID
    const novoItem =$('<li style="display: none"></li>') 
    $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
    $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div> 
    `).appendTo(novoItem); //INSERE NAVARIÁVEL "NOVOITEM" QUE TEM E TAG "<LI></li>""
    $(novoItem).appendTo('ul'); //INSERE NA TAG <UL></UL>
    $(novoItem).fadeIn(1000); //APARECE A IMAGEM EM FADEIN EM 1S (ESTA EM MILISEGUNDOS NO PARÊNTESES)
    $('#endereco-imagem-nova').val(''); //TORNA O CAMPO DE ADICIONAR LINK VAZIO NAVAMENTE
})

