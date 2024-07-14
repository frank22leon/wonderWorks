//CODIGO NAVBAR*****
const mainNav = document.body.querySelector("#mainNav");
if (mainNav) {
  new bootstrap.ScrollSpy(document.body, {
    target: "#mainNav",
    rootMargin: "0px 0px -40%",
  });
}

var navbarShrink = function () {
  const navbarCollapsible = document.body.querySelector("#mainNav");
  if (!navbarCollapsible) {
    return;
  }
  if (window.scrollY === 0) {
    navbarCollapsible.classList.remove("navbar-shrink");
    navbarCollapsible.classList.add("navbar-dark",);
  } else {
    navbarCollapsible.classList.add("navbar-shrink",);
    navbarCollapsible.classList.remove("navbar-dark");
  }
};

// Shrink the navbar
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener("scroll", navbarShrink);

//CODIGO UBICACION SCROLL NAVBAR****
const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
navbarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

//CODIGO DESPLAZAMIENTO SCROLL NAVBAR****

// Obtiene todos los enlaces de navegación
var navLinks = document.querySelectorAll(".nav-link");

// Calcula la altura del navbar
var navbarHeight = document.querySelector(".navbar").offsetHeight;

// Agrega un evento 'click' a cada enlace de navegación
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function (event) {
    // Elimina la clase 'active' de todos los enlaces
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    // Agrega la clase 'active' al enlace clicado
    this.classList.add("active");

    // Obtiene la sección correspondiente al enlace
    var targetSectionId = this.getAttribute("href").substring(1);
    var targetSection = document.getElementById(targetSectionId);

    // Calcula la posición de la parte superior de la sección menos la altura del navbar
    var targetSectionTop =
      targetSection.getBoundingClientRect().top - navbarHeight;

    // Desplaza la página para que el navbar esté en la parte superior de la sección
    window.scrollTo({
      top: window.scrollY + targetSectionTop,
      behavior: "smooth",
    });
  });
});
//CODIGO ANIMACION SECTION EQUIPO****
// Selecciona solo los elementos dentro de la sección de animación
const animationContainer = document.querySelector(".animation-container");
const hex = animationContainer.querySelector(".animation-hex");
const bg = animationContainer.querySelector(".animation-bg");

// Agrega el evento de movimiento del mouse solo a la sección de animación
animationContainer.addEventListener("mousemove", function (e) {
  const rect = animationContainer.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  bg.style.left = `${offsetX}px`;
  bg.style.top = `${offsetY}px`;
});

// Muestra el fondo cuando el mouse está dentro de la sección
animationContainer.addEventListener("mouseenter", function () {
  bg.style.display = "block";
});

// Oculta el fondo cuando el mouse sale de la sección
animationContainer.addEventListener("mouseleave", function () {
  bg.style.display = "none";
});
// VALIDACION FORMULARIO
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
//CODIGO CONTADOR PALABRAS FORMULARIO
const contadorCaracteres = (elemento, idContenedorContador) => {
  let contenedorElemento = document.getElementById(idContenedorContador);
  let largoTexto = elemento.value.length;
  let texto = `<span>${largoTexto}/200</span>`;
  contenedorElemento.innerHTML = texto;
  console.log(largoTexto);
};

//CODIGO DESPLEGAR MODAL FORMULARIO****
// Función para mostrar el modal con el mensaje
function showMessage(message) {
  var modal = new bootstrap.Modal(document.getElementById("messageModal"));
  var modalContent = document.getElementById("messageContent");
  modalContent.innerHTML = message;
  modal.show();
}
// Función para mostrar el modal según el estado después de enviar el formulario
function showModal() {
  var status = getParameterByName("status");
  if (status === "success") {
    $("#messageContent").text(
      "Mensaje Enviado con éxito, nos contactaremos a la brevedad"
    );
  } else if (status === "error") {
    $("#messageContent").text("Error al Enviar Mensaje");
  }
  $("#messageModal").modal("show");
}
// Función para obtener parámetros de la URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Mostrar el modal al cargar la página solo si hay parámetro en la URL
$(document).ready(function () {
  if (window.location.search.indexOf("status=") !== -1) {
    showModal();
  }
});
//CODIGO LIMPIAR URL****
// Función para limpiar el parámetro status de la URL al recargar la página
function limpiarParametroStatus() {
  if (history.replaceState) {
    var nuevaURL = window.location.href.split("?")[0];
    history.replaceState({}, document.title, nuevaURL);
  }
}
// Mostrar el modal al cargar la página solo si hay parámetro en la URL
$(document).ready(function () {
  if (window.location.search.indexOf("status=") !== -1) {
    showModal();
  }
  // Llamar a la función para limpiar el parámetro status al cargar la página
  limpiarParametroStatus();
});
//CODIGO MOVIMIENTO AUTOMATICO SLIDER****
document.addEventListener("DOMContentLoaded", function () {
  var currentSlideIndex = 0; // Índice del slide actual

  function nextSlide() {
    // Obtén todos los elementos de las tarjetas
    var slides = document.querySelectorAll(
      '.container-slider input[type="radio"]'
    );

    // Obtiene el índice del próximo slide
    var nextSlideIndex = (currentSlideIndex + 1) % slides.length;

    // Simula el clic en el próximo slide
    slides[nextSlideIndex].click();

    // Actualiza el índice del slide actual
    currentSlideIndex = nextSlideIndex;
  }

  setInterval(nextSlide, 4000); // Intervalo de 5 segundos
});
