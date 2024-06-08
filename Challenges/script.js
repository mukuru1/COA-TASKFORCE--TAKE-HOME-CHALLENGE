document.addEventListener('DOMContentLoaded', (event) => {
    const photos = document.querySelectorAll('.photo');

    photos.forEach(photo => {
        photo.addEventListener('mouseover', () => {
            const overlay = photo.querySelector('.overlay');
            overlay.style.opacity = 1;
        });

        photo.addEventListener('mouseout', () => {
            const overlay = photo.querySelector('.overlay');
            overlay.style.opacity = 0;
        });

        const moreInfoLink = photo.querySelector('.more-info');
        if (moreInfoLink) {
            moreInfoLink.addEventListener('click', (event) => {
                event.preventDefault();
                alert('More information about ' + photo.querySelector('.title').innerText);
            });
        }
    });
});
