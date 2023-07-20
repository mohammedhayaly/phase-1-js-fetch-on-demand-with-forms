

const init = () => {
    const inputForm = document.getElementById('searchForm');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.getElementById('searchByID');
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
          const title = document.querySelector('#movieDetails h4');
          const summary = document.querySelector('#movieDetails p');
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch(error => {
          // Handle invalid ID or other fetch errors
          const title = document.querySelector('#movieDetails h4');
          const summary = document.querySelector('#movieDetails p');
  
          title.innerText = "Movie not found";
          summary.innerText = "Please enter a valid ID.";
        });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);