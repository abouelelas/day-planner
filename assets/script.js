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

        //     let value = localStorage.getItem(key);
        //     console.log(value);
        //     if (value) {
        //         $(`#text${key}`).text(value);
        //     }
        // })
    })
}
$(document).ready(function () {

    //     for (let i = 9; i < 18; i++) {

    // create a row
    // var row = $(`<div data-time=${i} id='${i}' class="row">`);

    // create a column
    // var col1 = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

    // //create column 2
    // var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);

    // //create column 3
    // var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)

    // append col to row
    // row.append(col1);
    // row.append(col2);
    // row.append(col3);

    // // last step add rows to container
    // $(".container").append(row);

    // getLocalStorage();
    // console.log(event);

    function formatAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
    formatAMPM();

    function updateColors() {
        var currentTime = new Date().getHours();
        // for (var i = 9; i < 18; i++) {
        console.log(currentTime, $('text-entry1').data("time"));
        if ($(`text-entry1`).data("time") == currentTime) {
            $(`#text${i}`).addClass("present");
        } else if (currentTime < $(`text-entry1`).data("time")) {
            $(`#text${i}`).addClass("future");
        }
    }
    // }

    setInterval(function () {
        updateColors();
    }, 1000000);

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