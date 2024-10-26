// When progressbar are in viewport, show 'progress'
const progressBars = document.querySelectorAll('.progressbar')
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)  {
            entry.target.classList.add('progress')
            observer.unobserve(entry.target)
    }}, {
        threshold: 1
    })
})
progressBars.forEach((el) => observer.observe(el))



// Back to top button only shows then not on header
const toTopBtn = document.querySelector('#toTopBtn')
window.addEventListener('scroll', () => {
    if (window.scrollY > 195) {
        toTopBtn.style.transform = `translateY(0)`;
    } else {
        toTopBtn.style.transform = `translateY(6rem)`;
    };
});
toTopBtn.addEventListener('click', () => window.scroll(0, 0))






const codeSnippets = [
    'touch whoIsAthina.js',
    'const favoriteAnimal = cats 😺',
    `if (bored === true) {
        athina.code()
    }`,
    `while (coffee === null) {
        athina.brewCoffee()
    }`,
    `if (gymday.includes(today)) {
        athina.goGym()
    }`
]


// Typewriter effect for hero banner
let typeWriterInterval;
let newLine;
function typeWriter(snippet) {
    const p = document.createElement('p')
    document.querySelector('.hero').appendChild(p)
    if (p.previousElementSibling && p.previousElementSibling.classList.contains('newLine')) {
        p.previousElementSibling.classList.toggle('newLine')
    }
    p.classList.toggle('newLine')

    let index = 0;

    setTimeout(() => {
        typeWriterInterval = setInterval(() => {
            p.textContent += snippet[index];
            index++;
    
            if (index === snippet.length) {
                clearInterval(typeWriterInterval);
            }
        }, 100);
    }, 300)
}

// Show codesnippets 
let commandInterval;
function animateCommands() {
    let index = 1;
    typeWriter(codeSnippets[0])
    
    commandInterval = setInterval(() => {
        typeWriter(codeSnippets[index])
        index++;

        if (index === codeSnippets.length) {
            clearInterval(commandInterval)
        }
    }, 7000)
}
animateCommands()