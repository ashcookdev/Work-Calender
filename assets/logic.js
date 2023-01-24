// display current day on top of planner 
let currentDay = moment();
$("#currentDay").text(currentDay.format(" DD MMMM YYYY"));
$("#ctime").text(currentDay.format("LT"));


am9();
am10();
am11();
pm12();
pm1();
pm2();
pm3();
pm4();
pm5();

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// current day
// 9am
function am9 () {
 
    if (currentDay.isAfter(moment('10:00', "HH:mm"))) {
        return $("div.card9am").addClass("past");
    } if (currentDay.isBefore(moment('9:00', "HH:mm"))) {
        return $("div.card9am").addClass("future");
    }
     else { return $("div.card9am").addClass("present");
        
    }


}

function am10 () {
 
    if (currentDay.isAfter(moment('11:00', "HH:mm"))) {
        return $("div.card10am").addClass("past");
    } if (currentDay.isBefore(moment('10:00', "HH:mm"))) {
        return $("div.card10am").addClass("future");
    }
     else { return $("div.card10am").addClass("present");
        
    }


}

function am11 () {
 
    if (currentDay.isAfter(moment('12:00', "HH:mm"))) {
        return $("div.card11am").addClass("past");
    } if (currentDay.isBefore(moment('11:00', "HH:mm"))) {
        return $("div.card11am").addClass("future");
    }
     else { return $("div.card11am").addClass("present");
        
    }


}

function pm12 () {
 
    if (currentDay.isAfter(moment('13:00', "HH:mm"))) {
        return $("div.card12pm").addClass("past");
    } if (currentDay.isBefore(moment('12:00', "HH:mm"))) {
        return $("div.card12pm").addClass("future");
    }
     else { return $("div.card12pm").addClass("present");
        
    }


}

function pm1 () {
 
    if (currentDay.isAfter(moment('14:00', "HH:mm"))) {
        return $("div.card1pm").addClass("past");
    } if (currentDay.isBefore(moment('13:00', "HH:mm"))) {
        return $("div.card1pm").addClass("future");
    }
     else { return $("div.card1pm").addClass("present");
        
    }


}


function pm2 () {
 
    if (currentDay.isAfter(moment('15:00', "HH:mm"))) {
        return $("div.card2pm").addClass("past");
    } if (currentDay.isBefore(moment('14:00', "HH:mm"))) {
        return $("div.card2pm").addClass("future");
    }
     else { return $("div.card2pm").addClass("present");
        
    }


}

function pm3 () {
 
    if (currentDay.isAfter(moment('16:00', "HH:mm"))) {
        return $("div.card3pm").addClass("past");
    } if (currentDay.isBefore(moment('15:00', "HH:mm"))) {
        return $("div.card3pm").addClass("future");
    }
     else { return $("div.card3pm").addClass("present");
        
    }


}

function pm4 () {
 
    if (currentDay.isAfter(moment('17:00', "HH:mm"))) {
        return $("div.card4pm").addClass("past");
    } if (currentDay.isBefore(moment('16:00', "HH:mm"))) {
        return $("div.card4pm").addClass("future");
    }
     else { return $("div.card4pm").addClass("present");
        
    }


}

function pm5 () {
 
    if (currentDay.isAfter(moment('18:00', "HH:mm"))) {
        return $("div.card5pm").addClass("past");
    } if (currentDay.isBefore(moment('17:00', "HH:mm"))) {
        return $("div.card5pm").addClass("future");
    }
     else { return $("div.card5pm").addClass("present");
        
    }


}



console.log(currentDay);
// if (currentDay.isBefore(9am) {set color as red}
// else keep green


$(".btn9").click("click", function(event){
    event.stopPropagation();
    event.preventDefault();
var value = $(event.target).siblings("textarea").val();
var value1 = JSON.stringify(value);
localStorage.setItem("9am", value1)
window.location.reload();

})

$(".btn10").click("click", function(event){
    event.stopPropagation();
    event.preventDefault();
console.log(true);
    var value2 = $(event.target).siblings("textarea").val();
    console.log(value2);
    var value22 = JSON.stringify(value2);
    localStorage.setItem("10am", value22)
    window.location.reload();

    })

    $(".btn11").click("click", function(event){
        event.stopPropagation();
        event.preventDefault();
    let value = $(event.target).siblings("textarea").val();
    let value1 = JSON.stringify(value);
    localStorage.setItem("11am", value1)
    window.location.reload();
    
    })
    
    $(".btn12").click("click", function(event){
        console.log(true);
        event.stopPropagation();
        event.preventDefault();
        var value4 = $(event.target).siblings("textarea").val();
console.log(value4);
        let value33 = JSON.stringify(value4);
        localStorage.setItem("12pm", value33)
        window.location.reload();

        })

        $(".btn13").click("click", function(event){
            event.stopPropagation();
            event.preventDefault();
        console.log(true);
            let value3 = $(event.target).siblings("textarea").val();
            console.log(value3);
            let value33 = JSON.stringify(value3);
            localStorage.setItem("1pm", value33)
            window.location.reload();
        
            })

            $(".btn14").click("click", function(event){
                event.stopPropagation();
                event.preventDefault();
            console.log(true);
                let value3 = $(event.target).siblings("textarea").val();
                console.log(value3);
                let value33 = JSON.stringify(value3);
                localStorage.setItem("2pm", value33)
                window.location.reload();
            
                })

                $(".btn15").click("click", function(event){
                    event.stopPropagation();
                    event.preventDefault();
                console.log(true);
                    let value3 = $(event.target).siblings("textarea").val();
                    console.log(value3);
                    let value33 = JSON.stringify(value3);
                    localStorage.setItem("3pm", value33)
                    window.location.reload();
                
                    })

                    $(".btn16").click("click", function(event){
                        event.stopPropagation();
                        event.preventDefault();
                    console.log(true);
                        let value3 = $(event.target).siblings("textarea").val();
                        console.log(value3);
                        let value33 = JSON.stringify(value3);
                        localStorage.setItem("4pm", value33)
                        window.location.reload();
                    
                        })

                        $(".btn17").click("click", function(event){
                            event.stopPropagation();
                            event.preventDefault();
                        console.log(true);
                            let value3 = $(event.target).siblings("textarea").val();
                            console.log(value3);
                            let value33 = JSON.stringify(value3);
                            localStorage.setItem("5pm", value33)
                            window.location.reload();
                        
                            })


var am9 = localStorage.getItem("9am");
var am99 = JSON.parse(am9);
$( ".am9" ).append( "<li> <li>" );
$(".am9").text(am99);

var amm = localStorage.getItem("10am");
var ammM = JSON.parse(amm);
$( ".am10" ).append( "<li> <li>" );
$(".am10").text(ammM);

var amNn = localStorage.getItem("11am");
var amnNn = JSON.parse(amNn);
$( ".am11" ).append( "<li> <li>" );
$(".am11").text(amnNn);

var pm12 = localStorage.getItem("12pm");
var pm122 = JSON.parse(pm12);
$( ".pm12" ).append( "<li> <li>" );
$(".pm12").text(pm122);

var pm13 = localStorage.getItem("1pm");
var pm133 = JSON.parse(pm13);
$( ".pm13" ).append( "<li> <li>" );
$(".pm13").text(pm133);

var pm14 = localStorage.getItem("2pm");
var pm144 = JSON.parse(pm14);
$( ".pm14" ).append( "<li> <li>" );
$(".pm14").text(pm144);

var pm15 = localStorage.getItem("3pm");
var pm155 = JSON.parse(pm15);
$( ".pm15" ).append( "<li> <li>" );
$(".pm15").text(pm155);

var pm16 = localStorage.getItem("4pm");
var pm166 = JSON.parse(pm16);
$( ".pm16" ).append( "<li> <li>" );
$(".pm16").text(pm166);

var pm17 = localStorage.getItem("5pm");
var pm177 = JSON.parse(pm17);
$( ".pm17" ).append( "<li> <li>" );
$(".pm17").text(pm177);
