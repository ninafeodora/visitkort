// Lists all cards by default
const ul = document.getElementById('cards')

// For each card, show its information on the page
fetch("http://127.0.0.1:5000/cards").then(response => response.json()).then(data => {
    Object.entries(data).forEach(([key, value]) => { 
        const name_title = document.createElement('h4')
        name_title.innerHTML = 'Name: ' + value.name
        const surname_title = document.createElement('h4')
        surname_title.innerHTML = 'surName: ' + value.surName
        const telephone_title = document.createElement('h4')
        telephone_title.innerHTML = 'telephone: ' + value.telephone
        const email_title = document.createElement('h4')
        email_title.innerHTML = 'telephone: ' + value.email
        const image = document.createElement('img')
        // Not the correct image, but I wanted to experiment with showing the image on the page
        image.src = 'https://thispersondoesnotexist.com/image'
        const li = document.createElement('li')
        // Below each card, add a delete button to delete card
        const delete_button = document.createElement('button')
        delete_button.innerHTML = 'Delete card'
        const card_id = key
        // The button deletes the card, but the user needs to manually reload the page to see the change
        // I tried to get it to reload, but then it doesn't delete the card
        delete_button.addEventListener('click',e => fetch("http://127.0.0.1:5000/cards/" + card_id, {method: 'DELETE'})) //.then(location.reload()))
        li.appendChild(name_title)
        li.appendChild(surname_title)
        li.appendChild(telephone_title)
        li.appendChild(email_title)
        li.appendChild(image)
        ul.appendChild(li)
        ul.appendChild(delete_button)
      });   
})