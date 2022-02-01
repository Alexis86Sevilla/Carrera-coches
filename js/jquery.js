$(document).ready(function () {
  //DECLARACIONES DE VARIABLES
  var cantidadJugadores = [];
  var recorrido = $("#container").width() - 115;

  //OCULTAR BOTÓN DE REINICIAR
  $("#reiniciar").hide();

  //FUNCIÓN PARA CREAR UN ARRAY Y PINTAR LOS JUGADORES

  $("#listaJugadores").click(function () {
    let jugadores = $("#listaJugadores").val();
    cantidadJugadores = new Array(parseInt(jugadores));
    $("#carrera").empty();

    for (let index = 1; index <= cantidadJugadores.length; index++) {
      let contenedorJugadores = `<div id='carretera${index}'><img id='jugador${index}' src='assets/img/jugador${index}.png'></img></div>`;
      $("#carrera").append(contenedorJugadores);
      $("#carretera" + index).css(
        "backgroundImage",
        "url(assets/img/road.png)"
      );
      $("#carretera" + index).css("backgroundSize", "150px");
    }
  });

  //FUNCIÓN PARA MOVER LOS COCHES
  $("#iniciar").click(function () {
    let contadorPosiciones = 1;

    for (let index = 1; index <= cantidadJugadores.length; index++) {
      $("#jugador" + index).animate(
        { marginLeft: recorrido },
        Math.random() * 10000,
        function () {
          $("#carretera" + index).prepend(
            "<div class='posicion'>Posicion " + contadorPosiciones++ + "</div>"
          );
        }
      );
    }

    $(this).hide();
    $("#reiniciar").show();
  });

  //FUNCIÓN PARA PARAR Y REINICIAR LOS COCHES
  $("#reiniciar").click(function () {
    for (let index = 1; index <= cantidadJugadores.length; index++) {
      $("#jugador" + index).stop();
      $("#jugador" + index).css("marginLeft", "0px");
      $(".posicion").empty();
    }
    $(this).hide();
    $("#iniciar").show();
  });
});
