// transport
$(function () {
    ready();
})
let school, transport;
function ready() {
    school = JSON.parse(sessionStorage.getItem("target"));
    transport = school.transport;

    showSchool(school);
    initializeTransport(school);
    setUpEventHandlers(school);
}

function setShowCalc(value, type, id) { // called when value changes
    // if (type === 'buses') console.log('setShowCalc', type, id, value);
    school.transport[type][id] = value;
    showCalc(value, type, id)
}

function showCalc(value, type, id) { // called during initialization
    $('#' + id).text(numberWithCommas(value));
}

function initializeTransport(school) {
    // buses
    for (let fuel of ["g", "d", "e"]) {
        for (let name of ["count", `miles`]) {
            const id = `b_${fuel}_${name}`;

            $("#" + id).val(+transport.buses[id]);
        }
        const id = `b_${fuel}_CO2`;
        showCalc(+school.transport.buses[id], 'buses', id);
    }
    // cars
    for (let fuel of ["g", "h", "e"]) {
        for (let name of ["count", `miles`]) {
            const id = `c_${fuel}_${name}`;

            $("#" + id).val(+transport.cars[id]);
        }
        const id = `c_${fuel}_CO2`;
        showCalc(+school.transport.cars[id], 'cars', id);
    }

    // students, walkers, carpool
    for (let id of ["students", "walkers", "carpool"]) {
        $("#" + id).val(+school.transport[id]);
    }

    setAnnual_and_Current(+school.transport.annual);
}

function setUpEventHandlers(school) {
    $('input[type="number').on("change", transportCalculation);
    commonSetUpEventHandlers(school);
}

function transportCalculation(event) {
    let id = event.target.id;
    if (['students','walkers','carpools'].includes(id)) { // currently does not impact co2 calculations
        transport[id] = +$(this).val();
        // school.initialized = false;
        school.clear = false;

        sessionStorage.setItem("target", JSON.stringify(school));
        return;
    }
    let [vehicle, fuel, tag] = id.split('_');
    const typeLetter = {
        'b': 'buses',
        'c': 'cars'
    }

    let count, miles;
    let key = typeLetter[vehicle];
    switch (tag) {
        case 'count':
            count = +$('#' + id).val();
            transport[key][id] = count;
            miles = transport[key][`${vehicle}_${fuel}_miles`];
            break;
        case 'miles':
            miles = +$('#' + id).val();
            transport[key][id] = miles;
            count = transport[key][`${vehicle}_${fuel}_count`];
            break;
        default: // students, walkers
            break;
    }

    doCO2calc(vehicle /* b | c */,
        fuel /* g, d, e, or h */,
        count /* number entered */,
        miles /* from associated field */);
}


function doCO2calc(vehicle, fuel, count, miles) {
    const result_id = `#${vehicle}_${fuel}_CO2`;
    const result = $(result_id);
    let co2;
    if (vehicle === 'b') { // buses (e, g, d)
        const numberOfMiles = count * miles;
        if (isNaN(numberOfMiles) || fuel === 'e') {
            co2 = 0;
            setShowCalc(co2, 'buses', 'b_e_CO2');
        }
        else {
            if (fuel === "g") {
                co2 = Math.round(numberOfMiles * 19.3565636 / 6);
                setShowCalc(co2, 'buses', 'b_g_CO2');

            }
            else { // fuel = d
                co2 = Math.round(numberOfMiles * 22.5091702 / 7);
                setShowCalc(co2, 'buses', 'b_d_CO2');
            }
        }

        result.text(numberWithCommas(co2))
    }
    else { // cars ( e, g, h )
        const numberOfMiles = count * miles;
        if (isNaN(numberOfMiles) || fuel === 'e') {
            co2 = 0;
            setShowCalc(co2, 'cars', 'c_e_CO2');
        }
        else {
            if (fuel === "g") {
                //For gasoline is # of cars * annual miles driven per year * 350  * 0.00220462
                co2 = Math.round(numberOfMiles * 350 * 0.00220462);
                setShowCalc(co2, 'cars', 'c_g_CO2');

            }
            else { // fuel = h
                //For hybrid is # of cars * annual miles driven per year * 250 * 0.00220462 
                co2 = Math.round(numberOfMiles * 250 * 0.00220462);
                setShowCalc(co2, 'cars', 'c_h_CO2');
            }
        }

        result.text(numberWithCommas(co2))
    }
    school.transport.annual = annualCalc();
    setAnnual_and_Current(school.transport.annual);
    school.clear = false;

    sessionStorage.setItem("target", JSON.stringify(school));
}

function annualCalc() {
    return school.transport.buses.b_e_CO2 +
        school.transport.buses.b_g_CO2 +
        school.transport.buses.b_d_CO2 +
        school.transport.cars.c_e_CO2 +
        school.transport.cars.c_g_CO2 +
        school.transport.cars.c_h_CO2;
}
