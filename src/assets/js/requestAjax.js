export function getJsonData() {
    return new Promise((resolve, reject) => {
        function makeRequest() {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "https://canvasjs.com/services/data/datapoints.php", true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        let jsonData = JSON.parse(xhr.responseText);
                        resolve(jsonData);
                        console.log(jsonData);
                    } else {
                        reject(xhr.status);
                    }
                }
            };

            xhr.send();
        }

        // Effectuer la première requête
        makeRequest();

        // Mettre en place l'intervalle pour rafraîchir la requête toutes les secondes
        setInterval(makeRequest, 1000);
    });
}
