console.log('Proyecto Final');

const producto = (a,b) => a * b //donde a es el capital inicial y b el resultado de los interes
const basePotencia = (r)=> 1 + (r/100) //donde r es el interes mensual
const calcInteres =(b,e)=> Math.pow(b,e)//donde b es la base y e el exponente resultante del producto frecuencia y anual

let calculoInteresCompuesto = [{capitalI: 0}]
const boton = document.getElementById('boton-calcular');
const capital = document.getElementById('capitalInicial');
const interes0 = document.getElementById('interes');
const frecuencia0 = document.getElementById('frecuencia');
const sumaAporte= document.getElementById("regular")
const anual0 = document.getElementById('anual');
const table = document.getElementById ('result');

function resetResult() {
    calculoInteresCompuesto.length = 0;
    let element = document.getElementById("result");
    
    while (element.firstChild) {
        element.removeChild(element.firstChild);    
          
    }    
};

boton.addEventListener ('click', (evento) => {

    if (frecuencia0.value == ''|| capital.value == '' || interes0.value == '' || anual0.value == '') {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Alguno de los campos necesarios estan vacios',
            showConfirmButton: false,
            timer: 2000
          })
    } else {
        let capitalInicial= capital.value
        let interes= interes0.value
        let frecuencia= frecuencia0.value
        let aporte= sumaAporte.value    
        let anual= anual0.value
        evento.preventDefault() 
        if(calculoInteresCompuesto.length > 0){
            resetResult()              
        }
        if (aporte == "") {       
    
           let result = producto(capitalInicial,calcInteres(basePotencia(interes),producto(frecuencia,anual)));
           let capitalFinal = result.toFixed(2)
           let diferencia = parseInt(capitalFinal - capitalInicial)
            calculoInteresCompuesto.push (new interesCompuesto (anual,capitalInicial,'0','0',interes,frecuencia,diferencia,capitalFinal));
            calculoInteresCompuesto.forEach( ()=>{
                   
                acumuloAporte=producto(frecuencia,aporte);
                for (let i = 0; i < calculoInteresCompuesto.length; i++) {
                    const element = calculoInteresCompuesto[i];
                    console.log(element)
                    for (let key in element) {
                        let fila = document.createElement('th')
                        fila.innerHTML = `${element[key]}`
                        table.appendChild(fila)                              
                    }
                    
                }
               
            })   
            graficar()
        }
        else {   
            let result= producto(capitalInicial,calcInteres(basePotencia(interes),producto(frecuencia,anual)));
            let resultAporte= producto(aporte,calcInteres(basePotencia(interes),producto(frecuencia,anual)-1))/(interes/100);
            let capitalFinal= parseInt((result+resultAporte).toFixed(2));
            let diferencia= parseInt(capitalFinal-capitalInicial);
            let acumuloAporte=producto(frecuencia,aporte);
            calculoInteresCompuesto.push (new interesCompuesto (anual,capitalInicial,aporte,acumuloAporte,interes,frecuencia,diferencia,capitalFinal));
            calculoInteresCompuesto.forEach( ()=>{
                   
                acumuloAporte=producto(frecuencia,aporte);
                for (let i = 0; i < calculoInteresCompuesto.length; i++) {
                    const element = calculoInteresCompuesto[i];
                    console.log(element)
                    for (let key in element) {
                        let fila = document.createElement('th')
                        fila.innerHTML = `${element[key]}`
                        table.appendChild(fila)                              
                    }
                    
                }
               
            })
            graficar()
        }
    } 
    let person = document.getElementsByClassName ('name');
    let usuario = person[0].value
    localStorage.setItem('nombre',`Este es tu resultado ${usuario}`)
})