$(document).ready(function () {

  var envelope = $('#envelope');
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  var text = "¿Quieres ser mi San Valentín?";
  var index = 0;
  var speed = 80; // velocidad de escritura (ms)
  var typingInterval;

  envelope.click(function () {
    open();
  });

  btn_open.click(function () {
    open();
  });

  btn_reset.click(function () {
    close();
  });

  function typeWriter() {
    if (index < text.length) {
      $("#typewriter").append(text.charAt(index));
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }

  function open() {
    envelope.addClass("open").removeClass("close");

    // reiniciar texto
    clearInterval(typingInterval);
    $("#typewriter").text("");
    index = 0;

    // empezar a escribir después de que abre la carta
    setTimeout(function () {
      typingInterval = setInterval(typeWriter, speed);
    }, 600); // espera a que la carta se abra
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    clearInterval(typingInterval);
    $("#typewriter").text("");
    index = 0;
  }

});
