// JavaScripts for my website //

// Expandable project-title: //

document.querySelectorAll('.project-title').forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

// Image Lightbox: //

document.querySelectorAll('.image-gallery img').forEach(function(image) {
    image.addEventListener('click', function() {
        // Get the source of the clicked image
        var imgSrc = this.src;
        var imgCaption =this.getAttribute('data-caption');
        
        // Update the lightbox image source
        var lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = imgSrc;
        
        //Update lightbox caption
        var lightboxCaption = document.querySelector('.lightbox-caption');
        lightboxCaption.textContent= imgCaption;
        

        // Show the lightbox
        var lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'block';
    });
});

// Close the lightbox
document.querySelector('.lightbox .close').addEventListener('click', function() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
});	