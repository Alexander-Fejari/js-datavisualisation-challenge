import Chart from 'chart.js/auto';
import {data, table2, extractDataFromTable} from './valueTable.js';

// Utilisation de la fonction avec l'ID de la table
extractDataFromTable('table2');

console.log(data); // Vérifiez les données extraites pour la table 2

// Créez un élément div
const canvasElement = document.createElement('canvas');
canvasElement.id = 'graph2'

// Insérez le div au-dessus de la table2
table2.parentNode.insertBefore(canvasElement, table2);

const years = ["2007-09", "2010-12"];
const countries = data.map(item => item.country);

const datasets = countries.map((country, index) => {
    return {
        label: country,
        data: data[index].values,
        backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`,
        borderColor: `rgba(0, 0, 0, 1)`,
        borderWidth: 1,
    };
});

new Chart(canvasElement, {
    type: "bar",
    data: {
        labels: years,
        datasets: datasets,
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});