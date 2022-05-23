const pizza=[{

    nombre: "Cuatro Quesos",
    id: 1,
    ingredientes: "Roquefort, Muzzarela, Parmesano, Gouda ",
    precio: 800,

},{
    nombre: "Especial",
    id: 2,
    ingredientes: "Muzzarela, Jamon, Morron, Aceitunas",
    precio: 850,

},{
    nombre: "Napolitana",
    id: 3,
    ingredientes: "Muzzarela, Jamon, Tomate, Aceitunas",
    precio: 900,

},{
    nombre: "Fugazza",
    id: 4,
    ingredientes: "Cebolla, Parmesano, Aceite de Oliva",
    precio: 1000,
},{
    nombre: "Hawaiana",
    id: 5,
    ingredientes: "Jamon, Anana, Queso",
    precio: 900,
},{
    nombre: "Pollo",
    id: 6,
    ingredientes: "Pollo, Queso, Champiñones",
    precio: 500,
}
]


const h2Tag= document.getElementById("h2")
const h4Tag= document.getElementById("h4")
const inputTag= document.getElementById("input")
const buttonTag= document.getElementById("button")


const funcionPizzas=()=>{

    buttonTag.addEventListener("click", (e)=>{
        
        while(h2Tag.firstChild && h4Tag.firstChild){
            h2Tag.removeChild(h2Tag.firstChild)
            h4Tag.removeChild(h4Tag.firstChild)
        }

        let valorInput= inputTag.value
        valorInput= Number(valorInput)

        const pizzaSelected= pizza.find(pizza=> pizza.id === valorInput);
            if(pizzaSelected === undefined){
                alert("No coincide el ID con las pizzas que estan en la carta")
            }else{
                h2TagText= document.createTextNode(pizzaSelected.nombre)
                h2Tag.appendChild(h2TagText)

                h4TagText= document.createTextNode(pizzaSelected.precio)
                h4Tag.appendChild(h4TagText)
            }
    } )
}


funcionPizzas()