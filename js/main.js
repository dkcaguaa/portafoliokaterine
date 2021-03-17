const grid =new Muuri(".grid" , {
    layout: {
        rounding: false
      }
});
window.addEventListener("load", ()=> {
    grid.refreshItems().layout();
    document.getElementById("grid").classList.add("imagenes-cargadas");
  

    const enlaces=document.querySelectorAll("#categorias a");
    enlaces.forEach(   (elemento) =>{
        elemento.addEventListener("click", (evento)=> {
            evento.preventDefault();
            enlaces.forEach( (enlace) => enlace.classList.remove("activo"));
            evento.target.classList.add("activo");


            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === "todos" ? grid.filter("[data-categoria]") : grid.filter(`[data-categoria ="${categoria}"]`) ;
        }   );
    });


    document.querySelector("#barra-busqueda").addEventListener("input" , (evento) => {
      const busqueda =  evento.target.value;
      grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda)  );
    });
}  );

function contActive(){
    var selector =document.getElementById("cont-colors");
    var selector2 =document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

function bgpink(){
    var selector = document.getElementById("body-b");
    selector.classList.toggle("pink");

}

function bgrosybrown(){
    var selector = document.getElementById("body-b");
    selector.classList.toggle("rosybrown");

}

function bggreen(){
    var selector = document.getElementById("body-b");
    selector.classList.toggle("green");

}

function bgblue(){
    var selector = document.getElementById("body-b");
    selector.classList.toggle("blue");

}

