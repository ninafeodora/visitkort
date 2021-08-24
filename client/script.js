// Lists all cards
const ul = document.getElementById('cards')
// const formData = "'name': 'Hans',
//                     'surName': 'John',
//                     'telephone': '1234',
//                     'email': 'mail',
//                     'image': 'https://thispersondoesnotexist.com/image'";
// fetch("http://127.0.0.1:5000/cards", {method: 'POST'}, {body: JSON.stringify(formData)})
fetch("http://127.0.0.1:5000/cards").then(response => response.json()).then(data => {
    Object.entries(data).forEach(([key, value]) => { 
        // const title = document.createElement('h1')
        // title.innerHTML = 'Visitkort'
        const name_title = document.createElement('h4')
        name_title.innerHTML = 'Name: ' + value.name
        const surname_title = document.createElement('h4')
        surname_title.innerHTML = 'surName: ' + value.surName
        const telephone_title = document.createElement('h4')
        telephone_title.innerHTML = 'telephone: ' + value.telephone
        const email_title = document.createElement('h4')
        email_title.innerHTML = 'telephone: ' + value.email
        const image = document.createElement('img')
        image.src = 'https://thispersondoesnotexist.com/image'
        const li = document.createElement('li')
        li.appendChild(name_title)
        li.appendChild(surname_title)
        li.appendChild(telephone_title)
        li.appendChild(email_title)
        li.appendChild(image)
        // li.id = key
        // li.addEventListener('click',e => fetch("http://127.0.0.1:5000/cards/" + e.currentTarget.id, {method: 'DELETE'}))
        // ul.appendChild(title)
        ul.appendChild(li)
      });   
})