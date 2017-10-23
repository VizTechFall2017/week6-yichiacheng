var trace1 = {
    x: ['Allston-Brighton', 'Roxbury', 'Jamaica Plain', 'E. Boston', 'Fenway-Kenmore', 'Mattapan', 'S. End', 'Roslindale',
        'North End', 'Hyde Park', 'W. Roxbury', 'Back Bay', 'Beacon Hill', 'Charlestown', 'Chinatown', 'South Boston',
        'Misson Hill', 'Dorchester'],
    y: [1810, 1790, 1800, 1700, 2900, 1350, 3640, 1600, 2350, 1780, 1600, 2850, 2450, 2600, 2455, 2500, 1810, 1900],
    type: 'bar',
    name: '2016',
    marker: {
        color: 'rgb(49,130,189)',
        opacity: 0.7
    }
};

var trace2 = {
    x: ['Allston-Brighton', 'Roxbury', 'Jamaica Plain', 'E. Boston', 'Fenway-Kenmore', 'Mattapan', 'S. End', 'Roslindale',
        'North End', 'Hyde Park', 'W. Roxbury', 'Back Bay', 'Beacon Hill', 'Charlestown', 'Chinatown', 'South Boston',
        'Misson Hill', 'Dorchester'],
    y: [1900, 1750, 1820, 1730, 2862, 1328, 3600, 1602, 2355, 1766, 1560, 2920, 2455, 2597, 2448, 2520, 1839, 1901],
    type: 'bar',
    name: '2017',
    marker: {
        color: 'rgb(204,204,204)',
        opacity: 0.5
    }
};

var data = [trace1, trace2];

var layout = {
    title: '2016/17 Boston 1 Bedroom Rent Comparison',
    xaxis: {
        tickangle: -30
    },
    barmode: 'group'
};

Plotly.newPlot('myDiv', data, layout);