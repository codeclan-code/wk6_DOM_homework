document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  //title input
  const handleInput = function(event){
    const inputtedText = event.target.value
    // console.log(inputtedText);
    const resultParagraph = document.querySelector('#album-results');
    // resultParagraph.textContent = inputtedText;
  }

  const titleTextInput = document.querySelector('#albumName')
  // titleTextInput.addEventListener('input', handleInput)

  const albumGenre = document.querySelector('#albumGenre')


  const authorTextInput = document.querySelector('#albumComments')
  // authorTextInput.addEventListener('input', handleInput)

  //Select list

  const changeSelectValue = function(event){
    const selectedValue = event.target.value
    // console.log(selectedValue);
    const resultParagraph = document.querySelector('#album-results');
    // resultParagraph.textContent = selectedValue;
  }
  const selectInput = document.querySelector('#albumDecade')
  // selectInput.addEventListener('change',changeSelectValue)

  //Submit button

  const handleFormSubmit = function(event){
    event.preventDefault();

    const newReadingListItem = document.createElement('li')
    const body = document.querySelector('ul')
    body.appendChild(newReadingListItem)
    // newReadingListItem.classList.add('red')
    // newReadingListItem.textContent = `
    // ${event.target.title.value} -
    // ${event.target.author.value} -
    // ${event.target.category.value}`
    newReadingListItem.textContent = `${event.target.albumName.value}
    - ${event.target.albumDecade.value}
    - ${event.target.albumComments.value}
    - ${event.target.albumGenre.value}`
  }

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)


})
