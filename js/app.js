// Alpine.js Application Logic & Modular Component Engine

document.addEventListener('alpine:init', () => {
    // Custom Alpine Directive for Modular HTML Component Loading
    Alpine.directive('component', (el, { expression }) => {
        const compName = expression.replace(/['"]/g, '').trim();
        const url = `components/${compName}.html`;

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`Failed to load component: ${url} (HTTP ${res.status})`);
                return res.text();
            })
            .then(html => {
                // Replace or populate container
                el.innerHTML = html;
                // Initialize Alpine reactive bindings in the newly inserted component DOM tree
                Alpine.initTree(el);
            })
            .catch(err => {
                console.error(`Component load error [${compName}]:`, err);
            });
    });

    // Root Alpine Data Model
    Alpine.data('parliamentApp', () => ({
        lang: localStorage.getItem('mp_lang') || 'ne',
        theme: localStorage.getItem('mp_theme') || 'light',
        mobileMenu: false,
        
        // Data references from js/data.js
        profile: MP_DATA.profile,
        stats: MP_DATA.stats,
        tickerNews: MP_DATA.tickerNews,
        priorities: MP_DATA.priorities,
        journey: MP_DATA.journey,
        projects: MP_DATA.projects,
        mediaItems: MP_DATA.mediaItems,
        galleryItems: MP_DATA.galleryItems,

        // Filters
        activeMediaTab: 'all',
        activeGalleryTab: 'all',
        activeProjectTab: 'all',

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

        init() {
            this.updateDates();
            this.applyTheme(this.theme);
            
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

        // Date Calculation (Gregorian + Bikram Sambat approximations)
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
            if (this.activeMediaTab === 'all') return this.mediaItems;
            return this.mediaItems.filter(item => item.type === this.activeMediaTab);
        },

        // Filtered Gallery
        get filteredGallery() {
            if (this.activeGalleryTab === 'all') return this.galleryItems;
            return this.galleryItems.filter(item => item.category === this.activeGalleryTab);
        },

        // Filtered Projects
        get filteredProjects() {
            if (this.activeProjectTab === 'all') return this.projects;
            return this.projects.filter(item => item.category === this.activeProjectTab);
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
