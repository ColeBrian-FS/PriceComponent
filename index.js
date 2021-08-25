const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    let name = document.querySelector('.card-title')
    alert(`Added to Cart:  ${name.innerHTML}`)
})