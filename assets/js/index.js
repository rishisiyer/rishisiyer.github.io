$(function () {
    ready();
})
function resizeChosen() {
    $(".chosen-container").each(function () {
        $(this).attr('style', 'width: 100%');
    });
}
function ready() {

    const selector = $("#selector");
    const chosen = $(".chosen");
    selector.css("opacity", 0);
    const submit = $(".submitbutton");
    submit.css("opacity", 0);
    const schoolsArray = processSchoolsCSV();

    $('input[type=radio][name=school-type]').on("change", handleTypeChange);
    chosen.on("change", handleSelection);
    submit.on("click", handleSubmit);
    function handleTypeChange() {
        submit.css("opacity", 0);
        // console.log($(this).val());
        const type = $(this).val();
        let prompt;
        if (type === "All") {
            prompt = "a";
        }
        else {
            if (type === "Elementary") {
                prompt = "an " + type;
            }
            else {
                prompt = "a " + type;
            }
        }

        let shortList;
        if (type === "All") {
            shortList = schoolsArray;
        }
        else {
            shortList = schoolsArray.filter(
                (school) => school.type === type
            );
        }

        selector.children("h2").text(`(${shortList.length}) Choose ${prompt} school:`);
        chosen.chosen({
            placeholder_text_single: "Choose a School",
            no_results_text: "No matching school(s)",
            width: "800px",
            search_contains: true,
        });
        chosen.empty().append("<option/>");

        shortList.forEach(
            (school) => {
                chosen.append(`<option value="${school.id}"><b>${school.name}</b>&nbsp;&nbsp;&nbsp;&nbsp;${school.address}, ${school.city} ${school.zip} </option>`)
            }
        );
        resizeChosen();
        chosen.trigger("chosen:updated");
        // console.log(shortList.map(s => s.name));
        selector.css("opacity", 1);
    }
    function handleSelection() {
        const id = +$(this).val();

        // Set up session variable (school).
        const school = {};
        school.identity = schoolsArray.find(s => s.id === id); // single school;

        // add fields for TRANSPORT
        school.transport = { annual: 0, cars: {}, buses: {} }

        school.transport["students"] = 0;
        school.transport["carpool"] = 0;
        school.transport["walkers"] = 0;

        for (let fuel of ["g", "d", "e"]) {
            for (let name of ["count", `miles`]) {
                const target = `b_${fuel}_${name}`;
                school.transport.buses[target] = 0;
            }
            school.transport.buses[`b_${fuel}_CO2`] = 0;
        }
        for (let fuel of ["g", "h", "e"]) {
            for (let name of ["count", `miles`]) {
                const target = `c_${fuel}_${name}`;
                school.transport.cars[target] = 0;
            }
            school.transport.cars[`c_${fuel}_CO2`] = 0;
        }

        // add fields for ENERGY
        school.energy = { annual: 0 }
        for (let fuel of "nefp") {
            school.energy[fuel + "_CO2"] = 0; // total
            school.energy[fuel + "_unit"] = "init"; //radio button values
            school.energy[fuel + "_bill"] = 0; // bill amount
        }

        // add fields for WASTE
        school.waste = { annual: 0 }
        for (let method in wasteNums) {
            for (let material in wasteNums[method]) {
                // if (wasteNums[method][material] !== "NA" && material !== "Default") {
                    school.waste[material + "_" + method] = 0;
                // }
            }
        }

        school.clear = true;
        // school.initialized = true;
        //*****************************************************
        sessionStorage.setItem("target", JSON.stringify(school));
        //*****************************************************

        // console.log(JSON.stringify(school, null, 4))
        // window.location.assign("transport.html");
        submit.css("opacity", 1);
    }
}
function handleSubmit() {
    window.location.assign(`${$(this).attr('target')}.html`);
}
function processSchoolsCSV() {
    const rows = schools_csvdata.split(/\n/);
    const fields = rows.shift().split(/,/);

    const schoolsArray = [];
    for (let row of rows) {
        let values = row.split(/, */);
        let school = {
            [fields[0]]: +values[0],
            [fields[1]]: values[1],
            [fields[2]]: values[2],
            [fields[3]]: values[3],
            [fields[4]]: values[4],
            [fields[5]]: +values[5]
        }
        schoolsArray.push(school);
    }
    schoolsArray.sort(); // alphabetic sort by school name

    return schoolsArray;
}
