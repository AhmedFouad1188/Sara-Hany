function navigateToSection(sectionId) { 
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() { 
    const images = document.querySelectorAll('img'); 
    images.forEach(img => { 
        img.oncontextmenu = function() { 
            return false; 
        }; 
    }); 
});

document.addEventListener('DOMContentLoaded', function() { 
    const carousel = document.querySelectorAll('.gal .carousel'); 
    carousel.forEach(carousel => { 
        carousel.setAttribute('data-bs-pause', 'false');
    }); 
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

document.addEventListener('DOMContentLoaded', function() { 
    const carousels = document.querySelectorAll('.gal .carousel'); 
    carousels.forEach((carouselElement, index) => { 
        const pauseIcon = document.getElementById(`pauseicon${index + 1}`); 
        const playIcon = document.getElementById(`playicon${index + 1}`); 
        const toggleIconButton = document.getElementById(`pause${index + 1}`); 
        
        let isPaused = false; // Track the pause state for each carousel 
        
        function toggleIcons(isPaused) { 
            if (isPaused) { 
                pauseIcon.style.display = 'none'; 
                playIcon.style.display = 'block'; 
            } else { 
                pauseIcon.style.display = 'block'; 
                playIcon.style.display = 'none'; 
            } 
        } 
        
        toggleIconButton.addEventListener('click', function() { 
            if (isPaused) { 
                $(carouselElement).carousel('cycle'); // Resume the carousel 
            } else { 
                $(carouselElement).carousel('pause'); // Pause the carousel 
            } 
            isPaused = !isPaused; 
            toggleIcons(isPaused); 
        }); 
        
        // Ensure the carousel indicators and slides do not affect the pause/play state 
        $(carouselElement).find('.carousel-indicators button').on('click', function() { 
            if (isPaused) { 
                setTimeout(function() { 
                    $(carouselElement).carousel('pause'); // Ensure the carousel remains paused 
                }, 100); 
            } 
        }); 
        
        $(carouselElement).on('slid.bs.carousel', function() { 
            if (isPaused) { 
                setTimeout(function() { 
                    $(carouselElement).carousel('pause'); // Ensure the carousel remains paused 
                }, 100); 
            } 
        }); 
    }); 
});
    
document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.vidcont .modal');
    var videos = document.querySelectorAll('video');
    
modals.forEach(function(modal, index) {
    var video = videos[index];
    
modal.addEventListener('shown.bs.modal', function() {
    video.play();
});
    
modal.addEventListener('hidden.bs.modal', function() {
    video.pause();
    video.currentTime = 0;
});
});
});

const countries = [
    { code: "AF", name: "Afghanistan", dial_code: "+93", length: 9 },
    { code: "AL", name: "Albania", dial_code: "+355", length: 9 },
    { code: "DZ", name: "Algeria", dial_code: "+213", length: 9 },
    { code: "AD", name: "Andorra", dial_code: "+376", length: 9 },
    { code: "AO", name: "Angola", dial_code: "+244", length: 9 },
    { code: "AG", name: "Antigua and Barbuda", dial_code: "+1-268", length: 10 },
    { code: "AR", name: "Argentina", dial_code: "+54", length: 10 },
    { code: "AM", name: "Armenia", dial_code: "+374", length: 8 },
    { code: "AU", name: "Australia", dial_code: "+61", length: 9 },
    { code: "AT", name: "Austria", dial_code: "+43", length: 13 },
    { code: "AZ", name: "Azerbaijan", dial_code: "+994", length: 9 },
    { code: "BS", name: "Bahamas", dial_code: "+1-242", length: 10 },
    { code: "BH", name: "Bahrain", dial_code: "+973", length: 8 },
    { code: "BD", name: "Bangladesh", dial_code: "+880", length: 11 },
    { code: "BB", name: "Barbados", dial_code: "+1-246", length: 10 },
    { code: "BY", name: "Belarus", dial_code: "+375", length: 9 },
    { code: "BE", name: "Belgium", dial_code: "+32", length: 10 },
    { code: "BZ", name: "Belize", dial_code: "+501", length: 7 },
    { code: "BJ", name: "Benin", dial_code: "+229", length: 8 },
    { code: "BT", name: "Bhutan", dial_code: "+975", length: 8 },
    { code: "BO", name: "Bolivia", dial_code: "+591", length: 8 },
    { code: "BA", name: "Bosnia and Herzegovina", dial_code: "+387", length: 8 },
    { code: "BW", name: "Botswana", dial_code: "+267", length: 8 },
    { code: "BR", name: "Brazil", dial_code: "+55", length: 11 },
    { code: "BN", name: "Brunei", dial_code: "+673", length: 8 },
    { code: "BG", name: "Bulgaria", dial_code: "+359", length: 9 },
    { code: "BF", name: "Burkina Faso", dial_code: "+226", length: 8 },
    { code: "BI", name: "Burundi", dial_code: "+257", length: 8 },
    { code: "KH", name: "Cambodia", dial_code: "+855", length: 9 },
    { code: "CM", name: "Cameroon", dial_code: "+237", length: 8 },
    { code: "CA", name: "Canada", dial_code: "+1", length: 10 },
    { code: "CV", name: "Cape Verde", dial_code: "+238", length: 7 },
    { code: "CF", name: "Central African Republic", dial_code: "+236", length: 7 },
    { code: "TD", name: "Chad", dial_code: "+235", length: 8 },
    { code: "CL", name: "Chile", dial_code: "+56", length: 9 },
    { code: "CN", name: "China", dial_code: "+86", length: 11 },
    { code: "CO", name: "Colombia", dial_code: "+57", length: 10 },
    { code: "KM", name: "Comoros", dial_code: "+269", length: 7 },
    { code: "CG", name: "Congo", dial_code: "+242", length: 9 },
    { code: "CR", name: "Costa Rica", dial_code: "+506", length: 8 },
    { code: "HR", name: "Croatia", dial_code: "+385", length: 9 },
    { code: "CU", name: "Cuba", dial_code: "+53", length: 8 },
    { code: "CY", name: "Cyprus", dial_code: "+357", length: 8 },
    { code: "CZ", name: "Czech Republic", dial_code: "+420", length: 9 },
    { code: "DK", name: "Denmark", dial_code: "+45", length: 8 },
    { code: "DJ", name: "Djibouti", dial_code: "+253", length: 8 },
    { code: "DM", name: "Dominica", dial_code: "+1-767", length: 10 },
    { code: "DO", name: "Dominican Republic", dial_code: "+1-809", length: 10 },
    { code: "TL", name: "East Timor", dial_code: "+670", length: 7 },
    { code: "EC", name: "Ecuador", dial_code: "+593", length: 9 },
    { code: "EG", name: "Egypt", dial_code: "+20", length: 10 },
    { code: "SV", name: "El Salvador", dial_code: "+503", length: 8 },
    { code: "GQ", name: "Equatorial Guinea", dial_code: "+240", length: 7 },
    { code: "ER", name: "Eritrea", dial_code: "+291", length: 7 },
    { code: "EE", name: "Estonia", dial_code: "+372", length: 8 },
    { code: "SZ", name: "Eswatini", dial_code: "+268", length: 8 },
    { code: "ET", name: "Ethiopia", dial_code: "+251", length: 9 },
    { code: "FJ", name: "Fiji", dial_code: "+679", length: 7 },
    { code: "FI", name: "Finland", dial_code: "+358", length: 10 },
    { code: "FR", name: "France", dial_code: "+33", length: 9 },
    { code: "GA", name: "Gabon", dial_code: "+241", length: 7 },
    { code: "GM", name: "Gambia", dial_code: "+220", length: 7 },
    { code: "GE", name: "Georgia", dial_code: "+995", length: 9 },
    { code: "DE", name: "Germany", dial_code: "+49", length: 11 },
    { code: "GH", name: "Ghana", dial_code: "+233", length: 9 },
    { code: "GR", name: "Greece", dial_code: "+30", length: 10 },
    { code: "GD", name: "Grenada", dial_code: "+1-473", length: 10 },
    { code: "GT", name: "Guatemala", dial_code: "+502", length: 8 },
    { code: "GN", name: "Guinea", dial_code: "+224", length: 8 },
    { code: "GW", name: "Guinea-Bissau", dial_code: "+245", length: 8 },
    { code: "GY", name: "Guyana", dial_code: "+592", length: 7 },
    { code: "HT", name: "Haiti", dial_code: "+509", length: 8 },
    { code: "HN", name: "Honduras", dial_code: "+504", length: 8 },
    { code: "HU", name: "Hungary", dial_code: "+36", length: 9 },
    { code: "IS", name: "Iceland", dial_code: "+354", length: 7 },
    { code: "IN", name: "India", dial_code: "+91", length: 10 },
    { code: "ID", name: "Indonesia", dial_code: "+62", length: 11 },
    { code: "IR", name: "Iran", dial_code: "+98", length: 10 },
    { code: "IQ", name: "Iraq", dial_code: "+964", length: 10 },
    { code: "IE", name: "Ireland", dial_code: "+353", length: 10 },
    { code: "IL", name: "Israel", dial_code: "+972", length: 9 },
    { code: "IT", name: "Italy", dial_code: "+39", length: 10 },
    { code: "JM", name: "Jamaica", dial_code: "+1-876", length: 10 },
    { code: "JP", name: "Japan", dial_code: "+81", length: 11 },
    { code: "JO", name: "Jordan", dial_code: "+962", length: 9 },
    { code: "KZ", name: "Kazakhstan", dial_code: "+7", length: 10 },
    { code: "KE", name: "Kenya", dial_code: "+254", length: 9 },
    { code: "KI", name: "Kiribati", dial_code: "+686", length: 5 },
    { code: "KR", name: "Korea", dial_code: "+82", length: 10 },
    { code: "KW", name: "Kuwait", dial_code: "+965", length: 8 },
    { code: "KG", name: "Kyrgyzstan", dial_code: "+996", length: 9 },
    { code: "LA", name: "Laos", dial_code: "+856", length: 8 },
    { code: "LV", name: "Latvia", dial_code: "+371", length: 8 },
    { code: "LB", name: "Lebanon", dial_code: "+961", length: 8 },
    { code: "LS", name: "Lesotho", dial_code: "+266", length: 8 },
    { code: "LR", name: "Liberia", dial_code: "+231", length: 7 },
    { code: "LY", name: "Libya", dial_code: "+218", length: 9 },
    { code: "LI", name: "Liechtenstein", dial_code: "+423", length: 8 },
    { code: "LT", name: "Lithuania", dial_code: "+370", length: 8 },
    { code: "LU", name: "Luxembourg", dial_code: "+352", length: 9 },
    { code: "MG", name: "Madagascar", dial_code: "+261", length: 9 },
    { code: "MW", name: "Malawi", dial_code: "+265", length: 9 },
    { code: "MY", name: "Malaysia", dial_code: "+60", length: 9 },
    { code: "MV", name: "Maldives", dial_code: "+960", length: 7 },
    { code: "ML", name: "Mali", dial_code: "+223", length: 8 },
    { code: "MT", name: "Malta", dial_code: "+356", length: 8 },
    { code: "MH", name: "Marshall Islands", dial_code: "+692", length: 7 },
    { code: "MR", name: "Mauritania", dial_code: "+222", length: 8 },
    { code: "MU", name: "Mauritius", dial_code: "+230", length: 7 },
    { code: "MX", name: "Mexico", dial_code: "+52", length: 10 },
    { code: "FM", name: "Micronesia", dial_code: "+691", length: 7 },
    { code: "MD", name: "Moldova", dial_code: "+373", length: 8 },
    { code: "MC", name: "Monaco", dial_code: "+377", length: 9 },
    { code: "MN", name: "Mongolia", dial_code: "+976", length: 8 },
    { code: "ME", name: "Montenegro", dial_code: "+382", length: 8 },
    { code: "MA", name: "Morocco", dial_code: "+212", length: 9 },
    { code: "MZ", name: "Mozambique", dial_code: "+258", length: 9 },
    { code: "MM", name: "Myanmar", dial_code: "+95", length: 8 },
    { code: "NA", name: "Namibia", dial_code: "+264", length: 9 },
    { code: "NR", name: "Nauru", dial_code: "+674", length: 7 },
    { code: "NP", name: "Nepal", dial_code: "+977", length: 10 },
    { code: "NL", name: "Netherlands", dial_code: "+31", length: 10 },
    { code: "NZ", name: "New Zealand", dial_code: "+64", length: 9 },
    { code: "NI", name: "Nicaragua", dial_code: "+505", length: 8 },
    { code: "NE", name: "Niger", dial_code: "+227", length: 8 },
    { code: "NG", name: "Nigeria", dial_code: "+234", length: 11 },
    { code: "MK", name: "North Macedonia", dial_code: "+389", length: 8 },
    { code: "NO", name: "Norway", dial_code: "+47", length: 8 },
    { code: "OM", name: "Oman", dial_code: "+968", length: 8 },
    { code: "PK", name: "Pakistan", dial_code: "+92", length: 10 },
    { code: "PW", name: "Palau", dial_code: "+680", length: 7 },
    { code: "PA", name: "Panama", dial_code: "+507", length: 8 },
    { code: "PG", name: "Papua New Guinea", dial_code: "+675", length: 8 },
    { code: "PY", name: "Paraguay", dial_code: "+595", length: 9 },
    { code: "PE", name: "Peru", dial_code: "+51", length: 9 },
    { code: "PH", name: "Philippines", dial_code: "+63", length: 10 },
    { code: "PL", name: "Poland", dial_code: "+48", length: 9 },
    { code: "PT", name: "Portugal", dial_code: "+351", length: 9 },
    { code: "QA", name: "Qatar", dial_code: "+974", length: 8 },
    { code: "RO", name: "Romania", dial_code: "+40", length: 9 },
    { code: "RU", name: "Russia", dial_code: "+7", length: 10 },
    { code: "RW", name: "Rwanda", dial_code: "+250", length: 9 },
    { code: "KN", name: "Saint Kitts and Nevis", dial_code: "+1-869", length: 10 },
    { code: "LC", name: "Saint Lucia", dial_code: "+1-758", length: 10 },
    { code: "VC", name: "Saint Vincent and the Grenadines", dial_code: "+1-784", length: 10 },
    { code: "WS", name: "Samoa", dial_code: "+685", length: 7 },
    { code: "SM", name: "San Marino", dial_code: "+378", length: 9 },
    { code: "ST", name: "Sao Tome and Principe", dial_code: "+239", length: 7 },
    { code: "SA", name: "Saudi Arabia", dial_code: "+966", length: 9 },
    { code: "SN", name: "Senegal", dial_code: "+221", length: 9 },
    { code: "RS", name: "Serbia", dial_code: "+381", length: 8 },
    { code: "SC", name: "Seychelles", dial_code: "+248", length: 7 },
    { code: "SL", name: "Sierra Leone", dial_code: "+232", length: 8 },
    { code: "SG", name: "Singapore", dial_code: "+65", length: 8 },
    { code: "SK", name: "Slovakia", dial_code: "+421", length: 9 },
    { code: "SI", name: "Slovenia", dial_code: "+386", length: 8 },
    { code: "SB", name: "Solomon Islands", dial_code: "+677", length: 7 },
    { code: "SO", name: "Somalia", dial_code: "+252", length: 8 },
    { code: "ZA", name: "South Africa", dial_code: "+27", length: 9 },
    { code: "SS", name: "South Sudan", dial_code: "+211", length: 9 },
    { code: "ES", name: "Spain", dial_code: "+34", length: 9 },
    { code: "LK", name: "Sri Lanka", dial_code: "+94", length: 9 },
    { code: "SD", name: "Sudan", dial_code: "+249", length: 9 },
    { code: "SR", name: "Suriname", dial_code: "+597", length: 7 },
    { code: "SE", name: "Sweden", dial_code: "+46", length: 9 },
    { code: "CH", name: "Switzerland", dial_code: "+41", length: 9 },
    { code: "SY", name: "Syria", dial_code: "+963", length: 9 },
    { code: "TW", name: "Taiwan", dial_code: "+886", length: 9 },
    { code: "TJ", name: "Tajikistan", dial_code: "+992", length: 9 },
    { code: "TZ", name: "Tanzania", dial_code: "+255", length: 9 },
    { code: "TH", name: "Thailand", dial_code: "+66", length: 9 },
    { code: "TG", name: "Togo", dial_code: "+228", length: 8 },
    { code: "TO", name: "Tonga", dial_code: "+676", length: 7 },
    { code: "TT", name: "Trinidad and Tobago", dial_code: "+1-868", length: 10 },
    { code: "TN", name: "Tunisia", dial_code: "+216", length: 8 },
    { code: "TR", name: "Turkey", dial_code: "+90", length: 10 },
    { code: "TM", name: "Turkmenistan", dial_code: "+993", length: 8 },
    { code: "TV", name: "Tuvalu", dial_code: "+688", length: 5 },
    { code: "UG", name: "Uganda", dial_code: "+256", length: 9 },
    { code: "UA", name: "Ukraine", dial_code: "+380", length: 9 },
    { code: "AE", name: "United Arab Emirates", dial_code: "+971", length: 9 },
    { code: "GB", name: "United Kingdom", dial_code: "+44", length: 10 },
    { code: "US", name: "United States", dial_code: "+1", length: 10 },
    { code: "UY", name: "Uruguay", dial_code: "+598", length: 8 },
    { code: "UZ", name: "Uzbekistan", dial_code: "+998", length: 9 },
    { code: "VU", name: "Vanuatu", dial_code: "+678", length: 7 },
    { code: "VA", name: "Vatican City", dial_code: "+379", length: 9 },
    { code: "VE", name: "Venezuela", dial_code: "+58", length: 10 },
    { code: "VN", name: "Vietnam", dial_code: "+84", length: 10 },
    { code: "YE", name: "Yemen", dial_code: "+967", length: 9 },
    { code: "ZM", name: "Zambia", dial_code: "+260", length: 9 },
    { code: "ZW", name: "Zimbabwe", dial_code: "+263", length: 9 },
];

const countrySelect = document.getElementById('country');
const countryCodeInput = document.getElementById('countrycode'); 
const mobileNumberInput = document.getElementById('mobile');

countries.forEach(country => {
    let option = document.createElement('option');
    option.textContent = country.name;
    option.value = country.name;
    countrySelect.appendChild(option);
});

function updateCountryCodeAndMaxLength() { 
    const selectedCountry = countries.find(country => country.name === countrySelect.value); 
    countryCodeInput.value = Array.isArray(selectedCountry.dial_code) ? selectedCountry.dial_code.join(', ') : selectedCountry.dial_code; 
    mobileNumberInput.title = `Please enter ${selectedCountry.length} digits for the mobile number.`; 
    mobileNumberInput.maxLength = selectedCountry.length; 
}

const mobileInput = document.getElementById('mobile'); 
const mobcont = document.getElementById('mobcont'); 

mobileInput.addEventListener('focus', () => { 
    mobcont.classList.add('focused'); 
}); 

mobileInput.addEventListener('blur', () => { 
    mobcont.classList.remove('focused'); 
});

function clearInput() { 
    document.getElementById('promocode').value = '';
}

function checkPromoCode() {
    const promoInput = document.getElementById('promocode').value;
    const countryCodeInput = document.getElementById('countrycode').value;
    const mobileInput = document.getElementById('mobile').value; // Get the mobile number input
    const fullMobileNumber = countryCodeInput + mobileInput;
    const promoMessage = document.getElementById('promostatus');

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "validate_promocode.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const response = JSON.parse(xhr.responseText);
            if (response.status === "valid") {
                promoMessage.textContent = "Congrats, You Got A Discount";
                promoMessage.style.color = "rgb(84, 234, 84)";
            } else if (response.status === "used") {
                promoMessage.textContent = "You Used This Code Before";
                promoMessage.style.color = "orange";
            } else {
                promoMessage.textContent = "Invalid Code";
                promoMessage.style.color = "red";
            }
        }
    };

    xhr.send("promocode=" + encodeURIComponent(promoInput) + "&countrycode=" + encodeURIComponent(countryCodeInput) + "&mobile=" + encodeURIComponent(mobileInput) + "&full_mobile_number=" + encodeURIComponent(fullMobileNumber));
}

$(document).ready(function() { 
    $('#reqform').on('submit', function(event) { 
        event.preventDefault(); // Prevent default form submission
        
        $.ajax({ url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: $(this).serialize(),
            success: function(response) {
                var toastElement = document.getElementById('toast');
                var toast = new bootstrap.Toast(toastElement);
                toast.show();
            },
            error: function() {
                alert('Failed to send email. Please try again.');
            }
        });
    });
});

document.getElementById('copybtn').addEventListener('click', function() {
    // Get the text from the button
    const textToCopy = this.innerText;

    // Create a temporary textarea element to copy the text
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);

    // Select the text in the textarea and copy it to the clipboard
    tempTextarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
});

document.getElementById("copybtn").onclick = function() { 
    var toastEl = document.getElementById('copytoast'); 
    var toast = new bootstrap.Toast(toastEl); 
    toast.show(); 
}