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

