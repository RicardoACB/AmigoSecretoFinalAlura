
class persona{
    constructor(_nombre){
        this.nombre=_nombre;
    }

    crearPersona(){
        let _persona=document.createElement("LI");
        _persona.innerHTML=this.nombre;
        return _persona;
    }
}

let amigos=[];
let lista_amigos=document.querySelector("#listaAmigos");
let input_amigos=document.querySelector("#amigo");
let submit=document.querySelector(".button-add");
let sortear_amigo=document.querySelector(".button-draw");
let resultado=document.querySelector("#resultado");

function agregarAmigo(){
    if (!input_amigos.value){
        alert("Por favor, inserte un nombre.");
    }

    else{
        amigos.push(input_amigos.value);
        input_amigos.value="";
        mostrar_amigos();
        resultado.innerHTML="";
    }
   
}

function mostrar_amigos(){
    lista_amigos.innerHTML="";
    amigos.forEach(numero=>{
        let Persona=new persona(numero);
        let item=Persona.crearPersona();
        lista_amigos.appendChild(item);
    })
}

function sortearAmigo(){
    
    lista_amigos.innerHTML="";
    
    if(amigos.length===0){
            alert("Tiene que haber contenido dentro de la tombola");
            resultado.innerHTML=" ";
        }

    else{
        
        amigo=Math.floor((Math.random()*amigos.length));
        resultado.innerHTML=`El sorteado fue: ${amigos[amigo]}`;
        amigos.length=0;
    }
}

submit.setAttribute("onclick","agregarAmigo()");
