var formRegistro = document.getElementById("formRegistro");
var formInicio = document.getElementById("formInicio");

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("registroEmail");
  const password1 = document.getElementById("registroPassword1");
  const password2 = document.getElementById("registroPassword2");
  var registroValido = true;

  if (registroValido) {
    auth
      .createUserWithEmailAndPassword(email.value, password1.value)
      .then((userCredential) => {
        //Limpiar formulario
        formRegistro.reset();
        //cerrar modal
        $("#modalRegistro").modal("hide");

        console.log("sign up");

        var user = firebase.auth().currentUser;

        user
          .sendEmailVerification()
          .then(function () {
            // Email sent.
            console.log("email sent");
          })
          .catch(function (error) {
            console.log("error enviando email");
          });
      });
  }
});

formInicio.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("inicioEmail");
  const password = document.getElementById("inicioPassword");
  var registroValido = true;

  if (registroValido) {
    auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        //Limpiar formulario
        formRegistro.reset();
        //cerrar modal
        $("#modalRegistro").modal("hide");

        console.log("sign in");
      });
  }
});
