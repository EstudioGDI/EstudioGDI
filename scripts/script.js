document.addEventListener( 'DOMContentLoaded', function() {
    var elms = document.getElementsByClassName( 'splide' );

    for ( var i = 0; i < elms.length; i++ ) {
      new Splide( elms[ i ], { type : 'loop', autoplay : 'true', breakpoints: { 640: { pagination: false, }, } } ).mount();
    }
  } );

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function OpenOrClose() {
  document.getElementById("conteudoMenu").classList.toggle("open");
  document.getElementById("main").classList.toggle("open");
}

//function openNav() {
//  document.getElementById("conteudoMenu").style.width = "250px";
//  document.getElementById("main").style.marginLeft = "250px";
//  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("conteudoMenu").classList.remove("open");
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

/* Modal */
//let modal = document.getElementsByClassName("modal");
//let imagem = document.getElementsByClassName("modalImagem")
//function abrirModal() {
//    modal.style.display = "block";
//    imagem.src = this.src;
//}
//function fecharModal() {
//    modal.style.display = "none";
//}