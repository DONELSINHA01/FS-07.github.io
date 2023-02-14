const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', () => {
  const word = searchInput.value.trim();
  if (word === '') {
    alert('Please enter a word');
    return;
  }
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => {
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `
        <h2>${word}</h2>
        <p>${data[0].meanings[0].definitions[0].definition}</p>
      `;
    })
    .catch(error => {
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `<h2>${word}</h2><p>No definition found</p>`;
    });
});
