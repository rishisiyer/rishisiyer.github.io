$(function () {
    ready();
})

function ready() {
    const school = JSON.parse(sessionStorage.getItem("target"));
    showSchool(school);
    setTitle(school.identity);
    initialize_Details(school);
    setUpEventHandlers(school);
}

function setTitle({ name, type }) {
    const regex = /[^\w\s]/g;

    let formattedName = name.replace(regex, '').split(' ').join('_') + '_' + type;
    let date = new Date();
    let dateParts = date.toLocaleDateString("en-GB", { // you can use undefined as first argument
        month: "2-digit", day: "2-digit", year: "numeric"
    }).split("\/");
    $('title').text(`${formattedName}_CO2_${dateParts[1]}_${dateParts[0]}_${dateParts[2]}`);
    $('#title_for_pdf').text(`${formattedName}       ${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`);
}

function energyUnitsTranslate(term) {
    const e_u_t = {
        n_therms: "Therms",
        n_tcf: "1000 Ft^3",
        n_dollars: "Dollars",
        e_kwh: "Kw Hours",
        e_dollars: "Dollars",
        f_gallons: "Gallons",
        f_dollars: "Dollars",
        p_gallons: "Gallons",
        p_dollars: "Dollars",
    }
    return e_u_t[term];
}

function initialize_Details(school) {
    const { transport, energy, waste } = school;
    // Transport
    for (let key in transport) {
        switch (key) {
            case 'cars':
            case 'buses':
                for (let id in transport[key]) {
                    showValue(id, transport[key][id])
                }
                break;

            case 'students':
            case 'carpool':
            case 'walkers':
                showValue(key, transport[key])
                break;
        }

    }


    for (let key in energy) {
        if (key !== "annual") {
            let value = energy[key];
            if (value === "init") {
                $("#" + key).html("&nbsp;&nbsp;" + "unknown");
            }
            else {
                if (typeof value === 'string') {
                    $("#" + key).html("&nbsp;&nbsp;" + energyUnitsTranslate(value));
                }
                else {
                    showValue(key, +value)
                }
            }
        }
    }

    for (let key in waste) {
        if (key !== "annual") {
            const target = $("#" + key);
            if (!target.hasClass('novalue')) {
                target.html("&nbsp;&nbsp;" + waste[key]);
            }
            else {
                target.html('&nbsp;');
            }
        }
    }

    $("#t_annual").text(numberWithCommas(transport.annual));
    $("#e_annual").text(numberWithCommas(energy.annual));
    $("#w_annual").text(numberWithCommas(waste.annual));
    $("#current").text(numberWithCommas(transport.annual + energy.annual + waste.annual));
}
function showValue(id, value) {
    $('#' + id).html('&nbsp;&nbsp;' + numberWithCommas(+value))
}
let generate;
function setUpEventHandlers(school) {
    commonSetUpEventHandlers(school);
    generate = setupGenerate(school);
}

function setupGenerate(school) {
    const { transport, energy, waste } = school;
    const { cars, buses } = transport;
    return () => {

        var doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'letter',
            putOnlyUsedFonts: true
        });

        const x = 20;
        const pageX = 175;
        let y = 20;

        doc.setFontSize(10);
        doc.text(5, y - 10,
            $('#title_for_pdf').text()
        );
        doc.text(pageX, y - 10, 'Page 1/2');


        // TRANSPORTATION
        doc.setFontSize(18);
        doc.setLineWidth(.2);
        doc.setFillColor(77, 182, 182);
        doc.rect(x - 8, y - 6.5, 180, 7.8, 'F');
        doc.text(x, y, "TRANSPORTATION");

        doc.setFontSize(12);
        doc.autoTable({
            startY: y = y + 5,
            theme: "grid",
            headStyles: {
                fillColor: 'wheat', fontStyle: 'bold',
                lineWidth: 1,
                textColor: [0, 0, 0], halign: 'center'
            },
            columnStyles: {
                0: { halign: 'center', fillColor: 'wheat', cellWidth: 75, fontStyle: 'bold' },

                1: { halign: 'right', fillColor: 'white', cellWidth: 30, valign: 'middle' },
                2: { halign: 'right', fillColor: 'white', cellWidth: 30, valign: 'middle' },
                3: { halign: 'right', fillColor: 'white', cellWidth: 30, valign: 'middle' },
            },
            head: [['', 'Gasoline', 'Diesel', 'Electric']],
            body: [
                ['Number of Buses Used',
                    buses['b_g_count'], buses['b_d_count'], buses['b_e_count']],
                ['Annual Miles Driven per Bus',
                    buses['b_g_miles'], buses['b_d_miles'], buses['b_e_miles']],
                ['Total CO2 Emission for Buses (lbs.)',
                    nwc(buses['b_g_CO2']), nwc(buses['b_d_CO2']), nwc(buses['b_e_CO2'])],
            ]
        })
        doc.text(x - 5, y = y + 5, "       Buses");

        doc.autoTable({
            startY: y = y + 40,
            theme: "grid",
            headStyles: {
                fillColor: 'wheat', fontStyle: 'bold',
                lineWidth: 1,
                textColor: [0, 0, 0], halign: 'center'
            },
            columnStyles: {
                0: { halign: 'center', fillColor: 'wheat', cellWidth: 75, fontStyle: 'bold' },

                1: { halign: 'right', fillColor: 'white', cellWidth: 30, valign: 'middle' },
                2: { halign: 'right', fillColor: 'white', cellWidth: 30, valign: 'middle' },
                3: { halign: 'right', fillColor: 'white', cellWidth: 30, valign: 'middle' },
            },
            head: [['', 'Gasoline', 'Hybrid/PHEV', 'Electric']],
            body: [
                ['Number of Cars Used',
                    cars['c_g_count'], cars['c_h_count'], cars['c_e_count']],
                ['Annual Miles Driven per Car',
                    cars['c_g_miles'], cars['c_h_miles'], cars['c_e_miles']],
                ['Total CO2 Emission for Cars (lbs.)',
                    nwc(cars['c_g_CO2']), nwc(cars['c_h_CO2']), nwc(cars['c_e_CO2'])],
            ]
        })
        doc.text(x - 5, y = y + 5, "       Cars");

        doc.autoTable({
            // startY: y = y + 40,
            theme: "grid",
            margin: 12,
            columnStyles: {
                0: { halign: 'center', fillColor: 'wheat', cellWidth: 30, valign: 'middle', fontStyle: 'bold' },
                1: { halign: 'right', fillColor: 'white', cellWidth: 20, valign: 'middle' },
                2: { fillColor: 'white', cellWidth: 10 },
                3: { halign: 'right', fillColor: 'wheat', cellWidth: 30, valign: 'middle', fontStyle: 'bold' },
                4: { halign: 'right', fillColor: 'white', cellWidth: 20, valign: 'middle' },
                5: { fillColor: 'white', cellWidth: 10 },
                6: { halign: 'right', fillColor: 'wheat', cellWidth: 30, valign: 'middle', fontStyle: 'bold' },
                7: { halign: 'right', fillColor: 'white', cellWidth: 20, valign: 'middle' },

            },
            body: [
                ['# Students', transport.students, '',
                    '# Carpooling', transport.carpool, '',
                    '# Walking', transport.walkers]
            ],

        })

        // ENERGY
        function details_energy_value(key) {
            const value = energy[key];
            return (value === "init") ?
                "unknown" :
                (typeof value === 'string') ?
                    energyUnitsTranslate(value) : value;
        }

        y = 150;

        doc.setFontSize(18);
        doc.setFillColor(77, 182, 182);
        doc.rect(x - 8, y - 6.5, 180, 7.8, 'F');
        doc.text(x, y, "ENERGY");

        doc.autoTable({
            startY: y = y + 5,
            theme: 'grid',
            headStyles: {
                fillColor: 'wheat', fontStyle: 'bold',
                lineWidth: 1,
                textColor: [0, 0, 0], halign: 'center'
            },
            columnStyles: {
                0: { halign: 'center', fillColor: 'wheat', cellWidth: 70, fontStyle: 'bold' },
                1: { halign: 'center', fillColor: 'white', cellWidth: 26, valign: 'middle' },
                2: { halign: 'right', fillColor: 'white', cellWidth: 26, valign: 'middle' },
                3: { halign: 'right', fillColor: 'white', cellWidth: 26, valign: 'middle' },
                4: { halign: 'right', fillColor: 'white', cellWidth: 26, valign: 'middle' },
            },
            head: [['', 'Natural Gas', 'Electricity', 'Fuel Oil', 'Propane']],
            body: [
                ['Unit Type',  // "init" or string
                    details_energy_value('n_unit'),
                    details_energy_value('e_unit'),
                    details_energy_value('f_unit'),
                    details_energy_value('p_unit')],
                ['Monthly Bill Data', // number
                    details_energy_value('n_bill'),
                    details_energy_value('e_bill'),
                    details_energy_value('f_bill'),
                    details_energy_value('p_bill')],
                ['Total CO2 Emission for Energy (lbs.)', // number, add commas
                    nwc(details_energy_value('n_CO2')),
                    nwc(details_energy_value('e_CO2')),
                    nwc(details_energy_value('f_CO2')),
                    nwc(details_energy_value('p_CO2'))]
            ]
        })

        doc.addPage();
        // WASTE
        y = 20; // reset for this page

        doc.setFontSize(10);
        doc.text(5, y - 10,
            $('#title_for_pdf').text()
        );
        doc.text(pageX, y - 10, 'Page 2/2');
        doc.setFontSize(18);
        doc.setFillColor(77, 182, 182);
        doc.rect(x - 8, y - 6.5, 180, 7.8, 'F');
        doc.text(x, y, "WASTE");
        const noValue = '--';
        doc.autoTable({
            startY: y = y + 5,
            theme: 'grid',
            headStyles: {
                fillColor: 'wheat',
                fontStyle: 'bold',
                lineWidth: 1,
                textColor: [0, 0, 0],
                halign: 'center'
            },
            columnStyles: {
                0: { halign: 'center', fillColor: 'wheat', cellWidth: 55, fontStyle: 'bold' },
                1: { halign: 'right', fillColor: 'white', cellWidth: 22, valign: 'middle' },
                2: { halign: 'right', fillColor: 'white', cellWidth: 22, valign: 'middle' },
                3: { halign: 'right', fillColor: 'white', cellWidth: 22, valign: 'middle' },
                4: { halign: 'right', fillColor: 'white', cellWidth: 22, valign: 'middle' },
                5: { halign: 'right', fillColor: 'white', cellWidth: 22, valign: 'middle' },
            },
            head: [['Annual Metric Tons',
                'Recycle',
                'Land Fill',
                'Combust',
                'Compost',
                'Anerob']],
            body: [
                ['Paper',
                    waste['Paper_Recycle'],
                    waste['Paper_Landfill'],
                    waste['Paper_Combust'],
                    noValue, // waste['Paper_Composted'], 
                    noValue], // waste['Paper_Anaerob']],
                ['Food Waste',
                    noValue, // waste['Food_Recycle'],
                    waste['Food_Landfill'],
                    waste['Food_Combust'],
                    waste['Food_Composted'],
                    waste['Food_Anaerob']],
                ['Yard Trimmings',
                    noValue, // waste['Yard_Recycle'],
                    waste['Yard_Landfill'],
                    waste['Yard_Combust'],
                    waste['Yard_Composted'],
                    waste['Yard_Anaerob']],
                ['Plastics Plastics',
                    waste['Plastics_Recycle'],
                    waste['Plastics_Landfill'],
                    waste['Plastics_Combust'],
                    waste['Plastics_Composted'],
                    noValue], // waste['Plastics_Anaerob']],
                ['Electronics',
                    waste['Electronics_Recycle'],
                    waste['Electronics_Landfill'],
                    waste['Electronics_Combust'],
                    noValue, // waste['Electronics_Composted'],
                    noValue], // waste['Electronics_Anaerob']],
                ['Metals',
                    waste['Metals_Recycle'],
                    waste['Metals_Landfill'],
                    waste['Metals_Combust'],
                    noValue, // waste['Metals_Composted'],
                    noValue], // waste['Metals_Anaerob']],
                ['Glass',
                    waste['Glass_Recycle'],
                    waste['Glass_Landfill'],
                    waste['Glass_Combust'],
                    noValue, // waste['Glass_Composted'],
                    noValue], // waste['Glass_Anaerob']],
                ['Construction Materials',
                    waste['Construction_Recycle'],
                    waste['Construction_Landfill'],
                    waste['Construction_Combust'],
                    noValue, // waste['Construction_Composted'],
                    noValue], // waste['Construction_Anaerob']],
                ['Tires',
                    waste['Tires_Recycle'],
                    waste['Tires_Landfill'],
                    waste['Tires_Combust'],
                    noValue, // waste['Tires_Composted'],
                    noValue], // waste['Tires_Anaerob']],
                ['Mixed Materials',
                    waste['Mixed_Recycle'],
                    waste['Mixed_Landfill'],
                    waste['Mixed_Combust'],
                    waste['Mixed_Composted'],
                    waste['Mixed_Anaerob']]
            ],
            didParseCell: function (HookData) {
                if (HookData.cell == undefined) {
                    return;
                }

                if (HookData.cell.text[0] === noValue) {
                    HookData.cell.text[0] = '';
                    HookData.cell.styles.fillColor = 'gainsboro';
                }
            },
        })

        // SUMMARY
        y = 140;
        doc.setFillColor(77, 182, 182);
        doc.rect(x - 8, y - 6.5, 180, 7.8, 'F');
        doc.text(60 + x, y, "CARBON FOOTPRINT");
        doc.autoTable({
            startY: y = y + 5,
            margin: 65,
            headStyles: {
                fillColor: [144, 238, 144],
                fontStyle: 'bold',
                lineWidth: 0.5,
                textColor: [0, 0, 0],
                halign: 'center',
                valign: 'middle'
            },
            columnStyles: {
                0: {
                    halign: 'left',
                    fillColor: 'lightgreen',
                    cellWidth: 30,
                    fontStyle: 'bold',
                    valign: 'middle'
                },

                1: {
                    halign: 'center',
                    fillColor: 'white',
                    cellWidth: 60,
                    valign: 'middle'
                },
            },
            head: [['', 'CO2 Emissions (lbs)']],
            body: [
                ['Transportation', nwc(transport.annual)],
                ['Energy', nwc(energy.annual)],
                ['Waste', nwc(waste.annual)],
                ['    Total', nwc(transport.annual + energy.annual + waste.annual)]
            ],
            didParseCell: function (HookData) {
                if (HookData.cell == undefined) {
                    return;
                }

                if (HookData.cell.text[0].indexOf('Total') > -1) {
                    HookData.cell.styles.fillColor = 'lightblue';
                    HookData.cell.styles.fontSize = 16;
                }
            },
        });

        doc.save(`${$('title').text()}.pdf`);
    }
}
