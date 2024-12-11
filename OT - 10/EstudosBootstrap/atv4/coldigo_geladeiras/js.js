 // Função para rolar suavemente até o topo da página
 function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para mostrar o botão de voltar ao topo quando o rodapé estiver visível
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var footerOffset = $('footer').offset().top - window.innerHeight;
    
    if (scroll > footerOffset) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});