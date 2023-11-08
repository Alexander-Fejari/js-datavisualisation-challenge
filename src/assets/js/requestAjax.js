export function getJsonData() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://canvasjs.com/services/data/datapoints.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // si la réponse est true
            let jsonData = JSON.parse(xhr.responseText);
            console.log(jsonData);
        }
    };

    xhr.send();
}

getJsonData()