
        // Sample data for dynamic content
        const recentVisits = [
            { title: 'Paris Tour', date: '2023-09-15', image: '/api/placeholder/50/50' },
            { title: 'Bali Beaches', date: '2023-08-22', image: '/api/placeholder/50/50' },
            { title: 'Kyoto Adventure', date: '2023-07-10', image: '/api/placeholder/50/50' },
            { title: 'Swiss Alps', date: '2023-06-05', image: '/api/placeholder/50/50' }
        ];
        
        const galleryImages = [
            '/api/placeholder/150/150',
            '/api/placeholder/150/150',
            '/api/placeholder/150/150',
            '/api/placeholder/150/150',
            '/api/placeholder/150/150',
            '/api/placeholder/150/150'
        ];
        
        const tourPackages = [
            {
                title: 'European Dream',
                duration: '10 Days',
                price: '$1,999',
                description: 'Explore the best of Europe with this comprehensive tour package covering Paris, Rome, and Barcelona.',
                image: '/api/placeholder/300/180'
            },
            {
                title: 'Thailand Paradise',
                duration: '7 Days',
                price: '$1,299',
                description: 'Relax on pristine beaches and experience the vibrant culture of Thailand with this all-inclusive package.',
                image: '/api/placeholder/300/180'
            },
            {
                title: 'Japanese Wonders',
                duration: '12 Days',
                price: '$2,499',
                description: 'Discover the perfect blend of ancient traditions and modern marvels across Japans most iconic cities.',
                image: '/api/placeholder/300/180'
            },
            {
                title: 'Peruvian Adventure',
                duration: '8 Days',
                price: '$1,799',
                description: 'Trek through the majestic Andes mountains and explore the ancient ruins of Machu Picchu.',
                image: '/api/placeholder/300/180'
            },
            {
                title: 'African Safari',
                duration: '9 Days',
                price: '$2,299',
                description: 'Witness the incredible wildlife of Africa with guided safari tours in Kenya and Tanzania.',
                image: '/api/placeholder/300/180'
            },
            {
                title: 'Australian Outback',
                duration: '14 Days',
                price: '$3,099',
                description: 'Experience the diverse landscapes of Australia from the Sydney Opera House to the Great Barrier Reef.',
                image: '/api/placeholder/300/180'
            }
        ];
        
        const events = [
            {
                day: '15',
                month: 'May',
                title: 'Travel Photography Workshop',
                location: 'Online Event'
            },
            {
                day: '22',
                month: 'May',
                title: 'European Adventures Webinar',
                location: 'Zoom Virtual Meeting'
            },
            {
                day: '05',
                month: 'Jun',
                title: 'Southeast Asia Travel Expo',
                location: 'Convention Center'
            },
            {
                day: '18',
                month: 'Jun',
                title: 'Budget Travel Tips & Tricks',
                location: 'Public Library'
            }
        ];
        
        const searchSuggestions = [
            'Paris, France',
            'Bali, Indonesia',
            'Tokyo, Japan',
            'European Dream Package',
            'Thailand Paradise Package',
            'African Safari Package',
            'Travel Photography Workshop',
            'European Adventures Webinar',
            'Budget Travel Tips & Tricks'
        ];
        
        // Populate Recent Visits
        document.addEventListener('DOMContentLoaded', function() {
            const recentVisitsList = document.getElementById('recentVisitsList');
            recentVisits.forEach(visit => {
                recentVisitsList.innerHTML += `
                    <div class="visit-item">
                        <div class="visit-thumb" style="background-image: url('${visit.image}')"></div>
                        <div class="visit-details">
                            <h4>${visit.title}</h4>
                            <p>${visit.date}</p>
                        </div>
                    </div>
                `;
            });
            
            // Populate Photo Gallery
            const photoGallery = document.getElementById('photoGallery');
            galleryImages.forEach(image => {
                photoGallery.innerHTML += `
                    <div class="gallery-item" style="background-image: url('${image}')"></div>
                `;
            });
            
            // Populate Tour Packages
            const packagesGrid = document.getElementById('packagesGrid');
            tourPackages.forEach(pkg => {
                packagesGrid.innerHTML += `
                    <div class="package-card">
                        <div class="package-thumb" style="background-image: url('${pkg.image}')"></div>
                        <div class="package-details">
                            <h3 class="package-title">${pkg.title}</h3>
                            <div class="package-meta">
                                <span><i class="far fa-clock"></i> ${pkg.duration}</span>
                                <span><i class="fas fa-tag"></i> ${pkg.price}</span>
                            </div>
                            <p class="package-desc">${pkg.description}</p>
                            <a href="#" class="book-now">Book Now</a>
                        </div>
                    </div>
                `;
            });
            
            // Populate Events
            const eventsList = document.getElementById('eventsList');
            events.forEach(event => {
                eventsList.innerHTML += `
                    <div class="event-item">
                        <div class="event-date">
                            <span class="day">${event.day}</span>
                            <span class="month">${event.month}</span>
                        </div>
                        <div class="event-info">
                            <h4>${event.title}</h4>
                            <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                        </div>
                    </div>
                `;
            });
            
            // Initialize search autocomplete
            initAutocomplete();
        });
        
        // Settings Dropdown
        function toggleDropdown() {
            document.getElementById("settingsDropdown").classList.toggle("show");
        }
        
        // Close dropdown when clicking outside
        window.onclick = function(event) {
            if (!event.target.matches('.settings-icon') && !event.target.matches('.fa-cog')) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
        
        // Search autocomplete
        function initAutocomplete() {
            const searchInput = document.getElementById("searchInput");
            const autocompleteResults = document.getElementById("autocompleteResults");
            
            searchInput.addEventListener("input", function() {
                const val = this.value;
                autocompleteResults.innerHTML = "";
                
                if (!val) {
                    autocompleteResults.style.display = "none";
                    return;
                }
                
                const filteredSuggestions = searchSuggestions.filter(suggestion => 
                    suggestion.toLowerCase().includes(val.toLowerCase())
                );
                
                if (filteredSuggestions.length > 0) {
                    autocompleteResults.style.display = "block";
                    filteredSuggestions.forEach(suggestion => {
                        const div = document.createElement("div");
                        div.innerHTML = suggestion;
                        div.addEventListener("click", function() {
                            searchInput.value = suggestion;
                            autocompleteResults.style.display = "none";
                        });
                        autocompleteResults.appendChild(div);
                    });
                } else {
                    autocompleteResults.style.display = "none";
                }
            });
            
            document.addEventListener("click", function(e) {
                if (e.target !== searchInput) {
                    autocompleteResults.style.display = "none";
                }
            });
        }
