
const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data 
    searchField.value = '';
    if (searchText == '') {
        alert('eror');
    } else {
        // load data 
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals);

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displaySearchResult(data.meals));
    }
}

const displaySearchResult = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    // load data
    searchResult.textContent = '';
    if (meals.length == 0) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = 'THis is not found ';
        div.appendChild(p);

    } else {
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                 <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                </div>
            </div>
        `;
            searchResult.appendChild(div);
        });
    }
}

const loadMealDetail = async mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
    `;
    mealDetails.appendChild(div);
}