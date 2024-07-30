var noticiasHome = []
noticiasHome[0]={
    area: "Deportes",
    titulo: "¡Hoy vuelve la champions! Comienzan los cuartos de final de la edición 2023/24",
    copete: "Real Madrid - Manchester City y Arsenal - Bayern Munich",
    imagenes: ["imagenes/noticias/1.jpg"],
    autor: "Franco Dell'Orso",
    fecha: "09/04/2024",
    link: "https://medium.com/@alumno.fdellorsomengon/hoy-vuelve-la-champions-942cdda7adc5",
    categoria: "Deporte",
    color: "#eeee",
};

noticiasHome[1]={
    area:"Arrayanes",
    titulo:"Accidente que pudo haber terminado en tragedia",
    copete:"El árbol de jacarandá se cayó y provocó destrozos",
    imagenes:["imagenes/noticias/2.png"],
    autor:"Franco Dell'Orso",
    fecha:"16/04/2024",
    link: "https://medium.com/@alumno.fdellorsomengon/accidente-que-pudo-haber-terminado-en-tragedia-ee9f84026851",
    categoria: "Arrayanes",
    color: "#eeee",
};

noticiasHome[2]={
    area:"Medio Ambiente",
    titulo:"¿Cómo el cambio climático afecta el clima en Buenos Aires?",
    copete:"La razón detrás del clima actual",
    imagenes:["imagenes/noticias/3.jpg"],
    autor:"Franco Dell'Orso",
    link: "https://medium.com/@alumno.fdellorsomengon/cómo-el-cambio-climático-afecta-el-clima-en-buenos-aires-254025702e08",
    fecha:"21/5/24",
};

noticiasHome[3]={
    area:"Tecnología-Arrayanes",
    titulo:"Prohibir celulares en el ámbito educativo, ¿a favor o en contra?",
    copete:"Análisis objetivo de la situación",
    imagenes:["imagenes/noticias/4.jpeg"],
    autor:"Franco Dell'Orso",
    fecha:"21/5/24",
    link:"https://medium.com/@alumno.fdellorsomengon/prohibir-celulares-en-el-ámbito-educativo-a-favor-o-en-contra-7984edb28320",
};

noticiasHome[4]={
    area:"Arrayanes",
    titulo:"Alumnos del Colegio Arrayanes nuevamente muestran su solidaridad",
    copete:"Charlamos con uno de los alumnos",
    imagenes:["imagenes/noticias/5.jpeg"],
    autor:"Franco Dell'Orso",
    fecha:"28/5",
    link: "https://medium.com/@alumno.fdellorsomengon/alumnos-del-colegio-arrayanes-nuevamente-muestran-su-solidaridad-733b3263d3d4",
};

noticiasHome[5]={
    area:"Arrayanes",
    titulo:"El 25 de mayo en arrayanes",
    copete:"La celebración del 25 de mayo se llevará a cabo en arrayanes",
    imagenes:["imagenes/noticias/6.jpg"],
    autor:"Matías Salvatore",
    fecha:"21/5/24",
    link: "https://medium.com/@alumno.fdellorsomengon/el-25-de-mayo-en-arrayanes-3224ba66b993",
};             

function reemplazarNoticia0(){
    document.getElementById("areaNoticia0").innerHTML=noticiasHome[0].area;
    document.getElementById("fechaNoticia0").innerHTML=noticiasHome[0].fecha;
    document.getElementById("tituloNoticia0").innerHTML=noticiasHome[0].titulo;
    document.getElementById("autorNoticia0").innerHTML=noticiasHome[0].autor;
    document.getElementById("imagenNoticia0").src=noticiasHome[0].imagenes[0];
    document.getElementById("link0").href = noticiasHome[0].link;
}
reemplazarNoticia0();

function reemplazarNoticia1(){
    document.getElementById("areaNoticia1").innerHTML=noticiasHome[1].area;
    document.getElementById("fechaNoticia1").innerHTML=noticiasHome[1].fecha;
    document.getElementById("tituloNoticia1").innerHTML=noticiasHome[1].titulo;
    document.getElementById("autorNoticia1").innerHTML=noticiasHome[1].autor;
    document.getElementById("imagenNoticia1").src=noticiasHome[1].imagenes[0];
    document.getElementById("link1").href = noticiasHome[1].link;
}
reemplazarNoticia1();

function reemplazarNoticia2(){
    document.getElementById("areaNoticia2").innerHTML=noticiasHome[2].area;
    document.getElementById("fechaNoticia2").innerHTML=noticiasHome[2].fecha;
    document.getElementById("tituloNoticia2").innerHTML=noticiasHome[2].titulo;
    document.getElementById("autorNoticia2").innerHTML=noticiasHome[2].autor;
    document.getElementById("imagenNoticia2").src=noticiasHome[2].imagenes[0];
    document.getElementById("link2").href = noticiasHome[2].link;
}
reemplazarNoticia2();

function reemplazarNoticia3(){
    document.getElementById("areaNoticia3").innerHTML=noticiasHome[3].area;
    document.getElementById("fechaNoticia3").innerHTML=noticiasHome[3].fecha;
    document.getElementById("tituloNoticia3").innerHTML=noticiasHome[3].titulo;
    document.getElementById("autorNoticia3").innerHTML=noticiasHome[3].autor;
    document.getElementById("imagenNoticia3").src=noticiasHome[3].imagenes[0];
    document.getElementById("link3").href = noticiasHome[3].link;
}
reemplazarNoticia3();

function reemplazarNoticia4(){
    document.getElementById("areaNoticia4").innerHTML=noticiasHome[4].area;
    document.getElementById("fechaNoticia4").innerHTML=noticiasHome[4].fecha;
    document.getElementById("tituloNoticia4").innerHTML=noticiasHome[4].titulo;
    document.getElementById("autorNoticia4").innerHTML=noticiasHome[4].autor;
    document.getElementById("imagenNoticia4").src=noticiasHome[4].imagenes[0];
    document.getElementById("link4").href = noticiasHome[4].link;
}
reemplazarNoticia4();
function reemplazarNoticia5(){
    document.getElementById("areaNoticia5").innerHTML=noticiasHome[5].area;
    document.getElementById("fechaNoticia5").innerHTML=noticiasHome[5].fecha;
    document.getElementById("tituloNoticia5").innerHTML=noticiasHome[5].titulo;
    document.getElementById("autorNoticia5").innerHTML=noticiasHome[5].autor;
    document.getElementById("imagenNoticia5").src=noticiasHome[5].imagenes[0];
    document.getElementById("link5").href = noticiasHome[5].link;
}
reemplazarNoticia5();

//

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Cerrar el menú si se hace clic en cualquier parte de la página
  document.addEventListener('click', function (event) {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!menu.contains(event.target) && event.target !== menuIcon) {
      menu.style.display = 'none';
    }
  });