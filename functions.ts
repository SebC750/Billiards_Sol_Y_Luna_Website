const hours = [
    {
        "day": "Lunes",
        "opening_hour": "3:30pm",
        "closing_hour": "12:00am" 
    },
    {
        "day": "Martes",
        "opening_hour": "3:30pm",
        "closing_hour": "12:00am" 
    },
    {
        "day": "Miercoles",
        "opening_hour": "3:30pm",
        "closing_hour": "12:00am" 
    },
    {
        "day": "Jueves",
        "opening_hour": "3:30pm",
        "closing_hour": "12:00am" 
    },
    {
        "day": "Viernes",
        "opening_hour": "3:30pm",
        "closing_hour": "4:00am" 
    },
    {
        "day": "Sabado",
        "opening_hour": "2:30pm",
        "closing_hour": "4:00am" 
    },
    {
        "day": "Domingo",
        "opening_hour": "2:00pm",
        "closing_hour": "12:00am" 
    }
    ]

const hourSchedule = hours[0]

console.log(hourSchedule)

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("houry-schedule")?.addEventListener('load',function(){
          let tableRow = document.createElement('tr')
          let day = document.createElement('td')
    } )
})