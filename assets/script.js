function secondUpdater() {
    $(".current-time").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    setInterval(secondUpdater, 1000)
}
secondUpdater();


//current date and time
var m = moment();
var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
var currentDate = m.format("MMM Do YYYY");
var currentHour = moment().hours();
console.log('current hour: ', currentHour)

getLocalStorage()
function getLocalStorage() {

    $(".saveBtn").each(function (elem) {
        $(this).parent().siblings().children('.description').val(localStorage.getItem($(this).attr("id")));
    });
}
$(document).ready(function () {
    function formatAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
    formatAMPM();

    function updateColors() {
        var currentTime = new Date().getHours();
        console.log("currentTime: ", currentTime);
        console.log(localStorage.getItem);
        for (var i = 9; i < 18; i++) {
            var hour = $('#text-entry' + i);
            if (i < currentTime) {
                hour.addClass("past");
            } else if (i === currentTime) {
                hour.addClass("present");
            } else {
                hour.addClass("future");
            }
        }
    }


    setInterval(function (eventText) {
        updateColors();
    }, 1000);

    var saveBtn = $('.saveBtn');

    saveBtn.on('click', function () {
        console.log(this)
        let eventId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').val();
        console.log(eventId);
        console.log(eventText);
        localStorage.setItem(eventId, eventText);
    });
});