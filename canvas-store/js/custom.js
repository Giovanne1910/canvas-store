// instancia jquery e evita conflitos
// jQuery( function($){
   $(document).ready(function () {
      $('.owl-carousel').owlCarousel();

      let titulos = $('h4') // tag
      let itens = $('.featured-item') // class
      let destaques = $('#featured') // Id
      
   });

  // Configuração de produtos
  
  
  $('.featured-item a').addClass('btn btn-dark stretch-link');

  $('.featured-item:first h4').append('<span class="badge bsg-secondary">Novo</span>')

  $('featured-item h4').dblclick( function(){

   $(this).css({
      'color': '#f00',
      'backgroud': '#ff0',
      'font-weight': '100',
   });

  });

  /* Manipulação de eventos */

  $('.featured-item a').on('blur', function(event){

   event.preventDefault()

   alert('Produto esgotado')

  });

  /* Callback 
  
  $(.show)(500, function () {
      console.log( $(this).find('h4').text() + 'em estoque')

  })*/

  /* Animações */


  const duracao = 1000 // equiv.1seg

  $('.featured-item:nth(0)')

  .show(duracao)
  .fadeIn(duracao)

  /* 
 Ouvinte de eventos .navmodal-open */
 
 $('nav-modal-open').on('click',function(e){
   
   e.preventDefault();

   let elem = $(this).attr('rel')

   $('.modal-body').html($ ('#' + elem).html())
   $('.modal-header h5.modal-title').html($(this).text())

   let myModal = new bootstrap.Modal($('#modelId'))

   myModal.show()

 });

  /*
   * Todo: incrementar avalidação
   * - checar se o nome é valido(mais de 2 caracteres)
   * - checar se o email é valido com ao menos um '@' e '.'
   */

  $('body').on('submit', '.modal-body .form', function(e){

   e.preventDefault()

   const inputName = $('#nome').val()
   const inputEmail = ('#email').val()

   if(inputEmail.hasClass('invalid' || inputName.hasClass('invalid'))){
      console.log('verificar campos obrigatórios')
      return(false)
   }
   else{
      return true
   }

   $('this').submit()

  });

  function validate(elem) {
      
   if( (elem).val == '' ){

      console.log('os campos' + elem.attr('name') + 'obrigatórios estão vazios')

      elem.parent('.text-muted').show

      elem.addClass('invalid')

      return false
   } else{
      elem.parent('.text-muted').hide()
      elem.removeClass('invalid')
   }

   $('body').on('blur', '#nome', function(){
   validate($(this))
   });

   $('body').on('blur', '#email', function(){
   
   validate($(this))
   });

   $('body').on('blur', '#date', function () {
      validate($(this))
      $(this).mask('00/00/0000');
   });

   $('body').on('blur', '#time',function () {
      validate($(this))
      $('#time').mask('00:00');
   });

   $('body').on('blur','#cep', function () {
      validate($(this))
      $('#cep').mask('00000-000');
   });

   $('body').on('blur', '#phone', function () {
      validate($(this))
      $('#phone').mask('00000-0000');
   })
   
   $('body').on('blur', '#cpf', function () {
      validate($(this))
      $('#cpf').mask('000.000.000-00')
   })
}