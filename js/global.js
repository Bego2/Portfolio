/* HEADER. Cuando estoy en versión móvil y tablet: clicko boton de + y se isActive 1. para header lista enlaces la clase "Active". Esta clase muestra los enlaces y el menu ocupa todo el height view. 2. Toggle permite "encender y apagar" esta clase y por tanto el usuario puede volver al home de nuevo si lo desea. La clase "no-scoll" aplicada a body evita que el usuario haga scroll por la página cuando está desplegado el menu.  
3. Después en la condicional, seguimos con header para cambiar el ICONO. If: está la clase de Header-enlaces "isActive" -> el boton cambia a close (x) / else: si está desisActiveda el boton es add (+) */

const btnHeader = document.getElementById("Header-boton"); //Boton del menu
const linksHeader = document.getElementById("Header-listaEnlaces"); // La lista de enlaces de Nav
const iconHeader = document.getElementById("Header-icono"); // Icono a modificar + / x
const links = document.querySelectorAll(".Header-link"); // Todos los link a recorrer (Proyectos / About / Contact)
const actualUrl = window.location.href; // La página actual

btnHeader.addEventListener("click", () => {
  linksHeader.classList.toggle("isActive"); //1
  document.body.classList.toggle("No-scroll"); //2

  if (linksHeader.classList.contains("isActive")) {
    //3
    iconHeader.textContent = "close";
  } else {
    iconHeader.textContent = "add";
  }
});


/** HEADER. 0. Vamos a recorrer cada enlace de la nav bar
  1. Método que me ayuda a filtrar en qué página estamos gracias a include. 
  1.1. Primera condición para averiguar si estamos en el enlace home o en su sección proyectos
  1.2. La segunda para cualquier otro enlace distinto del anterior 
  1.3. Si no se cumple, entonces no agrega la clase black y los enlaces están en gris (el caso de los proyectos individuales porque no forman parte de la nav bar)
 2. Utility da color negro a la sección de la página que está activada actualmente, el resto las deja en gris */

links.forEach((link) => { //0
  const href = link.getAttribute("href");

  if (actualUrl.includes("index.html") && href === "index.html#SeccionProyectos") {
    //1.1
    link.classList.add("u-black"); //2
  } else if (actualUrl.includes(href)) {
    //1.2
    link.classList.add("u-black");
  } else {
    //1.3
    link.classList.remove("u-black");
  }

  /* HEADER. Este evento sirve cuando hemos clickado en alguno de los enlaces y ya estamos en una nueva página. 
  1. El menu se pliega y se desactiva la clase isActive
  2. Se desactiva "No.-scroll" para seguir navegando
  3. El icono vuelve a su estado normal [+] */

  link.addEventListener("click", () => {
    linksHeader.classList.remove("isActive"); //1
    document.body.classList.remove("No-scroll"); //2
    iconHeader.textContent = "add"; //3
  });
});
