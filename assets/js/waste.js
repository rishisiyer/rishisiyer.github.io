// waste.js
$(function () {
  ready();
});
let school, waste;
function ready() {
  school = JSON.parse(sessionStorage.getItem("target"));

  showSchool(school);
  initializeWaste(school);
  setAnnual_and_Current(+school.waste.annual);
  setUpEventHandlers(school);
}
function setUpEventHandlers(school) {
  $('.toInit').on("change", calculateWaste);
  commonSetUpEventHandlers(school);
}
function initializeWaste(school) {
  waste = school.waste;
  $(".wdata").show();
  for (let method in wasteNums) {
    for (let material in wasteNums[method]) {
      const fieldName = material + "_" + method;
      let target = $('#' + fieldName);
      if (!target.is(':disabled')) target.val(waste[fieldName]);
    }
  }
  // rearrange tabindex values for inputs if tables next to each other
  if ($(".checkhide").css('display') === 'none') {
    let ti = 1;
    for (let material of ["Paper",
      "Food",
      "Yard",
      "Plastics",
      "Electronics",
      "Metals",
      "Glass",
      "Construction",
      "Tires",
      "Mixed"]) {
      for (let method of ["Recycle",
        "Landfill",
        "Combust",
        "Composted",
        "Anaerob"]) {
        $(`#${material}_${method}`).attr('tabindex', ti++);
      }
    }
  }
  calculateWaste();
}


function calculateWaste() {
  waste.annual = 0;
  for (let method in wasteNums) {
    for (let material in wasteNums[method]) {
      if (wasteNums[method][material] !== "NA" && material !== "Default") {
        const fieldName = material + "_" + method;
        let value = +$("#" + fieldName).val();
        school.waste[fieldName] = value;
        waste.annual += value * wasteNums[method][material];
      }
    }
  }
  waste.annual *= 2204.62;
  setAnnual_and_Current(waste.annual);
  school.clear = false;

  sessionStorage.setItem("target", JSON.stringify(school));
}
