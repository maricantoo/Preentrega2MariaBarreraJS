// Aqui creamos un buscador de productos, las prendas del array pueden ser filtrados desde el buscador. Si quieren acceder a toda la lista de productos disponibles deben escribir "lista completa". Pueden escribirse en mayusculas o minusculas.


//Array de prendas

const prendas = [
    {producto: "camisa", precio: 50},
    {producto: "pantalon", precio: 100},
    {producto: "zapatos", precio: 200},
    {producto: "sueter", precio: 150},
    {producto: "sandalias", precio: 100},
    {producto: "parka", precio: 300},
    {producto: "botas", precio: 300},
    {producto: "falda", precio: 150},
    {producto: "cinturon", precio: 50},
    {producto: "joggers", precio: 250},
    {producto: "musculosa", precio: 100},
]


let precio1 = 50;
let precio2 = 100;
let precio3 = 150;
let precio4 = 200;
let precio5 = 250;
let precio6 = 300;

// Aquí accedemos al valor de cualquier prenda o a la lista completa.


let ingreso = (prompt("Conoce el precio de los productos disponibles: camisa, pantalon, zapatos, sueter, sandalias, parka, botas, falda, cinturon, joggers, musculosa. Ve todos los producto escribiendo: 'Lista completa.'"));


ingreso = ingreso.toLowerCase();




 function encontrarProducto(){

    if(ingreso === "camisa" || ingreso === "cinturon" ){

        console.log("El valor del producto " + ingreso + " es $" + precio1 );
        

        }else if(ingreso === "pantalon" || ingreso === "sandalias" || ingreso === "musculosa"){

            console.log("El valor del producto " + ingreso + " es $" + precio2 );


            }else if(ingreso === "pantalon" || ingreso === "sandalias" || ingreso === "musculosa"){

                console.log("El valor del producto " + ingreso + " es $" + precio2 );
        
        
                }else if(ingreso === "sueter" || ingreso === "falda"){

                    console.log("El valor del producto " + ingreso + " es $" + precio3 );
            
            
                    }else if(ingreso === "zapatos"){

                        console.log("El valor del producto " + ingreso + " es $" + precio4 );
                
                
                        }else if(ingreso === "joggers"){

                            console.log("El valor del producto " + ingreso + " es $" + precio5 );
                    
                    
                            }else if(ingreso === "parka" || ingreso === "botas"){

                                console.log("El valor del producto " + ingreso + " es $" + precio6 );
                        
                        
                                }else if(ingreso === "lista completa"){ for(prenda of prendas){
        
                                console.log(prenda.producto + " $" + prenda.precio);
                            } 
                                }else{
                                console.log("Producto no se encuentra en la lista ofrecida");
                            }        
                        }



encontrarProducto(); 
  