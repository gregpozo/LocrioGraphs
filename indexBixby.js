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
        labels:['Malo', 'No Me Interesa', 'OK', 'Lo Amo'],
        datasets:[{
          label:'Gasto',
          data:[
            7,
            3,
            1,
            1
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(220, 60, 49, 0.8)',
            'rgba(54, 162, 235, 0.5)',
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
          display:true,
          text:'Opinion Sobre Bixby De Usuarios Samsung',
          //fontSize:25
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
