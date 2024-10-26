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


const toTopBtn = document.querySelector('#toTopBtn')

window.addEventListener('scroll', () => {
    if (window.scrollY > 195) {
        toTopBtn.style.transform = `translateY(0)`;
    } else {
        toTopBtn.style.transform = `translateY(6rem)`;
    };
});

toTopBtn.addEventListener('click', () => window.scroll(0, 0))



function heroCode() {
    document.createElement('p')
    p.textContent = generateRandomCode()
    console.log(generateRandomCode())
}


function generateRandomCode() {
    return codeSnippets[Math.round(Math.random() * codeSnippets.length)]
}


const codeSnippets = [
    'touch whoIsAthina.js',
    'const favoriteAnimal = cats 😺',
    `if (bored === true) {
        paintSomething()
    }`,
    `while (coffeeCup === empty) {
        athina.brewCoffee()
    }`,
    `if (gymday.includes(today)) {
        athina.goGym()
    }`,
    `else {
        athina.code()
    }`
]


let typeWriterInterval;
const command = document.querySelector('#command');

function typeWriter(snippet) {
    let index = 0;

    typeWriterInterval = setInterval(() => {
        command.textContent += snippet[index];
        index++;

        if (index === snippet.length) {
            clearInterval(typeWriterInterval);
        }
    }, 100);
}

typeWriter('touch whoIsAthina.js');

