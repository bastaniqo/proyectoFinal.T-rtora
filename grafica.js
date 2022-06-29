const data = {labels: ['Inicio', 'Ganancia','Final'],
datasets: 
[{
    label: 'Inicio',
    data: [0,0,0],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
}]
}
const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
let myChart = new Chart(
    document.getElementById('resultado'),
    config
);
function updateValue(){
    console.log(calculoInteresCompuesto)
    myChart.config.data.datasets[0].data[0]= calculoInteresCompuesto[0].capitalI
    myChart.config.data.datasets[0].data[1]= calculoInteresCompuesto[0].ganancia
    myChart.config.data.datasets[0].data[2]= calculoInteresCompuesto[0].capitalFinal
    myChart.update();
    console.log(data)
}

let contador = 0
function graficar () {   
    updateValue()   
   
let canvas = document.getElementById ('headCanvas');
setTimeout (()=> {
    
    if (contador>0){
        resetHeadCanvas()
    }
    for (i=0; i<localStorage.length; i++){
        contador++
        const h4 = document.createElement('h4');
        const headCanvas = localStorage.getItem(localStorage.key(0));
        h4.innerHTML = headCanvas
        canvas.appendChild (h4);
    }
    
}, 500)
}



function resetHeadCanvas() {    
    let headCanvas = document.getElementById("headCanvas");    
    while (headCanvas.firstChild) {
        headCanvas.removeChild(headCanvas.firstChild);            
    }    
};