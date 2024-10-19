// Movie Data
const movies = [
    {
        id: 1,
        title: "The Avengers",
        category: "Action",
        image: "https://via.placeholder.com/200x300",
        description: "A superhero film based on the Marvel Comics superhero team."
    },
    {
        id: 2,
        title: "The Hangover",
        category: "Comedy",
        image: "https://via.placeholder.com/200x300",
        description: "A comedy film about three friends waking up after a wild bachelor party."
    },
    {
        id: 3,
        title: "The Conjuring",
        category: "Horror",
        image: "https://via.placeholder.com/200x300",
        description: "A horror film about paranormal investigators helping a family."
    },
    {
        id: 4,
        title: "Inception",
        category: "Action",
        image: "https://via.placeholder.com/200x300",
        description: "A science fiction film about dream invasion and manipulation."
    }
];

// Display Movies
const movieList = document.getElementById('movieList');
function displayMovies(filter = 'All') {
    movieList.innerHTML = '';
    let filteredMovies = filter === 'All' ? movies : movies.filter(movie => movie.category === filter);

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="article.html?id=${movie.id}">
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            </a>
        `;
        movieList.appendChild(movieCard);
    });
}

// Filter Movies by Category
function filterMovies(category) {
    displayMovies(category);
}

// Search Functionality
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));
    displayMovies(searchText ? searchText : 'All');
});

// Initial Display
displayMovies();

// Contact Form Submit
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    contactForm.reset();
});
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

// Function to move the carousel
function moveCarousel(direction) {
    currentIndex += direction;

    // Loop the carousel when reaching the end
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    } else if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }

    // Move the carousel inner container to show the correct item
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide (optional)
setInterval(() => {
    moveCarousel(1);
}, 5000); // Change slide every 5 seconds

