const  submit = document.querySelector('#submit');
const  search = document.querySelector('#search');
const singleCocktail = document.querySelector('#single-cocktail');
const cocktail = document.querySelector('#cocktail');
const results = document.querySelector('#result-heading');


// Search for a cocktail


const searchCocktail = (e) =>{
    e.preventDefault();
    const searchValue = search.value;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {

data.drinks === null ? singleCocktail.innerHTML = `<p>Sorry, we can't find a cocktail with the name ${searchValue}</p>` : singleCocktail.innerHTML = '';
data.drinks.forEach(drink => {
    const card = `
    <div class="card">
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
        <h2>${drink.strDrink}</h2>
        <p>${drink.strInstructions}</p>
    </div>
    `;
    singleCocktail.innerHTML += card;
});


        })

        
        .catch(err => console.log(err));
}



function getRandomCocktail() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const { strDrink, strDrinkThumb, strInstructions } = data.drinks[0];
            const card = `
            <div class="card">
                <img src="${strDrinkThumb}" alt="${strDrink}">
                <h2>${strDrink}</h2>
                <p>${strInstructions}</p>
            </div>
            `;
            cocktail.innerHTML = card;
        })
        .catch(err => console.log(err));
}




// Event listeners
submit.addEventListener('click', searchCocktail);
// submit.addEventListener('click', searchCocktail);


singleCocktail.innerHTML = '';
                data.drinks.forEach(drink => {
                    const card = `
                    <div class="card">
                        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                        <h2>${drink.strDrink}</h2>
                        <p>${drink.strInstructions}</p>
                    </div>
                    `;
                    singleCocktail.innerHTML += card;
                });