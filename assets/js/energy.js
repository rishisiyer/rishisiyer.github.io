// energy.js 
$(function () {
  ready();
});
let school, energy;
function ready() {
  school = JSON.parse(sessionStorage.getItem("target"));
  energy = school.energy;

  showSchool(school);
  initializeEnergy(school);
  setAnnual_and_Current(+school.energy.annual);
  setUpEventHandlers(school);
}
function initializeEnergy(school) {
  // radio buttons
  for (let fuel of "nefp") {
    // _unit
    let radioValue = energy[fuel + "_unit"];
    if (radioValue !== "init") {
      $("#" + radioValue).prop("checked", true);
    } else {
      $(`input[name=${fuel + "_unit"}]`).prop("checked", false);
    }
    // _bill
    $("#" + fuel + "_bill").val(+energy[fuel + "_bill"]);
    // _CO2, calculated
    $("#" + fuel + "_CO2").text(numberWithCommas(+energy[fuel + "_CO2"]));
  }
}




function energyCalculation() { // TODO: getting NaN
  let n_value = 0, e_value = 0, f_value = 0, p_value = 0, bill;

  //natural gas 
  bill = +$("#n_bill").val();
  if (bill !== 0) {
    let checked = $("input[name=n_unit]:checked").val();
    // console.log(checked);
    switch (checked) {
      case "n_therms":
        //Emission per year = Input * 11.6889 (pounds of co2 per therm of natural gas) * 12
        n_value = bill * 11.6889 * 12;
        energy.n_unit = checked;
        break;
      case "n_tcf":
        //Emission per year = Input * 119.577 (pounds of co2 per thousand cubic feet of natural gas) * 12
        n_value = bill * 119.577 * 12;
        energy.n_unit = checked;
        break;
      case "n_dollars":
        //Emission per year = (Input / 10.14 it is $ per thousand cubic feet of natural gas for Maryland customers in 2019) * 119.58 * 12
        n_value = (bill / 10.14) * 119.577 * 12;
        energy.n_unit = checked;
        break;
      default:
        //no radio button chosen
        break;
    }
  }
  // handleZero('energy', "n_CO2") ||
  $("#n_CO2").text(numberWithCommas(n_value));
  energy.n_bill = bill;

  //electricity
  bill = +$("#e_bill").val();
  if (bill !== 0) {
    let checked = $("input[name=e_unit]:checked").val();
    // console.log(checked);
    switch (checked) {
      case "e_kwh":
        // Emission per year = Input * pounds per kWh emission factor by zipcode * 12
        e_value = bill * CO2byZip[school.identity.zip] * 12;
        energy.e_unit = checked;
        break;
      case "e_dollars":
        //Emission per year = (Input * 100) / 9.97 (cents per kWh for commercial business in Maryland in 2019) * pounds per kWh emission factor by zipcode * 12
        e_value = ((bill * 100) / 9.97) * CO2byZip[school.identity.zip] * 12;
        energy.e_unit = checked;
        break;
      default:
        //no radio button chosen
        break;
    }
  }
  // handleZero('energy', "e_CO2") ||
  $("#e_CO2").text(numberWithCommas(e_value));
  energy.e_bill = bill;

  //fuel oil
  bill = +$("#f_bill").val();
  if (bill !== 0) {
    let checked = $("input[name=f_unit]:checked").val();
    // console.log(checked);
    switch (checked) {
      case "f_gallons":
        //Emission per year = Input * 22.51 (pounds of co2 per gallon) * 12
        f_value = bill * 22.51 * 12;
        energy.f_unit = checked;
        break;
      case "f_dollars":
        //Emission per year = Input / 3.33 (heating oil price per gallon in Maryland in 2018) * 22.51 * 12
        f_value = (bill / 3.33) * 22.51 * 12;
        energy.f_unit = checked;
        break;
      default:
        //no radio button chosen
        break;
    }
  }
  // handleZero('energy', "f_CO2") ||
  $("#f_CO2").text(numberWithCommas(f_value));
  energy.f_bill = bill;

  //propane
  bill = +$("#p_bill").val();
  if (bill !== 0) {
    let checked = $("input[name=p_unit]:checked").val();
    // console.log(checked);
    switch (checked) {
      case "p_gallons":
        //Emission per year = Input * 12.61 (pounds co2 per gallon) * 12
        p_value = bill * 12.61 * 12;
        energy.p_unit = checked;
        break;
      case "p_dollars":
        //Emission per year = Input / 2.90696 (propane price per gallon in Maryland in 2019) * 12.61 * 12
        p_value = (bill / 2.90696) * 12.61 * 12;
        energy.p_unit = checked;
        break;
      default:
        //no radio button chosen
        break;
    }
  }

  $("#p_CO2").text(numberWithCommas(p_value));
  energy.p_bill = bill;

  // let annual = n_value + e_value + f_value + p_value;
  // energy.annual = annual;
  // $("#annual").text(numberWithCommas(annual));
  energy.n_CO2 = +$("#n_CO2").text().split(",").join("");
  energy.e_CO2 = +$("#e_CO2").text().split(",").join("");
  energy.f_CO2 = +$("#f_CO2").text().split(",").join("");
  energy.p_CO2 = +$("#p_CO2").text().split(",").join("");
  energy.annual = annualCalc();
  setAnnual_and_Current(school.energy.annual);
  // $("#current").text(numberWithCommas(school.transport.annual + energy.annual + school.waste.annual));
  school.clear = false;
  sessionStorage.setItem("target", JSON.stringify(school));
}


function annualCalc() {
  return school.energy.n_CO2 + school.energy.e_CO2 + school.energy.f_CO2 + school.energy.p_CO2;
}

function setUpEventHandlers(school) {
  $(".forcalc").on("change", energyCalculation);
  commonSetUpEventHandlers(school);
}
