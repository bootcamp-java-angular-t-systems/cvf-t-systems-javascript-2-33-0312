document.querySelectorAll("p").forEach((parrafo) => {
  parrafo.addEventListener("click", () => {
    alert("Se presionó un párrafo del documento.");
  });
});

document.querySelectorAll("#segundaTabla .parrafoTabla").forEach((parrafo) => {
  parrafo.addEventListener("click", () => {
    alert("Se presionó un párrafo contenido en la segunda tabla.");
  });
});
