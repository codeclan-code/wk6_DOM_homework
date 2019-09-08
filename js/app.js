document.addEventListener('DOMContentLoaded', () => {

  document.title = "Bob and his Albums - A JavaSript Project"
  const albumTextInput = document.querySelector('#albumName')
  const genreRadioInput = document.querySelector('#albumGenre')
  const decadeSelectInput = document.querySelector('#albumDecade')
  const commentTextAreaInput = document.querySelector('#albumComments')
  const albumItem = document.querySelector('#albumCover');
  const resultItem = document.querySelector('#album-results');

  const deleteAddedItems = function(event){
    resultItem.innerHTML = ""
  }

  function showHideContent() {
    event.preventDefault();
    const btnTitle = document.querySelector("#commentButton");
    const comments = document.getElementById('albumComment');
    if (comments.style.display === 'none') {
      comments.style.display = 'block';
      btnTitle.textContent = 'Hide Comments'
    } else {
      comments.style.display = 'none';
      btnTitle.textContent = 'Add Comments'
    }
  }
  //Submit
  const handleFormSubmit = function(event){
    event.preventDefault();
    const unOrderedList = document.querySelector('#album-results')
    const newImageItem = document.createElement('li')
    unOrderedList.appendChild(newImageItem)
    newImageItem.innerHTML = "<img src=\"img/" + event.target.albumCover.value + "\">";
    const newReadingListItem = document.createElement('li')
    unOrderedList.appendChild(newReadingListItem)
    newReadingListItem.classList.add('red')
    newReadingListItem.innerHTML = "<span class=\"global\">" + "<strong>" +
    event.target.albumName.value + "</strong> - " +
    event.target.albumGenre.value + " - " +
    event.target.albumDecade.value + " - " +
    event.target.albumComments.value + "</span>";

    document.getElementById("new-item-form").reset();
  }
  // listeners

  const showHideComments = document.querySelector("#commentButton")
  showHideComments.addEventListener('click', showHideContent)

  const form = document.querySelector("#new-item-form")
  form.addEventListener('submit', handleFormSubmit)

  const deleteResults = document.querySelector("#delete-all")
  deleteResults.addEventListener('click', deleteAddedItems)

})
