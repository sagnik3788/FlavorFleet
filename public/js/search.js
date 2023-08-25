document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-bar-js');
  const searchButton = document.getElementById('search-img-js');
  const searchResults = document.getElementById('search-results');

  searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') { 
      search(searchTerm);
    }
    
  });

  async function search(query) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`);      
      const data = await response.json();
      const limit = 6;
      const meals = data.meals.slice(0, limit);
     

      console.log(meals);

      searchResults.innerHTML = '';

      
      if (data.meals === null) {
        searchResults.innerHTML = '<p>No results found.</p>';
        return;
      }

      // meals.forEach(meal => {
      //   const resultItem = document.createElement('div');
      //   resultItem.className = 'result-item'; // Add this line to set the class
      //   resultItem.innerHTML = `<p>${meal.strMeal}</p><img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-image">`;
        
      //   searchResults.appendChild(resultItem);
      // });
      meals.forEach(meal => {
        const resultItem = document.createElement('a'); 
        resultItem.setAttribute('data-food-id', meal.idMeal); 
        resultItem.href = `dish.html?id=${meal.idMeal}`; 
        resultItem.className = 'result-item';
       
      
        // Create a separate div for the image
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        imageContainer.innerHTML = `<img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-image">`;
        
        const mealName = document.createElement('p');
        mealName.textContent = meal.strMeal;
        
        resultItem.appendChild(imageContainer);
        resultItem.appendChild(mealName);
        searchResults.appendChild(resultItem);
      });

      

    } catch (error) {
      console.log('An error occurred while fetching data:', error);
    }
  }
  searchInput.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== '') {
        search(searchTerm);
      }
    }
  });

  // Event listener for search button click
  searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      search(searchTerm);
    }
  });

});






document.querySelector('.searchbar').value = "";

  

const list = document.querySelector('.list');

  

const searchimg = document.getElementById("search-img-js");

searchimg.addEventListener('click', searchshow);

searchimg.addEventListener('keyup', enterkeyShow);

  

const searchbar = document.querySelector('.searchbar');

searchbar.addEventListener('keyup', search);

  

const closeimg = document.getElementById("close-img-js");

closeimg.addEventListener('click', closeimgfunction);

closeimg.addEventListener('keyup', enterkeyClose);

  

// Hide All function when you click anywhere on the background

function hideallfunction(){

    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('show'))

    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('hide'))

    document.querySelector('.searchbar').value = "";

    document.querySelector('.searchbar').setAttribute("placeholder", "Search...");

    document.getElementById('close-img-js').setAttribute("tabindex", "-1");

    window.setTimeout(hideallfunction2, 500);

}

  

function hideallfunction2(){
 document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('add'))

    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('remove'))

}

  

//showing the list under circumstances (if it's not empty, you show the list with the result when you click on the search icon.

// if it isn't empty it focuses on the search bar so you'd type something.)

function searchshow(){

  let input = document.querySelector('.searchbar').value

  

if (input !== "") {

    document.querySelector('.list').classList.add('add');

    document.querySelector('.closeimg').classList.add('add');

    document.querySelector('.borderbetween').classList.add('add');

    document.querySelector('.searchbar').setAttribute("placeholder", "Search...");

    document.getElementById('close-img-js').setAttribute("tabindex", "4");

    window.setTimeout(searchshow2, 100);

} else {

    document.querySelector('.searchbar').focus();

    document.querySelector('.searchbar').setAttribute("placeholder", "Please search something...");

}

}

  

function searchshow2(){

    document.querySelector('.list').classList.add('show');

    document.querySelector('.closeimg').classList.add('show');

    document.querySelector('.borderbetween').classList.add('show');

}

  

//global search function

function search() {

  let input = document.querySelector('.searchbar').value

  input=input.toLowerCase();

  let x = document.getElementsByClassName('section');

    let noresult = document.querySelector('.noresult');

    let list= document.querySelector('.list').childElementCount;

  

  for (i = 0; i < x.length; i++) {

    if (!x[i].innerHTML.toLowerCase().includes(input)) {

      x[i].style.display="none";

            list -= 1;

    } else {

      x[i].style.display="list-item";

            list += 1;

    }

  

 if (list === 1) {

    noresult.style.display="list-item";

} else {

 noresult.style.display="none";

}

  

}

}

  

//function for when you click ENTER or ESC on keyboard when interacting with the search bar.

searchbar.addEventListener("keyup", function(event) {

    // Number 13 is the "Enter" key on the keyboard

    if (event.keyCode === 13) {

      event.preventDefault();

      searchshow();

    } else if (event.keyCode === 27) {

        event.preventDefault();

        closeimgfunction();

        document.querySelector('.searchbar').setAttribute("placeholder", "Search...");

    }

  });

  

list.addEventListener("keyup", function(event) {

    if (event.keyCode === 27) {

        event.preventDefault();

        closeimgfunction();

    }

  });

  

//the function for the X button and closing the list

function closeimgfunction() {

    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('show'))

    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('hide'))

    document.querySelector('.searchbar').value = "";

    document.getElementById('close-img-js').setAttribute("tabindex", "-1");

    window.setTimeout(closeimgfunction2, 500);

}

  

function closeimgfunction2() {

    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('add'))

    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('remove'))

}

  

//keyboard functions

function enterkeyShow(event) {

    if (event.keyCode === 13) {

        searchshow();

    }

}

  

function enterkeyClose(event) {

    if (event.keyCode === 13) {

        closeimgfunction();

        document.querySelector('.searchbar').setAttribute("placeholder", "Search...");

    }

}

  

function esckey(event) {

    if (event.keyCode === 27) {

        closeimgfunction();

        document.querySelector('.searchbar').setAttribute("placeholder", "Search...");

}

}
