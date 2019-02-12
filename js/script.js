$('#heading').addClass('animated bounceInDown slow');

$('#years').addClass('animated bounce infinite');

$(document).ready(function(){
  
     $("#btn3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#sectionOne").offset().top
                }, 1000);
            });
          });

    //on clicking the button the values of the form elements are stored in form Values
    var formValues= document.getElementsByClassName("acthrs");

    document.getElementById("btn").addEventListener("click", function(){
    
    var i,sum=0; //i variable for index in for loop, sum is the accumulator
    
    for(i = 0; i < 5; i++) { //loop runs from 0 to 4
        
          sum = sum + parseInt(formValues[i].value); //for every value of i, the accumulator is added new value
     }
     document.getElementById("hours").innerHTML = sum + " hours"; //display the value of sum



     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart);

     function drawChart() {

        // Create the data table.
         var data =  new google.visualization.DataTable();
         data.addColumn('string', 'Activity');
         data.addColumn('number', 'Hours');
         data.addRows([
           ['Work', parseInt(formValues[0].value)],
           ['Exercise', parseInt(formValues[1].value)],
           ['Portfolio', parseInt(formValues[2].value)],
           ['Family and friends', parseInt(formValues[3].value)],
           ['Sleep', parseInt(formValues[4].value)]
         ]);
 
         // Set chart options. This is the header.
         var options = {
           title: 'My Holiday Activities'
         };
 
         // Instantiate and draw our chart, passing in some options. The variant is user defined.
         var piechart = new google.visualization.PieChart(document.getElementById("div_chart"));
 
         piechart.draw(data, options); 
       }
    });

document.getElementById("btn2").addEventListener("click", function(){
    
     //on clicking the button the values of the form elements are stored in form Values
 var formValues= document.getElementsByClassName("acthrs2");
 
 
 var i,sum=0; //i variable for index in for loop, sum is the accumulator
 
 for(i = 0; i < 5; i++) { //loop runs from 0 to 4
     
       sum = sum + parseInt(formValues[i].value); //for every value of i, the accumulator is added new value
      

  }
 
  document.getElementById("hours2").innerHTML = sum + " hours"; //display the value of sum

});
