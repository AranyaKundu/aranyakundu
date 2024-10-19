// Toggle sidebar visibility
function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var chatContainer = document.getElementById('chatContainer');
    if (sidebar.style.width === '0px' || sidebar.style.width === '') {
        sidebar.style.width = '260px';
        chatContainer.style.marginLeft = '260px';
    } else {
        sidebar.style.width = "0";
        chatContainer.style.marginLeft = '0';
    }
}

//Dropdown visibility
function showdropdown() {
    // var dropdown = document.getElementById("dropdown");
    var dropdown_content = document.getElementById("dropdown-content");
    if (dropdown_content.style.display === 'none' || 
        dropdown_content.style.display === '') {
        dropdown_content.style.display = 'block';
    } else {
        dropdown_content.style.display = 'none';
    }
}


// Dropup visibility
function showdropup() {
    var dropup = document.getElementById("dropup");
    if (dropup.style.display === 'none' || dropup.style.display === '') {
        dropup.style.display = 'block';
    } else {
        dropup.style.display = 'none';
}}

// Code for share options
function sharelink() {
    var sharelinks = document.getElementById('shareoptions')
    if (sharelinks.style.display === 'none' || sharelinks.style.display === '') {
        sharelinks.style.display = 'block';

        // Get the current page URL
        var currentURL = window.location.href;

        // Set WhatsApp share link
        var whatsappLink = "https://wa.me/?text=" + encodeURIComponent(currentURL);
        document.getElementById("whatsapp-share").setAttribute("href", whatsappLink);

        // Set Email share link
        var emailLink = "mailto:?subject=Check this out&body=" + encodeURIComponent(currentURL);
        document.getElementById("email-share").setAttribute("href", emailLink);

    } else {
        sharelinks.style.display = 'none';
    }
}


window.addEventListener('click', function(event) {
    var dropdown_content = document.getElementById("dropdown-content");
    if (!event.target.closest('.image') && dropdown_content.style.display === 'block') {
        dropdown_content.style.display = 'none';
    }
    var dropup = document.getElementById("dropup");
    if (!event.target.closest('.bottomright') && dropup.style.display === 'block') {
        dropup.style.display = 'none'
    }

    var sharelinks = document.getElementById("shareoptions");
    var shareButton = document.querySelector('.btn-1 a');
    if (!sharelinks.contains(event.target) && !shareButton.contains(event.target)) {
        sharelinks.style.display = 'none'
    }

});




// Code for the profiles Page
const answerFiles = ['Answers/profilesummary1.html', 'Answers/profilesummary2.html', 
    'Answers/profilesummary3.html'];
const randomIndex = Math.floor(Math.random() * answerFiles.length);

fetch(answerFiles[randomIndex])
    .then(response => response.text())
    .then(data => {
        const answerbox = document.getElementById('answerbox');
        answerbox.innerHTML = data 
        // typeContentSequentially(data, answerbox);
    })
    .catch(error => console.log('Error loading answer:', error));


// Code for the finished projects page
const projectFiles = ['Answers/fps1.html', 'Answers/fps2.html', 'Answers/fps3.html'];
const randIndex = Math.floor(Math.random() * projectFiles.length);

fetch(projectFiles[randIndex]).then(response => response.text()).then(
    data => {
        document.getElementById('answerprojects').innerHTML = data
    }).catch(
        error => console.log('Error loading file', error));

// Code for the work in progress pages webpage
const wipFiles = ['Answers/wip1.html', 'Answers/wip2.html', 'Answers/wip3.html'];
const getIndex = Math.floor(Math.random() * wipFiles.length);

fetch(wipFiles[getIndex]).then(
    response => response.text()).then(
        data => {
            document.getElementById('answerwip').innerHTML = data
        }).catch(
            error => console.log('Error loading file', error));

// Code for the R dashboards pages webpage
const dashFiles = ['Answers/dsd1.html', 'Answers/dsd2.html', 'Answers/dsd3.html'];
const getInd = Math.floor(Math.random() * dashFiles.length);

fetch(dashFiles[getInd]).then(
    response => response.text()).then(
        data => {
            document.getElementById('answerdash').innerHTML = data
        }).catch(
            error => console.log('Error loading file', error));


// Code for the professional experience page
const pexpFiles = ['Answers/pexp1.html', 'Answers/pexp2.html', 'Answers/pexp3.html'];
const getrandIndex = Math.floor(Math.random() * pexpFiles.length);

fetch(pexpFiles[getrandIndex]).then(
    response => response.text()).then(
        data => {
            document.getElementById('answerexp').innerHTML = data
        }).catch(
            error => console.log('Error loading file', error));


// Code for educational background page
const ebxFiles = ['Answers/ebx1.html', 'Answers/ebx2.html', 'Answers/ebx3.html'];
const getrandomIndex = Math.floor(Math.random() * ebxFiles.length);

fetch(ebxFiles[getrandomIndex]).then(
    response => response.text()).then(
        data => {
            document.getElementById('answerebx').innerHTML = data
        }).catch(
            error => console.log('Error loading file', error));



// Code for Technical Expertise page
const texFiles = ['Answers/tex1.html', 'Answers/tex2.html', 'Answers/tex3.html'];
const getTextIndex = Math.floor(Math.random() * texFiles.length);

fetch(texFiles[getTextIndex]).then(
    response => response.text()).then(
        data => {
            document.getElementById('answertex').innerHTML = data
        }).catch(
            error => console.log('Error loading file', error));

// Code for Management Understanding Page

const muxFiles = ['Answers/mux1.html', 'Answers/mux2.html', 'Answers/mux3.html'];
const getMuxIndex = Math.floor(Math.random() * muxFiles.length);

fetch(muxFiles[getMuxIndex]).then(
    response => response.text()).then(
        data => {
            document.getElementById('answermux').innerHTML = data
        }).catch(
            error => console.log('Error loading file', error));



// Code for Certifications Page

const certFiles = ['Answers/certs1.html', 'Answers/certs2.html', 'Answers/certs3.html'];
const getCertIndex = Math.floor(Math.random() * certFiles.length);

fetch(certFiles[getCertIndex]).then(
    response => response.text()).then(
        data => {
            document.getElementById('answercerts').innerHTML = data
        }).catch(
            error => console.log('Error loading file', error));




// Input text area height

const textarea = document.getElementById('messageInput');

textarea.addEventListener('input', function () {
    this.style.height = 'auto'; // Reset height
    this.style.height = `${Math.min(this.scrollHeight, 200)}px`; // Set height based on content
});


// Show extra buttons
function showMore() {
    var moreBtn = document.getElementById('moreBtn');
    var extraButtons = document.getElementById('extraButtons');
    
    // Show extra buttons
    extraButtons.style.display = 'block';
    
    // Change the text of the "More" button to "Other"
    moreBtn.innerHTML = '<i class="fa-solid fa-certificate goldenrod"' +
    '</i><a href="certs.html" class="text"> Certificates</a>';
    
    // Disable the "More" button to prevent further clicks (optional)
    moreBtn.disabled = true;
}

const textList = [
    'Please click on buttons below to know more',
    'Click on the icon at the bottom right',
    'Click on the buttons on the top right to connect'
];

let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typingSpeed = 30;  
const deletingSpeed = 10; 
const delayBetweenTexts = 3000; 

function typeWriter() {
    const typewriterElement = document.querySelector('.typewriter');

    if (!isDeleting && charIndex <= textList[index].length) {
        currentText = textList[index].slice(0, charIndex);
        typewriterElement.textContent = currentText;
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        currentText = textList[index].slice(0, charIndex);
        typewriterElement.textContent = currentText;
        charIndex--;
        setTimeout(typeWriter, deletingSpeed);
    } else if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % textList.length; // Loop to the first text after the last one
        setTimeout(typeWriter, typingSpeed);
    } else {
        isDeleting = true;
        setTimeout(typeWriter, delayBetweenTexts);
    }
}

// Start the typing effect
typeWriter();


// Code for a disclaimer popup
// Get elements


function openPopup(){
    document.getElementById("popupPage").style.display = 'block';
}

function closePopup(){
    document.getElementById("popupPage").style.display = 'none';
}

window.addEventListener('click', function(event) {
    if (!event.target.closest('.popup') && document.getElementById("popupPage").style.display === 'block') {
        dropdown_content.style.display = 'none';
    }
});