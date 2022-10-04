const createElements = data => {
    const section = document.querySelector('.title-albuns')
    const ul = document.createElement('ul')
    section.innerHTML = ''
    ul.classList.add('list-albuns')
    section.appendChild(ul)
    data.forEach(e => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const div = document.createElement('div')
        const small = document.createElement('small')
        const smallTwo = document.createElement('small')
        const h2 = document.createElement('h2')
        const divTwo = document.createElement('div')
        const h3 = document.createElement('h3')
        const button = document.createElement('button')

        img.src = e.img
        img.alt = e.title
        div.classList.add('categories-card')
        small.classList.add('banda')
        smallTwo.classList.add('time')
        divTwo.classList.add('footer-card')

        small.innerText = e.band
        smallTwo.innerText = e.year
        h2.innerText = e.title
        h3.innerText = `R$ ${e.price},90`
        button.innerText = 'Comprar'
        
                
        div.append(small, smallTwo)
        divTwo.append(h3, button)
        li.append(img, div, h2, divTwo)
        ul.appendChild(li)
    })
}

createElements(products)
