let contenido = document.getElementById("contenido");

let quienesomos = document.getElementById("QuienesSomos");
let misionvision = document.getElementById("MisionVision");
let galeriaactividades = document.getElementById("GaleriaActividad");
let calculadorapromedios = document.getElementById("CalculadoraPromedio");
let calculadoraimc = document.getElementById("calculadoraIMC");
let proximoseventos = document.getElementById("proximosEventos");
let calendarioclases = document.getElementById("calendarioClases");

quienesomos.addEventListener("click", function() {
    contenido.innerHTML = `
    <div class="inicio-seccion">
    <img src="img/BlaisePascal (1).png">

    
    <a href=" www.blaisepascal.edu.gt" 
    target="blank" class="web-link">
      www.blaisepascal.edu.gt
      </a>

    <h2>¿Quiénes somos?</h2>
    <p> Somos un colegio abierto a todas las comunidades, desarrollamos 
    en nuestros alumnos, una actitud de aprendisaje constante que les 
    permitirá incorporarse activamente a una sociedad competitiva, un centro educativo dedicado a la formación integral de nuestros estudiantes, ofreciendo una educación de calidad que promueve el desarrollo académico, personal y social. Nuestro compromiso es brindar un ambiente de aprendizaje inclusivo y estimulante, donde cada estudiante pueda alcanzar su máximo potencial y convertirse en un ciudadano responsable y comprometido con la sociedad.</p>
  </div>
    `;
});

misionvision.addEventListener("click", function() {
    contenido.innerHTML = `
    <h2>Misión y Visión</h2>
    <div class="cuadros-info">
    <div class="cuadro">
    <h2> Misión </h2>
    <p> Brindar a la comunidad una educación integral de excelente calidad con
    enfasis en la formación cíentifica fundamentada en principios y valores.</p>
    </div>
    <div class="cuadro">
    <h2> Visión </h2>
    <p> Ser una institución educativa lider que se esmera en la busqueda constante
     de la excelencia academica, el desarrollo de valores y la relación armoniosa ente
     los miembros de la comunidad educativa.</p>
     </div>
     </div>
    

    <div class="ft">
        <img src="img/WhatsApp Image 2026-03-11 at 9.13.17 AM (1).jpeg"> 
        <img src="img/WhatsApp Image 2026-03-11 at 9.13.18 AM.jpeg">
    </div>
    `;
});

galeriaactividades.addEventListener("click", function() {
    contenido.innerHTML = `
    <h2>Galería de Actividades</h2>
    <div class="ft">
        <h2>Estudiantes de computación</h2>
        <p> Aquí observamos a los estudiantes de la Carrera de Bachillerato
        en computación, poner en practicas los conocimientos adquiridos durante
        su estadía en el Colegio Partivcular Mixto Blaise Pascal</p>
        <img src="img/taller de computacion1.jpg" >
        <img src="img/taller de computacion2.jpg"> 
        <img src="img/taller de computacion3.jpg" >

        <h2>Elaboración de alfombras </h2>
        <p> Aquí observamos a los estudiantes de distintos rangos acádemicos,
        elaborar alfombras confortando así su fé...</p>
        <img src="img/recreacion de alfombras.jpg" >
        <img src="img/recreacion de alfonbras 2.jpg" >
        <img src="img/recreacion de alfombras 3.jpg" >

        <h2>Desfiles festivos</h2>
        <p> Siempre siendo participes de las festividades a nivel nacional,
        celebrando la independencia de nuestra querida patria</p>
        <img src="img/desfile.jpg">
        <img src="img/desfile2.jpg">


 <h2> Nuevas instalaciones </h2>
 <p>Construcción de edificio para nuestros estudiantes, porque para nosotros
 son lo más importante de nuestro centro educativo... </p>

 <img src="img/WhatsApp Image 2026-03-11 at 9.13.12 AM.jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.29 AM (3).jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.15 AM (1).jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.27 AM.jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.15 AM (3).jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.15 AM (3).jpeg">
  <br>
  <h2> Docentes</h2>
  <p>Más que maestros son los guías del futuro de tus hijos
Colegio Particular Mixto Blaise Pascal, el aprendisaje va más allá de los libros, presentamos a nuestro equipo docente, profesionales apasionados 
que no solo enseñan lecciones, si no que inspiran valores.</p>
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.16 AM (2).jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.18 AM (1).jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.21 AM (2).jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.21 AM (3).jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.22 AM.jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.19 AM (2).jpeg">
 <br><br>
 <h2> Estudiantes</h2>
 <p>Nuestros alumnos son nuestra mejor carta de presentación
En el Colegio Blaise Pascal, no solo formamos estudiantes, formamos lideres artisticos 
y mentes brillantes, ver el esfuerzo, la curiosidad y la dedicación que ponen en cada proyecto nos llena de orgullo.</p>
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.16 AM (4).jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.21 AM.jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.16 AM (1).jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.25 AM (2).jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.20 AM.jpeg">
 <img src="img/WhatsApp Image 2026-03-11 at 9.13.19 AM.jpeg">

 <h2>Áreas Destacadas  Del Colegio Particular Mixto Blaise Pascal</h2>
 <br><br>
 <p>Áreas destacadas del Colegio Blaise Pascal
Inscribir a tus hijos en el Colegio Blaise Pascal es una excelente opción ya que contamos con un 
laboratorio de computación en el que pueden realizan diversas actividades tecnologicas e innovadoras, 
también contamos con un área recreativa, cancha que pueden utilizarla para hacer actividad física.</p>
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.13 AM (1).jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.14 AM (3).jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.14 AM (2).jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.14 AM.jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.25 AM.jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.24 AM (1).jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.23 AM.jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.21 AM (1).jpeg">
  <br><br>
  <h2> TROFEOS DEL COLEGIO BLAISE Pascal </h2>
  <br><br>
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.29 AM.jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.29 AM (2).jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.29 AM (1).jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.28 AM.jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.27 AM (3).jpeg">
  <img src="img/WhatsApp Image 2026-03-11 at 9.13.27 AM (2).jpeg">

 </div>

 `;



    
});

calculadorapromedios.addEventListener("click", function() {
    contenido.innerHTML = `
    <h2>Calculadora de Promedios</h2>
    <p>Ingresa tus calificaciones para calcular tu promedio:</p>
    <div class="tarjeta">
        <input type="number" id="calificacion1" placeholder="Calificación 1"><br>
        <input type="number" id="calificacion2" placeholder="Calificación 2"><br>
        <input type="number" id="calificacion3" placeholder="Calificación 3"><br>
        <input type="number" id="calificacion4" placeholder="Calificación 4"><br>
        <button onclick="calcularPromedio()">Calcular Promedio</button>
        <div id="resultadoPromedio" style="font-weight:bold; margin-top:10px;"></div>
    </div>
    `;
});

function calcularPromedio() {
    const c1 = parseFloat(document.getElementById('calificacion1').value) || 0;
    const c2 = parseFloat(document.getElementById('calificacion2').value) || 0;
    const c3 = parseFloat(document.getElementById('calificacion3').value) || 0;
    const c4 = parseFloat(document.getElementById('calificacion4').value) || 0;
    const promedio = (c1 + c2 + c3 + c4) / 4;
    document.getElementById('resultadoPromedio').innerHTML = "<p>El promedio es: " + promedio + "</p>";
}



calculadoraimc.addEventListener("click", function() {
    contenido.innerHTML = `
    <h2>Calculadora de IMC</h2>
    <p>Control de Masa Corporal para la Salud</p>
    <div class="tarjeta">
        <input type="number" id="peso" placeholder="Peso en kg (Ej: 60)"><br>
        <input type="number" id="altura" placeholder="Altura en metros (Ej: 1.65)"><br>
        <button onclick="calcularIMC()">Calcular IMC</button>
        <div id="resultadoIMC" style="font-weight:bold; margin-top:10px; color: green;"></div>
    </div>
    `;
});

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value) || 0;
    const altura = parseFloat(document.getElementById('altura').value) || 0;
    
    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let estado = "";
        
        if (imc < 18.5) {
            estado = "Bajo peso";
        } else if (imc < 25) {
            estado = "Peso normal";
        } else {
            estado = "Sobrepeso";
        }
        
        document.getElementById('resultadoIMC').innerHTML = "Tu IMC es: " + imc.toFixed(2) + " (" + estado + ")";
    } else {
        document.getElementById('resultadoIMC').innerHTML = "Por favor, ingresa datos válidos.";
    }
}

proximoseventos.addEventListener("click", function() {
    contenido.innerHTML = `
    <h2>Próximos Eventos</h2>
    <p>Mantente al tanto de nuestras actividades institucionales.</p>
    
    <div class="tarjeta">
        <h3 style="color: #4745bd;">Proyecto de Vida</h3>
        <p>Los estudiantes de diversificado presentarán sus proyectos de vida a la comunidad educativa.</p>
        <p><strong>Fecha:</strong> 19 de Marzo de 2026</p>
    </div>
    
    <div class="tarjeta">
        <h3 style="color: #6acc8b;">Juego de Estaciones</h3>
        <p>Celebración del aniversario de nuestro centro educativo con el tradicional juego de estaciones.</p>
        <p><strong>Fecha:</strong> 26 de marzo de 2026</p>
        <p><strong>Hora:</strong> 13:00 a 18:00 horas</p>
    </div>

    <div class="tarjeta">
        <h3 style="color: #4745bd;">Elección de Señorita Colegio y Fogata</h3>
        <p>Acompáñanos en la elección y la gran fogata de aniversario.</p>
        <p><strong>Fecha elección:</strong> 27 de marzo de 2026 (13:00 a 16:00 hrs)</p>
        <p><strong>Fecha fogata:</strong> 27 de marzo de 2026 (Ingreso: 18:00 hrs)</p>
    </div>

    <div class="tarjeta">
        <h3 style="color: #6acc8b;">Alborada</h3>
        <p>Despierta y celebra con nosotros en la tradicional alborada.</p>
        <p><strong>Fecha:</strong> 28 de marzo de 2026</p>
        <p><strong>Hora:</strong> 4:30 a 7:00 horas</p>
    </div>
    `;
});

calendarioclases.addEventListener("click", function() {
    contenido.innerHTML = `
    <h2>Calendario de Clases</h2>
    <p>Horario general de nuestra jornada educativa:</p>
    
    <div class="tarjeta" style="text-align: left;">
        <p><strong>07:00 AM - 07:30 AM:</strong> Ingreso de estudiantes</p>
        <p><strong>07:30 AM - 08:40 AM:</strong> Primer bloque de clases</p>
        <p><strong>08:40 AM - 09:50 AM:</strong> segundo bloque de clases</p>
        <p><strong>09:50 AM - 10:10 AM:</strong> Receso</p>
        <p><strong>10:10 AM - 11:20 AM:</strong> tercer bloque de clases</p>
        <p><strong>12:30 PM:</strong> Salida de jornada diaria</p>
    </div>
    `;
});



