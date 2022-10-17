# 05-TURNER-API-Challenge
This Site uses third-party API's to create a work day scheduler/planner

## Project

Utilizing JQuery and Bootstrap API's, this website was created as a functional day planner with hourly time slots from 9AM to 5PM, where appointments or tasks can be entered at each hour, and then saved to local storage. This creates saved data for the page which will not be erased upon reloading the page.

### Features

In addition to the local storage saved data, the hourly text entry areas are color coded based on the current time and each time slot's relationship to the current time. Hours which are in the past are shaded in gray, the current hour is shaded in red, and future hours are shaded in green, all of this is automated and powered through JQuery .each functions and if statements.

The site also alerts the user with a 5 second notification that their data has been saved upon clicking the save button for the corresponding hour block. Today's date is also automatically generated and displayed at the top of the page using moment.js.

<img src="/Planner-Page.png" title= "Day Planner Site">
