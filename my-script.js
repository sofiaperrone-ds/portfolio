document.addEventListener('DOMContentLoaded', function () {
  // Seleziona tutti i caroselli che hanno la classe 'carosello-numerato'
  const carousels = document.querySelectorAll('.carosello-numerato');

  // Itera su ogni carosello trovato
  carousels.forEach(carouselElement => {
    // Seleziona gli elementi del contatore all'interno di questo specifico carosello
    const currentSlideCounter = carouselElement.querySelector('[data-slider-count]');
    const totalSlidesCounter = carouselElement.querySelector('[data-total-slides]');

    // Controlla se gli elementi del contatore esistono
    if (!currentSlideCounter || !totalSlidesCounter) {
      console.warn('Gli elementi del contatore non sono stati trovati per un carosello.');
      return; // Salta al prossimo carosello
    }

    // Calcola il numero totale di diapositive
    const totalSlides = carouselElement.querySelectorAll('.carousel-item').length;

    // Imposta il numero totale all'avvio
    totalSlidesCounter.textContent = totalSlides;

    // Aggiungi un listener di eventi per il carosello corrente
    carouselElement.addEventListener('slide.bs.carousel', function (event) {
      // Aggiorna il numero della diapositiva corrente nel contatore
      const currentSlideNumber = event.to + 1;
      currentSlideCounter.textContent = currentSlideNumber;
    });

    // Imposta il numero iniziale del contatore a 1 all'avvio
    currentSlideCounter.textContent = 1;
  });
});


// Select all <a> elements inside the offcanvas
const links = document.querySelectorAll('#offcanvasNavbar .navbar-nav a.nav-link');

// Function to close the offcanvas menu
function closeOffcanvas() {
  const offcanvas = document.querySelector('.offcanvas');
  const backdrop = document.querySelector('.offcanvas-backdrop');
  offcanvas.classList.remove('show');
  backdrop.classList.remove('show');
}

// Add a click event listener to each <a> element
links.forEach(function(link) {
  link.addEventListener('click', closeOffcanvas);
});

$(document).ready(function() {
  $(".nav-link").mouseenter(function() {
    $(this).pill('show');
  });
});