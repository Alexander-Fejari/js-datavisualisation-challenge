import Chart from 'chart.js/auto';
import { getJsonData } from "./requestAjax.js";

// récupère h1
const getH1 = document.querySelector('#firstHeading');

// Créez un élément canvas
const canvasElement = document.createElement('canvas');
canvasElement.id = 'graphAjax'

// Insérez le div au-dessus de la table1
getH1.parentNode.insertBefore(canvasElement, getH1.nextSibling);

// Récupère les données JSON
let jsonData = getJsonData();

// Crée les tableaux de données
let arrays = jsonData.arrays;
let [data0, data1] = arrays;

// Crée le graphique
new Chart(canvasElement, {
    type: 'line',
    data: {
        labels: data0.map(d => d.label),
        datasets: [
            {
                label: 'Array 0',
                data: data0.map(d => d.value),
                borderColor: 'blue',
            },
            {
                label: 'Array 1',
                data: data1.map(d => d.value),
                borderColor: 'red',
            },
        ],
    },
});