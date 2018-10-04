/**
 * Clase Videojuego
 */
class Videojuego {
    constructor(titulo, genero, numJugadores, edadMinima, imagen){
        this.titulo = titulo;
        this.genero = genero;
        this.numJugadores = numJugadores;
        this.edadMinima = edadMinima;
        this.imagen = imagen;
    }

    mostrar(){
        console.log(this.titulo);
        console.log(this.genero);
        console.log(this.numJugadores);
        console.log(this.edadMinima);
        console.log(this.imagen);
    }

    generarFicha() {
        //1. CREAR EL DIV.
        var div = document.createElement("div");
        div.setAttribute("class", "videojuego");
        //2. CREAR EL H1.
        var h1 = document.createElement("h1");
        var textoh1 = document.createTextNode(this.titulo);
        h1.appendChild(textoh1);
        //3. CREAR EL H2.
        var h2 = document.createElement("h2");
        h2.setAttribute("class", "rojo");
        var textoh2 = document.createTextNode(this.genero);
        h2.appendChild(textoh2);
        //4. CREAR EL H3.
        var h3 = document.createElement("h3");
        var textoh3 = document.createTextNode("Players:" + this.numJugadores);
        h3.appendChild(textoh3);
        //5. CREAR EL IMG
        var img = document.createElement("img");
        img.setAttribute("src", this.imagen);
        img.setAttribute("width", "300");
        //Añadir todo al div
        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(img);
        //Añadir el div al document
        document.body.appendChild(div);
    }
}