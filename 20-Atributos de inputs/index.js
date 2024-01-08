const coler = document.querySelector(".titulo");
coler.setAttribute("contentEditable", "true");

const input = document.querySelector(".input-normal");
input.type = "range";

document.write(`1.- getElementById():  Selecciona un elemento por Id<br>
2.-getElementsBytagName(): Selecciona todos los elemetos que coincidan con la etiqueta seleccionada.<br>
3.- querySelector(): Devuelve el primer elemeto que conicida con el grupo espesificado de selectores.<br>
4.- querySelectorAll(): Delvuelve todos os elementos que cincidan con el grupo espesificada de selectores.<br> `);