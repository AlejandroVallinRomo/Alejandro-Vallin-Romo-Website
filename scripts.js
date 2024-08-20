// JavaScripts for my website

// Expandable project-title:

document.querySelectorAll('.project-title').forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });														