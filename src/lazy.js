const isIntersecting = (entry) => {
    return entry.isIntersecting; // true (inside the screen)
}

const loadImage = (entry) => {
    const container = entry.target; // nuevo div
    const image = container.firstChild;
    const url = image.dataset.src;
    // LOAD IMAGE
    image.src = url;
    console.log('🟣 Foxes loaded:');

    //unlisten
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
})

export const registerImage = (image) => {
    observer.observe(image);
}