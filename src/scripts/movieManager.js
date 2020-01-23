//takes movie argument and generate HTML that displays title and year released
const movieFactory = (movie) => {
    return `
      <section class="movie">
      <div>Title: ${movie.title}</div>
      <div>Date: ${movie.yearReleased}</div>
      </section>
      `;
  };
  
  //function that loops through our movies array/api and applies them to the DOM
  const renderMovies = movies => {
    const container = document.querySelector("#movie-container");
    movies.forEach(movie => {
        const movieHTML = movieFactory(movie);
        container.innerHTML += movieHTML;
    });
  };