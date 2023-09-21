//funcion mostrar
function mostrar(dato){
    switch(dato){
        case 1:
            document.getElementById("ejercicio1").style.display = "block";
            document.getElementById("ejercicio2").style.display = "none";
            document.getElementById("ejercicio3").style.display = "none";
            document.getElementById("ejercicio4").style.display = "none";
            document.getElementById("ejercicio5").style.display = "none";
            document.getElementById("ejercicio6").style.display = "none";
            document.getElementById("ejercicio7").style.display = "none";
            break;
        case 2:
            document.getElementById("ejercicio2").style.display = "block";
            document.getElementById("ejercicio1").style.display = "none";
            document.getElementById("ejercicio3").style.display = "none";
            document.getElementById("ejercicio4").style.display = "none";
            document.getElementById("ejercicio5").style.display = "none";
            document.getElementById("ejercicio6").style.display = "none";
            document.getElementById("ejercicio7").style.display = "none";
            break; 
        case 3:
            document.getElementById("ejercicio3").style.display = "block";
            document.getElementById("ejercicio2").style.display = "none";
            document.getElementById("ejercicio1").style.display = "none";
            document.getElementById("ejercicio4").style.display = "none";
            document.getElementById("ejercicio5").style.display = "none";
            document.getElementById("ejercicio6").style.display = "none";
            document.getElementById("ejercicio7").style.display = "none";
            break;
        case 4:
            document.getElementById("ejercicio4").style.display = "block";
            document.getElementById("ejercicio2").style.display = "none";
            document.getElementById("ejercicio3").style.display = "none";
            document.getElementById("ejercicio1").style.display = "none";
            document.getElementById("ejercicio5").style.display = "none";
            document.getElementById("ejercicio6").style.display = "none";
            document.getElementById("ejercicio7").style.display = "none";
            break;  
        case 5:
            document.getElementById("ejercicio5").style.display = "block";
            document.getElementById("ejercicio2").style.display = "none";
            document.getElementById("ejercicio3").style.display = "none";
            document.getElementById("ejercicio4").style.display = "none";
            document.getElementById("ejercicio1").style.display = "none";
            document.getElementById("ejercicio6").style.display = "none";
            document.getElementById("ejercicio7").style.display = "none";
            break;
        case 6:
            document.getElementById("ejercicio6").style.display = "block";
            document.getElementById("ejercicio2").style.display = "none";
            document.getElementById("ejercicio3").style.display = "none";
            document.getElementById("ejercicio4").style.display = "none";
            document.getElementById("ejercicio5").style.display = "none";
            document.getElementById("ejercicio1").style.display = "none";
            document.getElementById("ejercicio7").style.display = "none";
            break;
        case 7:
            document.getElementById("ejercicio7").style.display = "block";
            document.getElementById("ejercicio2").style.display = "none";
            document.getElementById("ejercicio3").style.display = "none";
            document.getElementById("ejercicio4").style.display = "none";
            document.getElementById("ejercicio5").style.display = "none";
            document.getElementById("ejercicio6").style.display = "none";
            document.getElementById("ejercicio1").style.display = "none";
            break;
    }
}
//ejercicio1
function ejer1(){
    var num5 = [5, 7, 12, 4, 6];
    document.getElementById("resultado").innerHTML = "Los numeros dentro del array son: " + num5;
}

//ejercicio2
function ejer2(){
    var num10 = [9, 6, 12, 55, 14, 7, 90, 18, 1, 11];
    var suma = 0;
    for(var v = 0; v < num10.length; v++){
        suma = suma + num10[v];
    }

    var promedio = suma / 10;
    document.getElementById("resultado").innerHTML = "El promedio del array de 10 numeros es: " + promedio;
}

//ejercicio3
function ejer3(){
    var numx = new Array(x);
    var x = Number(prompt("Elija el tamaño del array"));
    var y = Number(prompt("elija un numero"));

    for(var i = 1; i <= x; i++){
        numx.push(y * i);
    }

function mostrarArray(){
    document.getElementById("resultado").innerHTML = "los numeros del array son: " + numx;
}
   
}

//ejercicio4
function ejer4(){
    var nombres = ["Andres", "Maria", "Luis", "Daniela", "Dayana", "Felipe", "Kevin", "Laura", "Jose"];
    var numy = Number(prompt("agregue el numero del elemento que requiere del arreglo del 0 al 8"))

    if(numy >= 0 && numy <= 8){
        document.getElementById("resultado").innerHTML = "El elemento que se encuentra en la posicion " + numy + " es: " + nombres[numy];
    } else{
        document.getElementById("resultado").innerHTML = "La posicion que ingresaste esta fuera del rango del array";
    }
    
}

//ejercicio5
function ejer5(){
    function getRandomInt(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const N = getRandomInt(1,10) * 2 + 1;
    const aleatorio =[];

    for(var d = 0; d < N; d++){
        aleatorio.push(getRandomInt(1, 100));
    }

    document.getElementById("resultado").innerHTML = "El numero aleatorio de N es: " + N + "<br>";
    document.getElementById("resultado").innerHTML += "Los numeros aleatorios del array son: " + aleatorio + "<br>";

    const medio = aleatorio[Math.floor(N / 2)];

    document.getElementById("resultado").innerHTML += " El numero posicionado en el centro del array es: " + medio;    
}

//ejercicio6
function ejer6(){
    var sumas = [
                [  7, 11, 18],
                [ 12,  9, 21],
                [  8,  7, 15],
                [ 55, 44, 99]
                ];

    document.getElementById("resultado").innerHTML = "◦ " + sumas[0][0] + " + " + sumas[0][1] + " = " + sumas[0][2] + "<br>";
    document.getElementById("resultado").innerHTML += "◦ " + sumas[1][0] + " + " + sumas[1][1] + " = " + sumas[1][2] + "<br>";
    document.getElementById("resultado").innerHTML += "◦ " + sumas[2][0] + " + " + sumas[2][1] + " = " + sumas[2][2] + "<br>";
    document.getElementById("resultado").innerHTML += "◦ " + sumas[3][0] + " + " + sumas[3][1] + " = " + sumas[3][2] + "<br>";
    }

    //ejercicio7
function ejer7(){

const filas = 10;
var numerox = Number(prompt("Ingrese un numero"))
const tablaM = [
                [numerox, 1, numerox * 1],
                [numerox, 2, numerox * 2],
                [numerox, 3, numerox * 3],
                [numerox, 4, numerox * 4],
                [numerox, 5, numerox * 5],
                [numerox, 6, numerox * 6],
                [numerox, 7, numerox * 7],
                [numerox, 8, numerox * 8],
                [numerox, 9, numerox * 9],
                [numerox, 10, numerox * 10],
               ];

    document.getElementById("resultado").innerHTML = tablaM[0][0] + " * " + tablaM[0][1] + " = " + tablaM[0][2] + "<br>"
    document.getElementById("resultado").innerHTML += tablaM[1][0] + " * " + tablaM[1][1] + " = " + tablaM[1][2] + "<br>"
    document.getElementById("resultado").innerHTML += tablaM[2][0] + " * " + tablaM[2][1] + " = " + tablaM[2][2] + "<br>"
    document.getElementById("resultado").innerHTML += tablaM[3][0] + " * " + tablaM[3][1] + " = " + tablaM[3][2] + "<br>"
    document.getElementById("resultado").innerHTML += tablaM[4][0] + " * " + tablaM[4][1] + " = " + tablaM[4][2] + "<br>"
    document.getElementById("resultado").innerHTML += tablaM[5][0] + " * " + tablaM[5][1] + " = " + tablaM[5][2] + "<br>"
    document.getElementById("resultado").innerHTML += tablaM[6][0] + " * " + tablaM[6][1] + " = " + tablaM[6][2] + "<br>"
    document.getElementById("resultado").innerHTML += tablaM[7][0] + " * " + tablaM[7][1] + " = " + tablaM[7][2] + "<br>"
    document.getElementById("resultado").innerHTML += tablaM[8][0] + " * " + tablaM[8][1] + " = " + tablaM[8][2] + "<br>"
    document.getElementById("resultado").innerHTML += tablaM[9][0] + " * " + tablaM[9][1] + " = " + tablaM[9][2] + "<br>"
    }
 