document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  const albumTextInput = document.querySelector('#albumName')
  const genreRadioInput = document.querySelector('#albumGenre')
  const decadeSelectInput = document.querySelector('#albumDecade')
  const commentTextAreaInput = document.querySelector('#albumComments')
  const resultItem = document.querySelector('#album-results');

  const deleteAddedItems = function(event){
    resultItem.innerHTML = " "
  }
  //Submit

  const handleFormSubmit = function(event){
    event.preventDefault();
    const newReadingListItem = document.createElement('li')
    const unOrderedList = document.querySelector('ul')
    unOrderedList.appendChild(newReadingListItem)
    newReadingListItem.classList.add('red')
    newReadingListItem.textContent = `
    ${event.target.albumName.value} -
    ${event.target.albumGenre.value} -
    ${event.target.albumDecade.value} -
    ${event.target.albumComments.value}`;
    document.getElementById("new-item-form").reset();
  }

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)

  const deleteResults = document.querySelector('#delete-all')
  deleteResults.addEventListener('click', deleteAddedItems)

})
