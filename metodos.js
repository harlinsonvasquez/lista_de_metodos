//metodos numeros
let numdecimal=1.50;
let Num=2;
let num1="12.3"
//comprueba si un numero es finito
console.log(isFinite(Num))

Number.isInteger(Num)

//determina cuantos numeros despues del punto
console.log(numdecimal.toFixed(1))

//convierte texto a entero
console.log(Number.parseInt(num1))

//convierte texto a float
console.log(Number.parseFloat(num1))


//metodos matematicos

/**La función Math.exp() en JavaScript se utiliza para 
 * calcular el valor de la función exponencial de un número */

console.log(Math.exp(Num))

//DEVUELVE EL NUMERO MAS GRANDE PASADO POR PARAMETROS

console.log(Math.max(numdecimal,Num))

//devuelve el numero menor pasado por parametros

console.log(Math.min(numdecimal,Num))

//devuelve el numero elevado al numero indicado

console.log(Math.pow(Num,10))

//devuelve la raiz cuadrada
console.log(Math.sqrt(9))

//devuelve el entero mas cercano
console.log(Math.round(numdecimal))

//devuelve el entero superior mas cercano
console.log(Math.ceil(numdecimal))
//devuelve el entero inferior mas cercano
console.log(Math.floor(numdecimal))


//estructuras de control

//uso basico con if else 

let edad=17;

if(edad>=18){
    console.log("mayor de edad")
}else if(edad>18 && edad<60){
    console.log("no eres tan viejo")
}else if(edad<18){
console.log("eres muy chico")
}else{
    console.log("eres muy viejo")
}

let diaSemana="lunes"
//estructura de control switch
switch(diaSemana){
    case "lunes":
        console.log("es lunes")
        break;
    case "martes":
        console.log("es martes")
        break;
    default:
        console.log("no se que dia es")
}

//estructura for

for (let i=1; i<5; i++){
    console.log(i)
    //en este for imprimimos los nunmeros del 1 al 4
}

for (let i=0, j=10; i<5; i++,j-=2){//en este for urilizamos 2 variables
    //i que va de de cero hasta 4 y j que arranca en 10 y va disminuyendo -2 eb cada iteracion
    console.log(`i:${i}  , j:${j}`)
}

for(let i=1; i<4; i++){
    console.log(`iteracion externa ${i}`)
    //primero hace una externa luego ejecuta todas las internas
    //luego ejecuta la segunda iteracion externa y vuelve a jecutar las internas

    for(let j =1; j<3 ; j++){
        console.log(`iteracion interna${j}`)
    }
}

for(let i=0; i<=10; i++){
    if(i%2==0){
        continue;
    }
    console.log(i)
}

