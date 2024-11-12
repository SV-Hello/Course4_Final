let data

fetch('travel_recommendation_api.json')
    .then(response => response.json())  // Parse the JSON
    .then(fetchedData => {
        console.log(data);  // Log the entire data to inspect its structure
        data = fetchedData;
    })
    .catch(error => console.error('Error fetching the JSON:', error));

function search(input) {
    input = input.toLowerCase()

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';
    const img1 = document.createElement('img');
    const location1 = document.createElement('p');
    const descr1 = document.createElement('p');

    const img2 = document.createElement('img');
    const location2 = document.createElement('p');
    const descr2 = document.createElement('p');

    var result;
    if(input == "beach" || input == "beaches") {
        result = data.beaches;

        var temple1 = result[0];

        img1.src = temple1.imageUrl;
        img1.alt = temple1.name;
        img1.style.maxWidth = '300px';
        resultContainer.appendChild(img1);

        location1.textContent = img1.alt;
        descr1.textContent = temple1.description;
        resultContainer.appendChild(location1);
        resultContainer.appendChild(descr1);

        var temple2 = result[1];

        img2.src = temple2.imageUrl;
        img2.alt = temple2.name;
        img2.style.maxWidth = '300px';
        resultContainer.appendChild(img2);

        location2.textContent = img2.alt;
        descr2.textContent = temple2.description;
        resultContainer.appendChild(location2);
        resultContainer.appendChild(descr2);
    }
    else if(input == "countries" || input == "country") {
        result = data.countries;

        var country1 = result[0];

        img1.src = country1.cities[0].imageUrl;
        img1.alt = country1.cities[0].name;
        img1.style.maxWidth = '300px';
        resultContainer.appendChild(img1);

        location1.textContent = img1.alt;
        descr1.textContent = country1.cities[0].description;
        resultContainer.appendChild(location1);
        resultContainer.appendChild(descr1);

        var country2 = result[1];

        img2.src = country2.cities[0].imageUrl;
        img2.alt = country2.cities[0].name;
        img2.style.maxWidth = '300px';
        resultContainer.appendChild(img2);

        location2.textContent = img2.alt;
        descr2.textContent = country1.cities[0].description;
        resultContainer.appendChild(location2);
        resultContainer.appendChild(descr2);

    }
    else if(input == "temples" || input == "temple") {
        result = data.temples;

        var temple1 = result[0];

        img1.src = temple1.imageUrl;
        img1.alt = temple1.name;
        img1.style.maxWidth = '300px';
        resultContainer.appendChild(img1);

        location1.textContent = img1.alt;
        descr1.textContent = temple1.description;
        resultContainer.appendChild(location1);
        resultContainer.appendChild(descr1);

        var temple2 = result[1];

        img2.src = temple2.imageUrl;
        img2.alt = temple2.name;
        img2.style.maxWidth = '300px';
        resultContainer.appendChild(img2);

        location2.textContent = img2.alt;
        descr2.textContent = temple2.description;
        resultContainer.appendChild(location2);
        resultContainer.appendChild(descr2);
    }

    //console.log("Results: ", result);
}

function clear(){
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';
}

document.getElementById('btn-clear').addEventListener('click', function() {
    clear();
});

document.getElementById('btn-search').addEventListener('click', function() {
    var searchVal = document.getElementById('input-search').value;

    console.log("SEARCHING FOR: ", searchVal);

    search(searchVal);
});
