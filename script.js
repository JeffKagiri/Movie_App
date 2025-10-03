// TMDb API Key
const API_KEY = "9881008c3ddcca78a1d21ac7e260502c";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// DOM Elements
const searchBox = document.getElementById("search-box");
const movieGrid = document.getElementById("movie-grid");
const loadingSpinner = document.getElementById("loading-spinner");

// Show spinner
function showSpinner() {
  loadingSpinner.classList.remove("hidden");
}

// Hide spinner
function hideSpinner() {
  loadingSpinner.classList.add("hidden");
}

// Render movies
function renderMovies(movies) {
  movieGrid.innerHTML = "";

  if (movies.length === 0) {
    movieGrid.innerHTML = "<p>No movies found.</p>";
    return;
  }

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.poster_path ? IMG_URL + movie.poster_path : "https://via.placeholder.com/500x750?text=No+Image"}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>⭐ ${movie.vote_average.toFixed(1)}</p>
      </div>
    `;

    movieGrid.appendChild(card);
  });
}

// Fetch trending movies
async function fetchTrendingMovies() {
  showSpinner();
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    hideSpinner();
    renderMovies(data.results);
  } catch (error) {
    hideSpinner();
    movieGrid.innerHTML = "<p>Error fetching trending movies.</p>";
    console.error(error);
  }
}

// Fetch search results
async function fetchMovies(query) {
  showSpinner();
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    hideSpinner();
    renderMovies(data.results);
  } catch (error) {
    hideSpinner();
    movieGrid.innerHTML = "<p>Error fetching search results.</p>";
    console.error(error);
  }
}

// Search on typing
searchBox.addEventListener("keyup", (e) => {
  const query = e.target.value.trim();
  if (query.length > 2) {
    fetchMovies(query);
  } else {
    fetchTrendingMovies();
  }
});

// Load trending movies by default
fetchTrendingMovies();
