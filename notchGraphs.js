let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    //Chart.defaults.global.scaleFontSize = 30;
    Chart.defaults.global.defaultFontSize = 14;
    Chart.defaults.global.defaultFontColor = '#777';
    Chart.defaults.global.responsive = true;

    let massPopChart = new Chart(myChart, {
      type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Me Molesta', 'No Me Molesta'],
        datasets:[{
          label:'Gasto',
          data:[
            20,
            80
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(220, 60, 49, 0.8)',
            'rgba(63,193,115,0.8)',
            'rgba(235, 156, 58, 0.5)',
            'rgba(117, 235, 22, 0.5)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        maintainAspectRatio: false,
        title:{
          display:false,
          text:'Consumo promedio de un Estadounidense durante el "Holiday Season"',
          fontSize:25
        },
        legend:{
          display:true,
          labels:{
            fontColor:'#000'
          }
        },
        //layout:{
          //padding:{
            //left:50,
            //right:0,
            //bottom:0,
            //top:0
          //}
        //},
        tooltips:{
          enabled:true
        }
      }
});