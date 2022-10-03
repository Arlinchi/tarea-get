$(document).ready(function () {

    $.get({
        url: 'https://reqres.in/api/users', //DIRECCIÓN SERVER
        data: JSON, //Optativo
        dataType: 'json', //Optativo
        success: function (respuesta) {
            console.table(respuesta);
        },
        error: function () {
            console.error("Sin Respuesta");
        }
    });

    $('#agregar').click(function () {
        console.log("agregar");
        $.get('https://my-json-server.typicode.com/alaravena/ldp3101/usuarios',
            function (data) {

                $.each(data, function (i, item) {
                    $('#tabla').append(
                        '<tr><td class="numerito">' + item.id + '</td><td>' +
                        item.nombre +
                        '</td><td>' +
                        item.email + '</td><td>' + '</td><td>' +
                        item.edad +
                        '</td><td><img src=' +
                        item.avatar
                        + '></td><td><button id="eliminar" class="eliminar" type="button">Eliminar</button></td><td><button type="button" class="btn btn-primary btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">Modal</button></td></tr>');
                    /*$('.eliminar').click(function () {
                        var index = $('.eliminar').index(this) + 1
                        console.log(index);
                        var probando = $('tr');
                        probando[index].remove();
                    });*/
                    var eliminar = $('.eliminar');
                    eliminar.click(function(){
                        $(this).parents('tr').remove();
                    });
                    
                    var id = item.id;
                    var nombre = item.nombre;
                    var email = item.email;
                    var edad = item.edad;
                    var modalbody = $('.modal-body');

                    $('.btn-modal').click(function () {
                        $('tr').show(modalbody.text(id + ' ' + nombre + ' ' + email + ' ' + edad));
                    });
                });
            });
    });

});










