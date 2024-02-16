'Use strict'

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }



    login(username, password){
        //validar el usuario y contraseña if(var1 ===var && var1 ===var)
        if( username === this.username  && this.password === password ){
            alert('Bienvenido a NUMEROS EN ACCIÒN');
        }
        else{
            alert('Datos ingresados incorrectos'); 
            }
    }

    resetPassword (newPassword){
        this.password = newPassword;
         } 
     updateInfo (newEmail){
        this.email = newEmail;
        }    

    showInfo(){
            alert(`usuario: ${this.username} ${this.email}`);                                  
        }   
}


let user = new User("Juan","juan@gmail.com", "12345");
user.login('Juan', '12345');



class Game {
    constructor(description){
        this.description=description;
    }
    showGame(){
        alert(this.description)

    }
}

let sumaGame = new Game (`El juego seleccionado es suma. Para este juego debes llevar el cohete hacia la respuesta correcta de la suma presentada.`);
let restaGame = new Game (`El juego seleccionado es resta. Para este juego debes llevar el cohete hacia la respuesta correcta de la resta presentada.`);
let opcion = Number(prompt("Ingrese 1 para el juego de suma o 2 para el juego de resta"));



if (opcion == 1) {
sumaGame.showGame
}
else if (opcion == 2) {
      restaGame.showGame  
    }
else {
    alert ('No es una opción válida')
}



class Attempt {
    constructor(user,numAttempt){
        this.user = user;
        this.numAttempt = numAttempt
    }

    increaseAttempts(aumentoAttempt){
     aumentoAttempt = this.numAttempt++ ;
    }
    showStatus(){
        alert(`El número de intentos realizados por ${this.user.username} es ${this.numAttempt}`);
    }
}

let attempt = new Attempt(user,"0")
attempt.increaseAttempts();
attempt.showStatus();

