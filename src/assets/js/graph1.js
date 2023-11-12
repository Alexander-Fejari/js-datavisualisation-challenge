import Chart from 'chart.js/auto';
import { data, table1, extractDataFromTable } from './valueTable.js';

// Utilisation de la fonction avec l'ID de la table
extractDataFromTable('table1');

console.log(data); // Vérifiez les données extraites pour la table 1

// Créez un élément canvas
const canvasElement = document.createElement('canvas');
canvasElement.id = 'graph1'

// Insérez le div au-dessus de la table1
table1.parentNode.insertBefore(canvasElement, table1);

// Récupérez les années (de 2002 à 2012)
const years = Array.from({ length: 11 }, (_, i) => (2002 + i).toString());

// Récupérez les noms des pays
const countries = data.map(item => item.country);

// Créez un tableau de datasets pour Chart.js
const datasets = countries.map((country, index) => {
    return {
        label: country,
        data: data[index].values,
        backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`,
        borderColor: `rgba(0, 0, 0, 1)`,
        borderWidth: 1,
    };
});

// Créez un graphique à barres avec Chart.js
new Chart(canvasElement, {
    type: "bar",
    data: {
        labels: years,
        datasets: datasets,
    },
    options: {
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    },
});
