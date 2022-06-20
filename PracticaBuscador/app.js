const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-field');
const gridMovies = document.querySelector('#grid-movies');
const buttons = document.querySelector('#category-buttons');

let searchTerm = '';

function displayCryptos (cryptocurrencies){

    clearCryptos();

    cryptocurrencies.forEach( currency => {

        const {crypto, price, marketCap, website, category, image} = currency;

        const cardCryptocurrency = document.createElement('div');
        cardCryptocurrency.classList.add('col');
        cardCryptocurrency.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <img src="${image}" class="img-fluid">
                <p class="card-text mb-1">Price: ${price}</p>
                <p class="card-text mb-1">Marketcap: ${marketCap}</p>
                <p class="card-text mb-1">Website: <a href="${website}" target="_blank">${website}</a></p>
        
            </div>
        </div>
        `

        gridMovies.appendChild(cardCryptocurrency);

    } )
}

function clearCryptos(){
    gridMovies.innerHTML = '';
    while(gridMovies.firstChild){gridMovies.firstChild.remove();}
}

function filterCryptos(currency){
    if (searchTerm){
        if(currency.crypto.toLowerCase()==searchTerm){
            return currency;
        }
    }
}

function filterCategory(currency){
    
    if(searchTerm != 'category'){
        if(currency.category.includes(searchTerm)){
            return currency;
        }
    }
}

function displayNoResult(){
    clearCryptos();
 
    const noResult = document.createElement('div');
    noResult.classList.add('alert', 'alert-danger', 'w-100', 'text-center');
    noResult.textContent = 'No hay resultados de busqueda';

    if(gridMovies.parentElement.children.length <2){
        gridMovies.appendChild(noResult);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayCryptos(cryptocurrencies);
});

searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    searchTerm = searchInput.value.toLowerCase();
    
    result = cryptocurrencies.filter(filterCryptos);

    if(result.length > 0){
        displayCryptos(result);
    } 
    else{
        displayNoResult();
    }
    
    searchForm.reset();
})

buttons.addEventListener('click', (e) =>{

    searchTerm = e.target.id;
    result = cryptocurrencies.filter(filterCategory);

    if(result.length > 0){
        displayCryptos(result);
    } 

})