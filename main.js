const yesButton = document.getElementById('yes')
const noButton = document.getElementById('no')
yesButton.addEventListener('click', () => (
    alert('Omg! I love you, too')
))
noButton.addEventListener('mouseover', () => {
    noButton.style.position = 'absolute'
    let newX = Math.floor(Math.random()*window.innerWidth)
    let newY = Math.floor(Math.random()*window.innerHeight)
    noButton.style.left = newX + 'px'
    noButton.style.top = newY + 'px'
})
noButton.addEventListener('clickclick', () => {
    noButton.style.position = 'absolute'
    let newX = Math.floor(Math.random()*window.innerWidth)
    let newY = Math.floor(Math.random()*window.innerHeight)
    noButton.style.left = newX + 'px'
    noButton.style.top = newY + 'px'
})