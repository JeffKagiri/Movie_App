VibeFlix 🎬

A simple, responsive movie search app powered by the TMDb API.
You can search for movies by title or browse the latest trending movies of the week.
https://jeffkagiri.github.io/Movie_App/


Features

🔍 Search movies by title.

🌎 Trending movies displayed by default.

🎨 Responsive design with CSS Grid.

💡 Dark theme with glowing hover effects.

⏳ Loading spinner during API requests.

🎞 Fade-in animation for movie cards.

📱 Mobile-first layout that adapts to any screen size.

Tech Stack

HTML5 – Structure of the app.

CSS3 – Styling, responsive grid, and animations.

JavaScript (ES6) – Fetching data from TMDb API.

TMDb API – Source of movie data.

Setup & Installation

Clone this repository:

git clone https://github.com/your-username/vibeflix.git


Open the folder:

cd vibeflix


Open index.html in your browser.

Or just check out the Live Demo
.

API Key Setup

This project uses the TMDb API.

Sign up at The Movie Database (TMDb)
.

Go to your account settings → API → Copy your API Key (v3 auth).

Open script.js and replace the placeholder with your API key:

const API_KEY = "YOUR_API_KEY_HERE";


⚠️ You do not need the "API Read Access Token" for this project, only the v3 API Key.

File Structure
vibeflix/
│
├── index.html       # Main HTML file
├── styles.css       # App styling
├── script.js        # API calls and interactivity
└── README.md        # Project documentation


Future Improvements

Add categories (Now Playing, Popular, Top Rated).

Add infinite scrolling for more movies.

Show movie details on card click.

License

This project is for educational purposes and uses the TMDb API.
Please note that this product uses the TMDb API but is not endorsed or certified by TMDb.
