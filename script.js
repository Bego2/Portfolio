/* HEADER, cuando estoy en versión móvil y tablet: clicko boton de + y se activa para header enlaces la clase "Active". Esta clase muestra los enlaces y el menu ocupa todo el height view. Toggle permite "encender y apagar" esta clase y por tanto el usuario puede volver al home de nuevo si lo desea. La clase "no-scoll" aplicada a body evita que el usuario haga scroll por la página cuando está desplegado el menu. */

/* Después en la condicional, seguimos con header para cambiar el ICONO. If: está la clase de Header-enlaces "Activa" -> el boton cambia a close (x) / else: si está desactivada el boton es add (+) */

const btnHeader = document.querySelector(".Header-icon");
const linksHeader = document.querySelector(".Header-enlaces");
const iconHeader = document.querySelector(".material-symbols-outlined");
const links = document.querySelectorAll(".Header-link");
const actualUrl = window.location.href;


const bloque = document.querySelectorAll(".Acordeon-bloque");
const btnBloque = document.querySelectorAll(".Acordeon-boton");

btnBloque.forEach((btn, i) => {
    btn.addEventListener("click", () => {

        // bloque.forEach ((cadaBloque) => {
        //     cadaBloque.querySelector(".Acordeon-content").classList.remove("isActive");
        // })

        const content = bloque[i].querySelector(".Acordeon-content")
        content.classList.toggle("isActive");
    });
});

btnHeader.addEventListener("click", () => {
  linksHeader.classList.toggle("Activa");
  document.body.classList.toggle("No-scroll");

  if (linksHeader.classList.contains("Activa")) {
    iconHeader.textContent = "close";
  } else {
    iconHeader.textContent = "add";
  }
});

links.forEach((link) => {
  const href = link.getAttribute("href");

  if (actualUrl.includes(href) || (href === "#SeccionProyectos" && actualUrl.includes("index.html"))) {
    link.classList.add("u-black");
  } else {
    link.classList.remove("u-black");
  }

link.addEventListener("click", () => {
    linksHeader.classList.remove("Activa");
    document.body.classList.remove("No-scroll");
});

});
