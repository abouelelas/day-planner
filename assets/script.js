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
        // let value = localStorage.getItem(key);
        // console.log(value);
        // if (value) {
        //     $(`#text${key}`).text(value);
        // }
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
        //compare currentTime with localStorage time and if currentTime === localStorage
        //  $("whateverElement").addClass("whateverisyourcolor") and 
    //     for (var i = 9; i < 18; i++) {
    //         console.log(currentTime, $('.description').data("tdata-time"));
    //         console.log($(`description`).data("time"));
    //         console.log("currentTime: ", currentTime);
    //         //if they equal each other, then check those elements and makes sure that the class has been added.
    //         if ($(`.description`).data("time") == currentTime) {
    //             $(`.description${i}`).addClass("present");
    //         } else if (currentTime < $(`.description${i}`).data("time")) {
    //             $(`.description${i}`).addClass("future");
    //         }
    //     }
    // }
        for (var i = 9; i < 18; i++) {
            console.log(currentTime, $(`#hr-17`).data(".description"));
            if ($('#id').data("time") == currentTime) {
                $("textarea").addClass("present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`.description${i}`).addClass("future",);
            }
        }
}


    setInterval(function () {
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