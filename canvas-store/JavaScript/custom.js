// intancia jquery e evita confiltos

//jQuery( function($) {
  $(document).ready(function(){

$('.owl-carousel').owlCarousel();

  let titulos = $('h4') // tag
  let itens = $('.featured-item') // class
  let destaques = $('#featured') // Id

  console.log(titulos.first());
  $('.feature-item a').addClass('btn btn-dark stretch-link');
  $('feature-item h4').after('texto')
  $('.featured-item h4').append('<span class="badge bg-secondary">Novo</span>')
  
})