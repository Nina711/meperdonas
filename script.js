document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('movible');
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
  
    button.addEventListener('mouseover', function() {
      const newPosX = Math.random() * (pageWidth - 100);
      const newPosY = Math.random() * (pageHeight - 50);
      
      button.style.transform = `translate(${newPosX}px, ${newPosY}px)`;
    });

    const mostrarTextoBtn = document.getElementById('mostrar');
    const textoMostrado = document.getElementById('textoMostrado');
  
    mostrarTextoBtn.addEventListener('click', function() {
      textoMostrado.style.display = 'block';
    });
  });