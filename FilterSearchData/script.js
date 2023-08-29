
const dataURL = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cityStateData = [];

async function getData(){
    const response = await fetch(dataURL);
    if(response.status == 200){
        const data = await response.json();
        cityStateData = [...data];
        // console.log(cityStateData);
    }
}
getData();

function filterMatchData(wordToMatch, dataDictionary){
    const filterData = dataDictionary.filter(place => {
        let regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });

    return filterData;
}


function displaydata(e){
    // console.log(e.target.value);
    let wordToMatch = e.target.value;
    const filterData = filterMatchData(wordToMatch, cityStateData);
    let pureData = [];
    filterData.forEach(e=>{
        let obj = {city: e.city,
                polulation: e.population,
                state: e.state};
        pureData.push(obj);
    });
    // console.log(pureData);
    const listElement = document.querySelector(".suggestions");
    
    let customEle = pureData.map(e=>{
        const regex = new RegExp(wordToMatch, 'gi');
        let strCity = e.city.replace(regex, `<span class="hl">${wordToMatch}</span>`);
        let strState = e.state.replace(regex, `<span class="hl">${wordToMatch}</span>`);
        return `<li>
            <span class="name">${strCity} ${strState}</span>
            <span class="population">${e.polulation}</span>
        </li>`;
    }).join('');
    listElement.innerHTML = customEle;
}

document.querySelector('.search').addEventListener('keyup', displaydata);