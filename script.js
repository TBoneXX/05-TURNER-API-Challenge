$(document).ready(function () {
    // listen for save button clicks

   var currentDay = moment().format('dddd, MMMM Do, YYYY');
    var cD = document.getElementById ('currentDay');

   console.log (currentDay);
   console.log (cD);

    cD.insertAdjacentText("beforeend", currentDay);


    $('.saveBtn').on('click', function () {
       
        var notify = $('#notify')[0];
        
        console.log(notify);

        // get nearby values
       var task = $("textarea", $(this).parent()).val();
       var taskTime = $(this).parent().attr('id');
        // save in localStorage
        window.localStorage.setItem(taskTime, task);


      console.log (task);
      console.log(taskTime);
     
        // Show notification that item was saved to localStorage by adding class 'show'
      $(notify).addClass('show');
        
        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $(notify).removeClass('show');
            console.log ('timesup')
            
        }, 5000);
        
    });

    function hourUpdater() {
        // get current number of hours (preferably with moment.js)
      
        var currTime = moment().format('HH');     
        
        // loop over time blocks
       $("textarea").each(function() {
        var taskHour = ($(this).parent().attr('id'));
        console.log(currTime);
        console.log (taskHour);

        if (currTime == taskHour) {
            $("textarea").addClass ('present');
            console.log('present')
        }
      
       else if (currTime > taskHour) {
        $("textarea").addClass ('future');
        console.log('future')
       }

       else  {
        $("textarea").addClass ('past');
        console.log('past')
        }

        });
       
     
    }

       
        // loop over time blocks ---> https://api.jquery.com/each/
        // inside this loop, // check if we've moved past this time. If we have, make the row grey. If it's future, make it green. if it's past, make it red. Using the past, present, and future classes in css file

        // check if we've moved past this time
  

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    // load any saved data from localStorage
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));



  
       

    // display current day on page
})