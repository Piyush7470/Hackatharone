let slideIndex = 0;

function login() {
    // Hide the login section and show the slider section
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('sliderSection').style.display = 'block';
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
}

function moveSlide(step) {
    showSlide(slideIndex += step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});

function showDashboard() {
    // Hide the slider section and show the dashboard section
    document.getElementById('sliderSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
}

document.getElementById('toggleSidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
    const content = document.querySelector('.main-content');
    content.style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '250px';
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.main-content section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
}

// Other existing JavaScript code remains the same


function showResource(resourceType) {
    const pdfPreview = document.getElementById('pdfPreview');
    const downloadLink = document.getElementById('downloadLink');

    if (resourceType === 'html') {
        pdfPreview.src = 'Resource\html_tutorial.pdf';
        downloadLink.href = 'Resource\html_tutorial.pdf';
    } else if (resourceType === 'css') {
        pdfPreview.src = 'Resource\css_tutorial.pdf';
        downloadLink.href = 'Resource\css_tutorial.pdf';
    } else if (resourceType === 'javascript') {
        pdfPreview.src = 'Resource\javascript_tutorial.pdf';
        downloadLink.href = 'Resource\javascript_tutorial.pdf';
    }
    else if (resourceType === 'Database') {
        pdfPreview.src = 'Resource\intro2DB20180611.pdf';
        downloadLink.href = 'Resource\intro2DB20180611.pdf';
    }
    else if (resourceType === 'Webdevelopment') {
        pdfPreview.src = 'Resource\Web.pdf';
        downloadLink.href = 'Resource\Web.pdf';
    }

    pdfPreview.style.display = 'block';
    downloadLink.style.display = 'block';
}

document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', function() {
        const videoSrc = this.querySelector('video').src;
        const modal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');

        modalVideo.src = videoSrc;
        modal.style.display = 'flex';

        modal.addEventListener('click', function() {
            modal.style.display = 'none';
            modalVideo.src = '';
        });
    });
});