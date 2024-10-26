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


const h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
    if (window.location.pathname === '/index.html') {
        window.scroll(0, 0);
    } else {
        window.location.replace('http://127.0.0.1:5500/index.html');
        console.log('clicked')
    }
})


const codeSnippets = [
    'touch whoIsAthina.js',
    'const favoriteAnimal = cats 😺',
    `if (bored) {
        athina.code()
    }`,
    `if (!coffee) {
        athina.brewCoffee()
    }`,
    `if (gymday.includes(today)) {
        athina.goGym()
    }`
]


let typeWriterInterval;
let typeWriterIndex = 0;

function animateCommands() {
    if (typeWriterIndex < codeSnippets.length) {
        // Call typeWriter with the current snippet and wait for it to resolve
        typeWriter(codeSnippets[typeWriterIndex]).then(() => {
            typeWriterIndex++; // Move to the next snippet
            setTimeout(animateCommands, 500)
        });
    }
}

function typeWriter(snippet) {
    const p = document.createElement('p');
    document.querySelector('.hero').appendChild(p);

    if (p.previousElementSibling && p.previousElementSibling.classList.contains('newLine')) {
        p.previousElementSibling.classList.toggle('newLine');
    }
    p.classList.toggle('newLine');

    return new Promise((resolve) => { 
        let index = 0;

        // Start typing after a slight delay
        setTimeout(() => {
            typeWriterInterval = setInterval(() => {
                p.textContent += snippet[index];
                index++;

                if (index === snippet.length) {
                    clearInterval(typeWriterInterval);
                    resolve(); // Resolve the promise once typing is complete
                }
            }, 100); // Typing speed
        }, 500); // Initial delay for realism
    });
}

// Start the animation
animateCommands();