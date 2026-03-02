// Header HTML
const headerHTML = `
<div class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <a href="index.html" class="flex items-center space-x-2">
                <div class="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-xl">PG</span>
                </div>
                <span class="text-2xl font-bold text-emerald-800">Pesti Go</span>
            </a>

            <nav class="hidden md:flex space-x-8">
                <a href="index.html" class="nav-link text-gray-700 hover:text-emerald-700 pb-1 transition-colors">Home</a>
                <a href="about.html" class="nav-link text-gray-700 hover:text-emerald-700 pb-1 transition-colors">About Us</a>
                <a href="services.html" class="nav-link text-gray-700 hover:text-emerald-700 pb-1 transition-colors">Services</a>
                <a href="contact.html" class="nav-link text-gray-700 hover:text-emerald-700 pb-1 transition-colors">Contact</a>
            </nav>

            <a href="tel:+13423823392" class="hidden md:block bg-emerald-700 text-white px-6 py-2 rounded-lg hover:bg-emerald-800 transition-colors">
                Call Now
            </a>

            <button id="mobileMenuBtn" class="md:hidden text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <nav id="mobileMenu" class="md:hidden pb-4 space-y-2 hidden">
            <a href="index.html" class="block py-2 text-gray-700">Home</a>
            <a href="about.html" class="block py-2 text-gray-700">About Us</a>
            <a href="services.html" class="block py-2 text-gray-700">Services</a>
            <a href="contact.html" class="block py-2 text-gray-700">Contact</a>
        </nav>
    </div>
</div>
`;

// Footer HTML
const footerHTML = `
<div class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <div class="flex items-center space-x-2 mb-4">
                    <div class="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-xl">PG</span>
                    </div>
                    <span class="text-xl font-bold">Pesti Go</span>
                </div>
                <p class="text-gray-400 text-sm">
                    Professional pest control services in Hudson Falls, NY
                </p>
            </div>

            <div>
                <h3 class="font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="index.html" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                    <li><a href="about.html" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                    <li><a href="services.html" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
                    <li><a href="contact.html" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            <div>
                <h3 class="font-semibold mb-4">Legal</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="privacy.html" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="terms.html" class="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
                    <li><a href="disclaimer.html" class="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
                    <li><a href="cookies.html" class="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
            </div>

            <div>
                <h3 class="font-semibold mb-4">Contact</h3>
                <ul class="space-y-3 text-sm">
                    <li class="flex items-start space-x-2">
                        <svg class="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <a href="tel:+13423823392" class="text-gray-400 hover:text-white transition-colors">+1-342-382-3392</a>
                    </li>
                    <li class="flex items-start space-x-2">
                        <svg class="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <a href="mailto:help@pestigo.site" class="text-gray-400 hover:text-white transition-colors">help@pestigo.site</a>
                    </li>
                    <li class="flex items-start space-x-2">
                        <svg class="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span class="text-gray-400">162 Main St<br>Hudson Falls, NY 12839</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Pesti Go. All rights reserved.</p>
            <p class="mt-2">
                Pesti Go is a private pest control service provider. We are not affiliated with any government agency.
            </p>
        </div>
    </div>
</div>
`;

// Load header and footer
document.addEventListener('DOMContentLoaded', function() {
    // Insert header
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    // Insert footer
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }

    // Highlight active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('text-emerald-700', 'border-b-2', 'border-emerald-700');
            link.classList.remove('text-gray-700');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Home page contact form
    const homeContactForm = document.getElementById('homeContactForm');
    if (homeContactForm) {
        homeContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide form, show success message
            document.getElementById('formContainer').classList.add('hidden');
            document.getElementById('formSuccess').classList.remove('hidden');
            
            // Reset form and show it again after 5 seconds
            setTimeout(function() {
                homeContactForm.reset();
                document.getElementById('formContainer').classList.remove('hidden');
                document.getElementById('formSuccess').classList.add('hidden');
            }, 5000);
        });
    }

    // Contact page form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if terms are agreed
            const agreedToTerms = document.getElementById('agreedToTerms');
            if (agreedToTerms && !agreedToTerms.checked) {
                alert('Please agree to the Privacy Policy and Terms to continue.');
                return;
            }
            
            // Hide form, show success message
            document.getElementById('contactFormContainer').classList.add('hidden');
            document.getElementById('contactFormSuccess').classList.remove('hidden');
        });
    }

    // Services page form
    const servicesForm = document.getElementById('servicesForm');
    if (servicesForm) {
        servicesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if agreement is checked
            const serviceAgreement = document.getElementById('serviceAgreement');
            if (serviceAgreement && !serviceAgreement.checked) {
                alert('Please agree to the Privacy Policy and Terms to continue.');
                return;
            }
            
            // Hide form, show success message
            document.getElementById('servicesFormContainer').classList.add('hidden');
            document.getElementById('servicesFormSuccess').classList.remove('hidden');
            
            // Scroll to success message
            document.getElementById('servicesFormSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // Cookie Consent Popup
    showCookieConsent();
});

// Reset Services Form Function
function resetServicesForm() {
    const form = document.getElementById('servicesForm');
    if (form) {
        form.reset();
        document.getElementById('servicesFormContainer').classList.remove('hidden');
        document.getElementById('servicesFormSuccess').classList.add('hidden');
        document.getElementById('servicesFormContainer').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Cookie Consent Functions
function showCookieConsent() {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        // Create cookie popup
        const cookiePopup = document.createElement('div');
        cookiePopup.id = 'cookieConsent';
        cookiePopup.className = 'fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-4 border-emerald-700 p-6 z-50 transform transition-transform duration-300';
        cookiePopup.style.transform = 'translateY(100%)';
        
        cookiePopup.innerHTML = `
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div class="flex-1">
                        <div class="flex items-start mb-3">
                            <svg class="w-6 h-6 text-emerald-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div>
                                <h3 class="font-bold text-gray-900 text-lg mb-2">We Value Your Privacy</h3>
                                <p class="text-gray-700 text-sm leading-relaxed">
                                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                                    By clicking "Accept All Cookies", you consent to our use of cookies. 
                                    You can manage your preferences or learn more in our 
                                    <a href="cookies.html" class="text-emerald-700 hover:text-emerald-800 font-semibold underline">Cookie Policy</a> and 
                                    <a href="privacy.html" class="text-emerald-700 hover:text-emerald-800 font-semibold underline">Privacy Policy</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <button onclick="manageCookiePreferences()" class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm whitespace-nowrap">
                            Manage Preferences
                        </button>
                        <button onclick="acceptEssentialOnly()" class="px-6 py-3 border-2 border-emerald-700 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm whitespace-nowrap">
                            Essential Only
                        </button>
                        <button onclick="acceptAllCookies()" class="px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors font-semibold text-sm whitespace-nowrap">
                            Accept All Cookies
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(cookiePopup);
        
        // Show popup with animation
        setTimeout(() => {
            cookiePopup.style.transform = 'translateY(0)';
        }, 500);
    }
}

function acceptAllCookies() {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookiePreferences', JSON.stringify({
        essential: true,
        analytics: true,
        marketing: true
    }));
    hideCookiePopup();
}

function acceptEssentialOnly() {
    localStorage.setItem('cookieConsent', 'essential');
    localStorage.setItem('cookiePreferences', JSON.stringify({
        essential: true,
        analytics: false,
        marketing: false
    }));
    hideCookiePopup();
}

function manageCookiePreferences() {
    const popup = document.getElementById('cookieConsent');
    if (popup) {
        // Create preferences modal
        const modal = document.createElement('div');
        modal.id = 'cookiePreferencesModal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
        
        modal.innerHTML = `
            <div class="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex items-center justify-between">
                        <h2 class="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
                        <button onclick="closePreferencesModal()" class="text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div class="p-6 space-y-6">
                    <p class="text-gray-700">
                        We use different types of cookies to optimize your experience on our website. 
                        You can choose which categories you want to allow.
                    </p>
                    
                    <!-- Essential Cookies -->
                    <div class="border border-gray-200 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="font-semibold text-gray-900">Essential Cookies</h3>
                            <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Always Active</span>
                        </div>
                        <p class="text-sm text-gray-600">
                            These cookies are necessary for the website to function and cannot be disabled. 
                            They are usually set in response to your actions like setting privacy preferences or filling in forms.
                        </p>
                    </div>
                    
                    <!-- Analytics Cookies -->
                    <div class="border border-gray-200 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="font-semibold text-gray-900">Analytics Cookies</h3>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" id="analyticsCookies" class="sr-only peer" checked>
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                        </div>
                        <p class="text-sm text-gray-600">
                            These cookies help us understand how visitors interact with our website, 
                            allowing us to improve our services and user experience.
                        </p>
                    </div>
                    
                    <!-- Marketing Cookies -->
                    <div class="border border-gray-200 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="font-semibold text-gray-900">Marketing Cookies</h3>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" id="marketingCookies" class="sr-only peer" checked>
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                        </div>
                        <p class="text-sm text-gray-600">
                            These cookies are used to deliver advertisements more relevant to you and your interests. 
                            They may also be used to limit the number of times you see an advertisement.
                        </p>
                    </div>
                </div>
                
                <div class="p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                    <button onclick="savePreferences()" class="flex-1 bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors font-semibold">
                        Save Preferences
                    </button>
                    <button onclick="closePreferencesModal()" class="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

function savePreferences() {
    const analytics = document.getElementById('analyticsCookies').checked;
    const marketing = document.getElementById('marketingCookies').checked;
    
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify({
        essential: true,
        analytics: analytics,
        marketing: marketing
    }));
    
    closePreferencesModal();
    hideCookiePopup();
}

function closePreferencesModal() {
    const modal = document.getElementById('cookiePreferencesModal');
    if (modal) {
        modal.remove();
    }
}

function hideCookiePopup() {
    const popup = document.getElementById('cookieConsent');
    if (popup) {
        popup.style.transform = 'translateY(100%)';
        setTimeout(() => {
            popup.remove();
        }, 300);
    }
}