document.addEventListener('DOMContentLoaded', () => {

  document.title = "Bob and his Albums"
  const albumTextInput = document.querySelector('#albumName')
  const genreRadioInput = document.querySelector('#albumGenre')
  const decadeSelectInput = document.querySelector('#albumDecade')
  const commentTextAreaInput = document.querySelector('#albumComments')
  const albumItem = document.querySelector('#albumCover');
  const resultItem = document.querySelector('#album-results');

  const deleteAddedItems = function(event){
    resultItem.innerHTML = " "
  }

  function showHideContent() {
    event.preventDefault();
    const btitle = document.querySelector("#stenk");
    const x = document.getElementById('albumComment');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      btitle.textContent = 'Hide Comments'
    } else {
      x.style.display = 'none';
      btitle.textContent = 'Show Comments'
    }
  }
  //Submit
  const handleFormSubmit = function(event){
    event.preventDefault();
    const unOrderedList = document.querySelector('#album-results')
    const newImageItem = document.createElement('li')
    unOrderedList.appendChild(newImageItem)
    newImageItem.innerHTML = "<img src=\"" + event.target.albumCover.value + "\">";
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

  const showHideComments = document.querySelector("#stenk")
  showHideComments.addEventListener('click', showHideContent)

  const form = document.querySelector("#new-item-form")
  form.addEventListener('submit', handleFormSubmit)

  const deleteResults = document.querySelector("#delete-all")
  deleteResults.addEventListener('click', deleteAddedItems)

})
