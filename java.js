var ser="estos son los resultado obtenidos: "; 
document.getElementById("text").innerHTML=ser;
a=parseInt(prompt("numero de datos que desea tomar "));
for (let index = 0; index < a ; index++) {
    var nombre = prompt("su nombre");
    var edad = parseInt(prompt("ingresa tu edad "));
    var peso=parseInt(prompt(" ingrese su peso"));
    var altura=parseFloat(prompt("ingresa tu altura"));

    var imc= peso/(altura*altura);
    var salud=imc>25
    var tiempo;
    switch (edad) {
        case 1:
            tiempo="eres niño";
            break;
        case  2:
            tiempo="eres un niño ";
            break;
        case 3:
            tiempo="eres un niño";
            break;
        case 4:
            tiempo="eres un niño";
            break;
        case 5:
            tiempo="eres un niño";
            break;
        case 6:
            tiempo="eres un niño";
            break;
        case 7:
            tiempo="eres niño";
            break;
        case 8:
            tiempo="eres un niño";
            break;
        case 9:
            tiempo="eres un niño"
            break;
        case 10:
            tiempo="eres un niño";
            break;
        case 11:
            tiempo="eres un niño";
            break;
        case 12:
            tiempo="eres un niño";
            break;
        case  13:
            tiempo="eres un adolecente";
            break;
        case 14:
            tiempo="eres un adolecente";
            break;
        case 15:
            tiempo="eres un adolecente";
        case 16:
            tiempo="eres un adolecente";
            break;
        case 17:
            tiempo="eres un adolecente";
            break;
        default:
            tiempo="eres un adulto"
                

    }
    if (imc<=15){
        document.write(nombre+"  tu edad es "+edad+" años "+tiempo+" y tienes una delgadez muy severa.¿tiene que hacer diete? "+salud+"<br>");
    
    }else if (imc>15 && imc<15.9){
        document.write(nombre+"  tu edad es "+edad+" años "+tiempo+" y tienes una delgadez severa.¿tiene que hacer dieta? "+salud+"<br>");
    }else if(imc>=16 && imc<18.5){
        document.write(nombre+" tu edad es "+edad+" años "+tiempo+" y tienes una delgadez.¿tiene que hacer dieta? "+salud+"<br>");
    }else if(imc>=18.5 && imc<25){
        document.write(nombre+" tu edad es "+edad+" años "+tiempo+" y tienes una peso saludable.¿tiene que hacer dieta? "+salud+"<br>");
    }else if(imc>=25 && imc<30){
        document.write(nombre+" tu edad es "+edad+" años "+tiempo+" y tienes sobrepeso.¿tiene que hacer dieta? "+salud+"<br>");
    }else if(imc>=30 && imc<35){
        document.write(nombre+" tu edad es "+edad+" años "+tiempo+" y tienes obvesidad moderada.¿tiene que hacer dieta? "+salud+"<br>");
    }else if(imc>=35 && imc<40){
        document.write(nombre+" tu edad es "+edad+"años "+tiempo+" y tienes obvesidad severa.¿tiene que hacer dieta? "+salud+"<br>");
    }else {
        document.write(nombre+" tu edad es "+edad+" años "+tiempo+" y tienes obvesidad muy severa.¿tiene que hacer dieta? "+salud+"<br>");
    }

    
    
}
var text=document.getElementById("boton").addEventListener("click",function () {
    var nombre = prompt("su nombre");
    var edad = parseInt(prompt("ingresa tu edad "));
    var peso=parseInt(prompt(" ingrese su peso"));
    var altura=parseFloat(prompt("ingresa tu altura"));

    var imc= peso/(altura*altura);
    var salud=imc>25
    var tiempo;
    switch (edad) {
        case 1:
            tiempo="eres niño";
            break;
        case  2:
            tiempo="eres un niño ";
            break;
        case 3:
            tiempo="eres un niño";
            break;
        case 4:
            tiempo="eres un niño";
            break;
        case 5:
            tiempo="eres un niño";
            break;
        case 6:
            tiempo="eres un niño";
            break;
        case 7:
            tiempo="eres niño";
            break;
        case 8:
            tiempo="eres un niño";
            break;
        case 9:
            tiempo="eres un niño"
            break;
        case 10:
            tiempo="eres un niño";
            break;
        case 11:
            tiempo="eres un niño";
            break;
        case 12:
            tiempo="eres un niño";
            break;
        case  13:
            tiempo="eres un adolecente";
            break;
        case 14:
            tiempo="eres un adolecente";
            break;
        case 15:
            tiempo="eres un adolecente";
        case 16:
            tiempo="eres un adolecente";
            break;
        case 17:
            tiempo="eres un adolecente";
            break;
        default:
            tiempo="eres un adulto"
                

    }
    if (imc<=15){
        document.write(nombre+"  tu edad es "+edad+" años "+tiempo+" y tienes una delgadez muy severa.¿tiene que hacer diete? "+salud+"<br>");
    
    }else if (imc>15 && imc<15.9){
        document.write(nombre+"  tu edad es "+edad+" años "+tiempo+" y tienes una delgadez severa.¿tiene que hacer dieta? "+salud+"<br>");
    }else if(imc>=16 && imc<18.5){
        document.write(nombre+" tu edad es "+edad+" años "+tiempo+" y tienes una delgadez.¿tiene que hacer dieta? "+salud+"<br>");
    }else if(imc>=18.5 && imc<25){
        document.write(nombre+" tu edad es "+edad+" años "+tiempo+" y tienes una peso saludable.¿tiene que hacer dieta? "+salud+"<br>");
    }else if(imc>=25 && imc<30){
        document.write(nombre+" tu edad es "+edad+" años "+tiempo+" y tienes sobrepeso.¿tiene que hacer dieta? "+salud+"<br>");
    }else if(imc>=30 && imc<35){
        document.write(nombre+" tu edad es "+edad+" años "+tiempo+" y tienes obvesidad moderada.¿tiene que hacer dieta? "+salud+"<br>");
    }else if(imc>=35 && imc<40){
        document.write(nombre+" tu edad es "+edad+"años "+tiempo+" y tienes obvesidad severa.¿tiene que hacer dieta? "+salud+"<br>");
    }else {
        document.write(nombre+" tu edad es "+edad+" años "+tiempo+" y tienes obvesidad muy severa.¿tiene que hacer dieta? "+salud+"<br>");
    }

    
    
 
    
   
    

    
});

