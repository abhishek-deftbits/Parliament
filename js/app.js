// Alpine.js Application Logic for Member of Parliament Multi-Page Portal

document.addEventListener('alpine:init', () => {
    Alpine.data('parliamentApp', () => ({
        lang: localStorage.getItem('mp_lang') || 'ne',
        theme: localStorage.getItem('mp_theme') || 'light',
        mobileMenu: false,
        
        // Data references from js/data.js
        profile: MP_DATA.profile,
        stats: MP_DATA.stats,
        pledges: MP_DATA.pledges,
        activePledgeIndex: 0,
        tickerNews: MP_DATA.tickerNews,
        priorities: MP_DATA.priorities,
        journey: MP_DATA.journey,
        projects: MP_DATA.projects,
        mediaItems: MP_DATA.mediaItems,
        galleryItems: MP_DATA.galleryItems,

        // Filters & Search
        activeMediaTab: 'all',
        mediaSearchQuery: '',
        activeGalleryTab: 'all',
        activeProjectTab: 'all',
        projectSearchQuery: '',

        // Video Lightbox Modal
        videoModal: {
            isOpen: false,
            youtubeId: '',
            title: '',
            category: ''
        },

        // Gallery Lightbox Modal
        galleryModal: {
            isOpen: false,
            currentIndex: 0,
            activeList: []
        },

        // Grievance / Janagunaso System
        gunaso: {
            form: {
                name: '',
                phone: '',
                email: '',
                municipality: 'Ilam Municipality',
                ward: '1',
                category: 'Infrastructure & Roads',
                description: '',
                isUrgent: false
            },
            submitted: false,
            ticketId: '',
            trackingInput: '',
            trackResult: null,
            isTracking: false,
            submittedTickets: JSON.parse(localStorage.getItem('mp_gunaso_tickets') || '[]')
        },

        // Appointment Booking Modal
        appointmentModal: {
            isOpen: false,
            name: '',
            phone: '',
            email: '',
            location: 'Constituency Office (Ilam)',
            date: '',
            purpose: '',
            submitted: false
        },

        // Live Nepali / English Date
        currentDateNe: '',
        currentDateEn: '',

        async init() {
            await this.loadComponents();
            this.updateDates();
            this.applyTheme(this.theme);
            this.setupScrollReveal();
            
            // Re-render date every minute
            setInterval(() => this.updateDates(), 60000);

            // Handle keyboard navigation for gallery lightbox & modals
            window.addEventListener('keydown', (e) => {
                if (this.galleryModal.isOpen) {
                    if (e.key === 'ArrowRight') this.nextGalleryImage();
                    if (e.key === 'ArrowLeft') this.prevGalleryImage();
                    if (e.key === 'Escape') this.closeGalleryModal();
                }
                if (this.videoModal.isOpen && e.key === 'Escape') {
                    this.closeVideoModal();
                }
                if (this.appointmentModal.isOpen && e.key === 'Escape') {
                    this.appointmentModal.isOpen = false;
                }
            });
        },

        async loadComponents() {
            const headerEl = document.getElementById('site-header');
            const footerEl = document.getElementById('site-footer');
            const promises = [];

            if (headerEl && !headerEl.dataset.loaded) {
                promises.push(
                    fetch('header.html')
                        .then(r => r.text())
                        .then(html => {
                            headerEl.innerHTML = html;
                            headerEl.dataset.loaded = 'true';
                            if (window.Alpine) {
                                Alpine.nextTick(() => Alpine.initTree(headerEl));
                            }
                        })
                        .catch(err => console.error('Error loading header.html:', err))
                );
            }

            if (footerEl && !footerEl.dataset.loaded) {
                promises.push(
                    fetch('footer.html')
                        .then(r => r.text())
                        .then(html => {
                            footerEl.innerHTML = html;
                            footerEl.dataset.loaded = 'true';
                            if (window.Alpine) {
                                Alpine.nextTick(() => Alpine.initTree(footerEl));
                            }
                        })
                        .catch(err => console.error('Error loading footer.html:', err))
                );
            }

            if (promises.length > 0) {
                await Promise.all(promises);
            }
        },

        setupScrollReveal() {
            const initObserver = () => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            
                            // Animate number counters if stat card
                            if (entry.target.classList.contains('stat-card')) {
                                const numEl = entry.target.querySelector('.stat-number span:first-child');
                                if (numEl && !numEl.dataset.counted) {
                                    numEl.dataset.counted = 'true';
                                    const targetVal = parseInt(numEl.innerText) || 0;
                                    let current = 0;
                                    const increment = Math.max(1, Math.ceil(targetVal / 35));
                                    const timer = setInterval(() => {
                                        current += increment;
                                        if (current >= targetVal) {
                                            numEl.innerText = targetVal;
                                            clearInterval(timer);
                                        } else {
                                            numEl.innerText = current;
                                        }
                                    }, 25);
                                }
                            }
                        }
                    });
                }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

                // Select every major component across pages
                const selectors = [
                    '.section-header',
                    '.hero-content',
                    '.hero-portrait-card',
                    '.stat-card',
                    '.service-card',
                    '.priority-card',
                    '.pledge-banner-section',
                    '.project-card',
                    '.media-card',
                    '.gallery-item',
                    '.c-fact-card',
                    '.constituency-map-frame',
                    '.contact-card',
                    '.timeline-item',
                    '.gunaso-wrapper',
                    '.about-portrait-frame',
                    '.about-text-content',
                    '.filter-tabs',
                    '.footer-grid > *'
                ];

                document.querySelectorAll(selectors.join(', ')).forEach((el, index) => {
                    if (!el.classList.contains('scroll-reveal') && !el.classList.contains('scroll-reveal-left') && !el.classList.contains('scroll-reveal-right')) {
                        el.classList.add('scroll-reveal');
                    }
                    // Assign stagger to siblings inside grids
                    if (el.parentElement && (el.parentElement.classList.contains('projects-grid') || 
                                             el.parentElement.classList.contains('media-grid') || 
                                             el.parentElement.classList.contains('gallery-grid') || 
                                             el.parentElement.classList.contains('priorities-grid') || 
                                             el.parentElement.classList.contains('stats-grid') || 
                                             el.parentElement.classList.contains('services-grid') ||
                                             el.parentElement.classList.contains('constituency-facts-grid'))) {
                        const siblingIndex = Array.from(el.parentElement.children).indexOf(el);
                        el.classList.add(`stagger-${(siblingIndex % 6) + 1}`);
                    }
                    observer.observe(el);
                });
            };

            // Run on load and after DOM settles
            setTimeout(initObserver, 80);
            setTimeout(initObserver, 300);

            // Observe dynamic changes (e.g. Alpine template renders & tab filtering)
            const mutationObserver = new MutationObserver(() => {
                setTimeout(initObserver, 50);
            });
            mutationObserver.observe(document.body, { childList: true, subtree: true });
        },

        // Language toggle
        setLanguage(newLang) {
            this.lang = newLang;
            localStorage.setItem('mp_lang', newLang);
            document.documentElement.lang = newLang;
        },

        // Theme toggle
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('mp_theme', this.theme);
            this.applyTheme(this.theme);
        },

        applyTheme(theme) {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },

        // Date Calculation (Gregorian + Bikram Sambat)
        updateDates() {
            const now = new Date();
            const optionsEn = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            this.currentDateEn = now.toLocaleDateString('en-US', optionsEn);

            const bsYear = '२०८२';
            const nepaliDays = ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार'];
            const dayName = nepaliDays[now.getDay()];
            
            this.currentDateNe = `वि.सं. ${bsYear} • ${dayName}`;
        },

        // Filtered Media
        get filteredMedia() {
            let list = this.mediaItems;
            if (this.activeMediaTab !== 'all') {
                list = list.filter(item => item.type === this.activeMediaTab);
            }
            if (this.mediaSearchQuery.trim()) {
                const q = this.mediaSearchQuery.toLowerCase();
                list = list.filter(item => 
                    item.titleEn.toLowerCase().includes(q) || 
                    item.titleNe.toLowerCase().includes(q) ||
                    item.summaryEn.toLowerCase().includes(q) ||
                    item.summaryNe.toLowerCase().includes(q)
                );
            }
            return list;
        },

        // Filtered Gallery
        get filteredGallery() {
            if (this.activeGalleryTab === 'all') return this.galleryItems;
            return this.galleryItems.filter(item => item.category === this.activeGalleryTab);
        },

        // Filtered Projects
        get filteredProjects() {
            let list = this.projects;
            if (this.activeProjectTab !== 'all') {
                list = list.filter(item => item.category === this.activeProjectTab);
            }
            if (this.projectSearchQuery.trim()) {
                const q = this.projectSearchQuery.toLowerCase();
                list = list.filter(item => 
                    item.titleEn.toLowerCase().includes(q) || 
                    item.titleNe.toLowerCase().includes(q) ||
                    item.locationEn.toLowerCase().includes(q) ||
                    item.locationNe.toLowerCase().includes(q)
                );
            }
            return list;
        },

        // Video Lightbox Actions
        openVideoModal(item) {
            this.videoModal.youtubeId = item.youtubeId;
            this.videoModal.title = this.lang === 'ne' ? item.titleNe : item.titleEn;
            this.videoModal.category = this.lang === 'ne' ? item.categoryNe : item.categoryEn;
            this.videoModal.isOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeVideoModal() {
            this.videoModal.isOpen = false;
            this.videoModal.youtubeId = '';
            document.body.style.overflow = '';
        },

        // Gallery Lightbox Actions
        openGalleryModal(index) {
            this.galleryModal.activeList = this.filteredGallery;
            this.galleryModal.currentIndex = index;
            this.galleryModal.isOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeGalleryModal() {
            this.galleryModal.isOpen = false;
            document.body.style.overflow = '';
        },

        nextGalleryImage() {
            if (this.galleryModal.currentIndex < this.galleryModal.activeList.length - 1) {
                this.galleryModal.currentIndex++;
            } else {
                this.galleryModal.currentIndex = 0;
            }
        },

        prevGalleryImage() {
            if (this.galleryModal.currentIndex > 0) {
                this.galleryModal.currentIndex--;
            } else {
                this.galleryModal.currentIndex = this.galleryModal.activeList.length - 1;
            }
        },

        // Grievance / Janagunaso Submission
        submitGunasoForm() {
            const randomCode = 'ILM-' + Math.floor(100000 + Math.random() * 900000);
            this.gunaso.ticketId = randomCode;

            const newTicket = {
                ticketId: randomCode,
                name: this.gunaso.form.name,
                phone: this.gunaso.form.phone,
                email: this.gunaso.form.email,
                municipality: this.gunaso.form.municipality,
                ward: this.gunaso.form.ward,
                category: this.gunaso.form.category,
                description: this.gunaso.form.description,
                isUrgent: this.gunaso.form.isUrgent,
                status: 'Under Official Review',
                statusNe: 'कार्यालयमा दर्ता / प्रक्रियाधीन',
                assignedOfficer: 'Constituency Liaison Officer, Ilam',
                assignedOfficerNe: 'संसदीय सम्पर्क अधिकृत, इलाम',
                submittedDate: new Date().toLocaleDateString('en-CA'),
                estimatedResolution: 'Within 7 working days'
            };

            this.gunaso.submittedTickets.unshift(newTicket);
            localStorage.setItem('mp_gunaso_tickets', JSON.stringify(this.gunaso.submittedTickets));
            this.gunaso.submitted = true;
        },

        resetGunasoForm() {
            this.gunaso.submitted = false;
            this.gunaso.ticketId = '';
            this.gunaso.form = {
                name: '',
                phone: '',
                email: '',
                municipality: 'Ilam Municipality',
                ward: '1',
                category: 'Infrastructure & Roads',
                description: '',
                isUrgent: false
            };
        },

        trackGunasoStatus() {
            if (!this.gunaso.trackingInput.trim()) return;
            const searchId = this.gunaso.trackingInput.trim().toUpperCase();
            this.gunaso.isTracking = true;

            setTimeout(() => {
                const found = this.gunaso.submittedTickets.find(t => t.ticketId === searchId);
                if (found) {
                    this.gunaso.trackResult = found;
                } else if (searchId.startsWith('ILM-')) {
                    this.gunaso.trackResult = {
                        ticketId: searchId,
                        name: 'Verified Constituent',
                        category: 'Public Works & Infrastructure',
                        municipality: 'Ilam Constituency 1',
                        ward: 'Ward No. 3',
                        status: 'In Progress (Forwarded to Department)',
                        statusNe: 'सम्बन्धित मन्त्रालय / निकायमा सिफारिस गरिएको',
                        assignedOfficer: 'Public Grievance Desk, Federal Parliament',
                        assignedOfficerNe: 'जनगुनासो शाखा, संघीय संसद',
                        submittedDate: '2026-08-20',
                        estimatedResolution: '3-5 Working Days'
                    };
                } else {
                    this.gunaso.trackResult = 'NOT_FOUND';
                }
                this.gunaso.isTracking = false;
            }, 400);
        },

        // Appointment form
        submitAppointment() {
            this.appointmentModal.submitted = true;
            setTimeout(() => {
                this.appointmentModal.isOpen = false;
                this.appointmentModal.submitted = false;
                alert(this.lang === 'ne' 
                    ? 'तपाईंको भेटघाट अनुरोध दर्ता भएको छ। सचिवालयबाट छिट्टै सम्पर्क गरिनेछ।' 
                    : 'Your appointment request has been submitted. The secretariat will contact you shortly.');
            }, 1000);
        }
    }));
});
