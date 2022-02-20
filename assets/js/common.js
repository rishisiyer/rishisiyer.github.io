// common.js
function goHome(school) {
    if (school.clear) {
        startOver();
    }
    else {
        $("#homedialog").show();
    }
}
function startOver() {
    window.location.assign("index.html");
}
function cancelStartOver() {
    $("#homedialog").hide();
}
function numberWithCommas(x) {
    return x.toLocaleString('en-US', { maximumFractionDigits: 0 })
}
function nwc(x) {
    return numberWithCommas(x);
}

function showSchool(school) {
    $("#schoolinfo").html(
        `${school.identity.name}&nbsp;&nbsp;&nbsp;&nbsp;${school.identity.address}, ${school.identity.city} ${school.identity.zip}`
    );
}


// about
$(".about").on("click", () => {
    $("body").addClass("stop-scrolling"); // keep #dialog visible
    $("#dialog").show();
})
$(".aboutX").on("click", () => {
    $("#dialog").hide();
    $("body").removeClass("stop-scrolling")
})

function setAnnual_and_Current(annual) {
    $("#annual").text(numberWithCommas(annual));
    $("#current").text(numberWithCommas(school.transport.annual + school.energy.annual + school.waste.annual));
}

function commonSetUpEventHandlers(school) {

    $(".report").on("click", () => {
        window.open("details.html", "_self")
    })

    $(".home").on("click", () => goHome(school));
    $("#startover").on("click", startOver);
    $("#cancel").on("click", cancelStartOver);
}
