function cambiarColor() {
    document.getElementById('i1').style = 'color:green;';
}

function holaMundo() {
    alert('¡Hola mundo!');
}

function cambiarImagen(){
			document.getElementById('i2').src='https://dam.cocinafacil.com.mx/wp-content/uploads/2020/10/pl%C3%A1tano.jpg';
		}

var i = 0
function alternar() {
i++
if(i%2 == 0)
	i3.style.display = 'none'
else
	i3.style.display = 'inline'
}

// Ejemplo de código de Internet para cambiar el color del fondo
document.getElementById("cambiarColor").addEventListener("click", function() {
const colores = ["red", "blue", "green", "yellow", "white"]; // Colores del fondo
const colorAleatorio = colores[Math.floor(Math.random() * colores.length)]; // Cambio a colores aleatorios con Math.random()
document.body.style.backgroundColor = colorAleatorio;
});

var imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];
var index = 0;

setInterval(function () {
  index = (index + 1) % imagenes.length;
  document.getElementById("slide").src = imagenes[index];
}, 2000);