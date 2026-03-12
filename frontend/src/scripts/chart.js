/* ===== GRÁFICO DE TURMAS ===== */

const turmas = document.getElementById('turmasChart');

new Chart(turmas, {

type: 'bar',

data: {

labels: ['9º A','9º B','8º A','8º B','7º A','7º B'],

datasets: [
{
label:'Média',
data:[8.5,7.8,8.1,7.9,8.3,7.5],
backgroundColor:'#3b82f6'
},
{
label:'Taxa de Aprovação %',
data:[92,88,90,89,94,87],
backgroundColor:'#10b981'
}
]

},

options:{
responsive:true
}

});


/* ===== GRÁFICO DE PRESENÇA ===== */

const presenca = document.getElementById('presencaChart');

new Chart(presenca, {

type:'line',

data:{

labels:['Jan','Fev','Mar','Abr','Mai','Jun'],

datasets:[{

label:'Taxa de Presença %',

data:[95,93,94,96,94,95],

borderColor:'#8b5cf6',

fill:false,

tension:0.4

}]

},

options:{
responsive:true
}

});