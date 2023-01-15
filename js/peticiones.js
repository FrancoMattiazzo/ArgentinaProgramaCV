$(document).ready(function(){
    $.get("https://randomuser.me/api", function(response){
        respuesta = response.results;
        console.log(respuesta[0]);
        let nombre = respuesta[0].name.first + ' ' + respuesta[0].name.last;
        let direccion = 'Direccion: ' + respuesta[0].location.street.name + ' ' + respuesta[0].location.street.number + ', '+ respuesta[0].location.city + ', ' + respuesta[0].location.state + ', ' + respuesta[0].location.country;
        let telefono = 'Telefono: ' + respuesta[0].phone;
        let celular = 'Celular: ' + respuesta[0].cell;
        let mail = 'Email: ' + respuesta[0].email;
        let edad = 'Edad: ' + respuesta[0].dob.age;
        let nacimiento = respuesta[0].dob.date;
        let fechaNacimiento = 'Fecha de Nacimiento: ' + nacimiento.substring(0,10);
        let obtenergenero = respuesta[0].gender;
        let generospanish;
        if(obtenergenero === 'female'){
            generospanish = 'Mujer';
        };
        if(obtenergenero ==='male'){
            generospanish = 'Hombre';
        };
        let genero = 'Genero: ' + generospanish;
        let foto = respuesta[0].picture.large;
        document.getElementById('nombre').innerHTML = nombre;
        document.getElementById('direccion').innerHTML = direccion;
        document.getElementById('telefono').innerHTML = telefono;
        document.getElementById('celular').innerHTML = celular;
        document.getElementById('email').innerHTML = mail;
        document.getElementById('edad').innerHTML = edad;
        document.getElementById('fechanacimiento').innerHTML = fechaNacimiento;
        document.getElementById('genero').innerHTML = genero;
        document.getElementById('foto').innerHTML = `<img src="${foto}" class="img-fluid rounded-circle" alt="Avatar">`;
        console.log(direccion);
    });

});