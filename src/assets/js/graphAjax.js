import Chart from 'chart.js/auto';
import { getJsonData } from './requestAjax';

getJsonData().then(data => {
    const valuesArray0 = data.map(item => item[0]);
    const valuesArray1 = data.map(item => item[1]);

    const heading = document.querySelector('#firstHeading');
    const canvasElement = document.createElement('canvas');
    canvasElement.id = 'graphAjax';
    heading.insertAdjacentElement('afterend', canvasElement);

    new Chart(canvasElement, {
        type: 'line',
        data: {
            labels: Array.from({ length: 11 }, (_, i) => i.toString()), // Graduations de 0 à 10 sur l'axe des x
            datasets: [
                {
                    label: 'Array 0',
                    data: valuesArray0,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                },
                {
                    label: 'Array 1',
                    data: valuesArray1,
                    borderColor: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    display: false, // Masquer l'axe des y
                },
            },
        },
    });
}).catch(error => {
    console.error(`Erreur lors de la récupération des données : ${error}`);
});
