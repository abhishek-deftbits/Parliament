// Data file for Member of Parliament Website
// Easily customizable data for profile, activities, projects, gallery, and translations

const MP_DATA = {
    profile: {
        nameEn: "Nishcal Rai",
        nameNe: "निश्कल राई",
        roleEn: "Member of Parliament (House of Representatives)",
        roleNe: "प्रतिनिधि सभा सदस्य",
        constituencyEn: "Ilam Constituency No. 1",
        constituencyNe: "इलाम निर्वाचन क्षेत्र नं. १",
        provinceEn: "Koshi Province, Nepal",
        provinceNe: "कोशी प्रदेश, नेपाल",
        partyEn: "Nepali Congress",
        partyNe: "नेपाली कांग्रेस",
        taglineEn: "Voice of Integrity, Action for Progress",
        taglineNe: "बौद्धिक नेतृत्व, बलियो उपस्थिति र इमानदार सेवा",
        bioEn: "Dedicated to transparent legislative governance, sustainable regional development, quality youth education, and agricultural transformation for the proud people of Ilam-1.",
        bioNe: "इलाम–१ का जनताको सुखदुःखमा समर्पित, संसद्मा सशक्त आवाज, नीति निर्माण र विकास आयोजनाहरूमा पारदर्शी एवं नतिजामुखी नेतृत्व।",
        photoUrl: "https://nishcalrai.com.np/wp-content/uploads/2026/01/Nishcal-Rai-WEb-edited.jpeg",
        emblemUrl: "https://hr.parliament.gov.np/uploads/images/1775207721.png",
        partyLogoUrl: "https://nepalicongress.org/logo.svg",
        phone: "+977-27-520111 / +977-9851000000",
        email: "contact@nishcalrai.com.np",
        centralOffice: "Federal Parliament Building, Singha Durbar / New Baneshwor, Kathmandu",
        constituencyOffice: "Constituency Liaison Office, Ilam Bazaar, Koshi Province, Nepal",
        officeHoursEn: "Sunday – Friday: 9:30 AM – 5:30 PM",
        officeHoursNe: "आइतबार – शुक्रबार: बिहान ९:३० देखि साँझ ५:३० सम्म"
    },

    stats: [
        { id: "sessions", count: 68, suffix: "+", labelEn: "Parliament Sessions Attended", labelNe: "संसद बैठक उपस्थिति", icon: "fa-landmark" },
        { id: "issues", count: 142, suffix: "+", labelEn: "Constituency Issues Raised", labelNe: "उठाइएका जनसरोकारका मुद्दा", icon: "fa-bullhorn" },
        { id: "projects", count: 26, suffix: "", labelEn: "Development Projects Facilitated", labelNe: "विकास आयोजनाहरू", icon: "fa-diagram-project" },
        { id: "gunaso", count: 850, suffix: "+", labelEn: "Citizen Inquiries Addressed", labelNe: "समाधान गरिएका जनगुनासो", icon: "fa-clipboard-check" }
    ],

    tickerNews: [
        {
            titleEn: "Hon. Nishcal Rai tables special motion for Minimum Support Price and organic subsidy for Ilam tea & cardamom farmers.",
            titleNe: "माननीय निश्कल राईद्वारा इलामका चिया तथा अलैंची किसानका लागि समर्थन मूल्य र अर्गानिक अनुदान सम्बन्धी विशेष प्रस्ताव संसदमा पेस।",
            date: "2026-08-30",
            category: "Parliament"
        },
        {
            titleEn: "Budget allocation finalized for Mai Pokhari - Sandakpur eco-corridor upgrade & agricultural link road.",
            titleNe: "माई पोखरी - सन्दकपुर पर्यटकीय मार्ग तथा कृषि लिंक रोड स्तरोन्नतिका लागि बजेट सुनिश्चित।",
            date: "2026-08-25",
            category: "Development"
        },
        {
            titleEn: "Digital Citizen Grievance (Janagunaso 2.0) portal now live with SMS tracking for all Ilam-1 residents.",
            titleNe: "इलाम–१ का नागरिकहरूका लागि अनलाइन जनगुनासो २.० पोर्टल तथा एसएमएस ट्र्याकिङ सेवा सुरु।",
            date: "2026-08-20",
            category: "Service"
        },
        {
            titleEn: "Joint parliamentary oversight committee inspects Ilam district hospital upgrade works and medical equipment supply.",
            titleNe: "इलाम जिल्ला अस्पतालको स्तरोन्नति र आधुनिक उपकरण व्यवस्थापन सम्बन्धी संसदीय स्थलगत अनुगमन।",
            date: "2026-08-15",
            category: "Inspection"
        }
    ],

    priorities: [
        {
            icon: "fa-seedling",
            color: "emerald",
            titleEn: "Agricultural Transformation",
            titleNe: "कृषि रूपान्तरण र किसान समृद्धि",
            descEn: "Commercializing orthodox tea, high-grade cardamom, ginger, and dairy farming through cold chains, fair minimum prices, and direct export facilitation.",
            descNe: "इलामको प्रसिद्ध अर्थोडक्स चिया, अलैंची, अदुवा र दुग्ध उत्पादनको प्रशोधन, शीतभण्डार, बजार पहुँच र उचित मूल्यको ग्यारेन्टी।"
        },
        {
            icon: "fa-road",
            color: "amber",
            titleEn: "Quality Infrastructure",
            titleNe: "गुणस्तरीय सडक र पूर्वाधार",
            descEn: "Upgrading feeder roads connecting remote rural wards to highways, disaster-resilient bridge networks, clean drinking water, and dependable grid electricity.",
            descNe: "सन्दकपुरदेखि माईसम्मका ग्रामीण सडकको कालोपत्रे, दिगो पुल निर्माण, एक घर एक धारा शुद्ध खानेपानी र भरपर्दो विद्युत विस्तार।"
        },
        {
            icon: "fa-graduation-cap",
            color: "blue",
            titleEn: "Modern Education & Tech Skills",
            titleNe: "गुणस्तरीय शिक्षा र प्राविधिक सीप",
            descEn: "Equipping community schools with digital learning labs, practical vocational technical training, and youth coding/entrepreneurship bootcamps.",
            descNe: "सामुदायिक विद्यालयमा डिजिटल ल्याब, प्राविधिक तथा व्यावसायिक तालिम र युवा उद्यमशीलताका लागि आधुनिक सीप विकास।"
        },
        {
            icon: "fa-mountain-sun",
            color: "teal",
            titleEn: "Eco-Tourism & Heritage",
            titleNe: "पर्या-पर्यटन र साँस्कृतिक सम्पदा",
            descEn: "Promoting Sandakpur, Kanyam, Mai Pokhari Ramsar site, and preserving indigenous Kirat, Limbu, and Rai culture and languages.",
            descNe: "सन्दकपुर, कन्याम, माई पोखरी रामसार क्षेत्रको दिगो पर्यटन विकास तथा किरात, लिम्बू र राई मौलिक भाषा-संस्कृतिको संरक्षण।"
        },
        {
            icon: "fa-hand-holding-heart",
            color: "rose",
            titleEn: "Accessible Healthcare",
            titleNe: "सुलभ र गुणस्तरीय स्वास्थ्य",
            descEn: "Strengthening primary health posts in every municipality, 24/7 emergency response, maternal healthcare, and specialist telemedicine.",
            descNe: "प्रत्येक स्थानीय तहमा आधारभूत अस्पतालको सबलीकरण, चौबिसै घण्टा आकस्मिक सेवा, सुलभ औषधि र विशेषज्ञ टेलिमेडिसिन सेवा।"
        },
        {
            icon: "fa-scale-balanced",
            color: "indigo",
            titleEn: "Accountable Good Governance",
            titleNe: "पारदर्शी शासन र जनउत्तरदायित्व",
            descEn: "Zero-tolerance for corruption, transparent allocation of parliamentary development partnership funds, and direct citizen feedback loops.",
            descNe: "भ्रष्टाचारमुक्त प्रशासन, संसदीय कोषको पारदर्शी उपयोग, नियमित सार्वजनिक सुनुवाइ र नागरिक गुनासोको तत्काल सम्बोधन।"
        }
    ],

    journey: [
        {
            yearEn: "Student & Grassroots Movement",
            yearNe: "विद्यार्थी राजनीति र सामाजिक आन्दोलन",
            titleEn: "Democratic Activism & Youth Leadership",
            titleNe: "प्रजातान्त्रिक आन्दोलन र युवा नेतृत्व",
            descEn: "Active involvement in student movements advocating for constitutional democracy, educational access, and youth participation in governance.",
            descNe: "विद्यार्थी संगठनमार्फत लोकतन्त्रको पुनर्स्थापना, शैक्षिक सुधार र युवा सशक्तीकरणमा सक्रिय सहभागिता र नेतृत्व।"
        },
        {
            yearEn: "Party Leadership & Policy Formation",
            yearNe: "पार्टी जिम्मेवारी र नीति निर्माण",
            titleEn: "Organizational Strengthening in Koshi",
            titleNe: "संगठन विस्तार र नीतिगत अध्ययन",
            descEn: "Traveled across all districts of eastern Nepal, researching grassroots agricultural bottlenecks and mobilizing developmental planning frameworks.",
            descNe: "पूर्वी नेपालका गाउँगाउँ पुगेर किसान र श्रमिकका समस्या संकलन, पार्टीको नीति तथा स्थानीय विकास रणनीति निर्माणमा योगदान।"
        },
        {
            yearEn: "2079 BS (2022 AD) General Election",
            yearNe: "२०७९ आम निर्वाचन",
            titleEn: "Elected to House of Representatives",
            titleNe: "प्रतिनिधि सभा सदस्यमा निर्वाचित",
            descEn: "Mandated by the valued citizens of Ilam Constituency No. 1 to champion their voice, regional pride, and economic empowerment in the Federal Parliament.",
            descNe: "इलाम निर्वाचन क्षेत्र नं. १ का आदरणीय मतदाताहरूको अपार विश्वासका साथ प्रतिनिधि सभा सदस्यमा निर्वाचित।"
        },
        {
            yearEn: "Present Term (2023 - 2026+)",
            yearNe: "वर्तमान कार्यकाल",
            titleEn: "Legislative Reform & Constituency Impact",
            titleNe: "संसदीय भूमिका र रूपान्तरणकारी विकास",
            descEn: "Proactively authoring legislative amendments, participating in House Standing Committees, and securing pivotal state infrastructure grants for Ilam.",
            descNe: "संसदमा प्रभावकारी बहस, कानुन निर्माणमा सक्रिय सहभागिता, र इलामका लागि रणनीतिक पूर्वाधार आयोजनाहरूको निरन्तर सहजीकरण।"
        }
    ],

    projects: [
        {
            id: 1,
            titleEn: "Ilam - Sandakpur Scenic Highway Upgrade",
            titleNe: "इलाम - सन्दकपुर पर्यटकीय सडक स्तरोन्नति",
            category: "infrastructure",
            categoryEn: "Infrastructure",
            categoryNe: "पूर्वाधार",
            locationEn: "Sandakpur Rural Municipality",
            locationNe: "सन्दकपुर गाउँपालिका",
            budgetEn: "NPR 18.5 Crore",
            budgetNe: "रु १८.५ करोड",
            progress: 78,
            status: "In Progress",
            statusEn: "In Progress",
            statusNe: "निर्माणाधीन",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            titleEn: "High-Altitude Orthodox Tea Processing & Packaging Hub",
            titleNe: "उच्च हिमाली अर्थोडक्स चिया प्रशोधन तथा प्याकेजिङ केन्द्र",
            category: "agriculture",
            categoryEn: "Agriculture",
            categoryNe: "कृषि",
            locationEn: "Maijogmai & Suryodaya",
            locationNe: "माइजोगमाई र सूर्योदय",
            budgetEn: "NPR 9.2 Crore",
            budgetNe: "रु ९.२ करोड",
            progress: 92,
            status: "Near Completion",
            statusEn: "Near Completion",
            statusNe: "अन्तिम चरण",
            image: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            titleEn: "Mai Pokhari Ramsar Wetland Conservation & Visitor Center",
            titleNe: "माई पोखरी रामसार जैविक विविधता संरक्षण तथा सूचना केन्द्र",
            category: "tourism",
            categoryEn: "Tourism & Environment",
            categoryNe: "पर्यटन तथा वातावरण",
            locationEn: "Mai Pokhari",
            locationNe: "माई पोखरी",
            budgetEn: "NPR 4.8 Crore",
            budgetNe: "रु ४.८ करोड",
            progress: 100,
            status: "Completed",
            statusEn: "Completed",
            statusNe: "सम्पन्न",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            titleEn: "Community Digital Classrooms & STEM Labs (18 Schools)",
            titleNe: "सामुदायिक विद्यालय डिजिटल कक्षाकोठा तथा विज्ञान प्रयोगशाला (१८ विद्यालय)",
            category: "education",
            categoryEn: "Education",
            categoryNe: "शिक्षा",
            locationEn: "Across Constituency 1",
            locationNe: "इलाम–१ का सबै पालिका",
            budgetEn: "NPR 6.4 Crore",
            budgetNe: "रु ६.४ करोड",
            progress: 85,
            status: "In Progress",
            statusEn: "In Progress",
            statusNe: "निर्माणाधीन",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            titleEn: "Primary Healthcare & Dialysis Center Expansion",
            titleNe: "प्राथमिक स्वास्थ्य केन्द्र तथा डायलायसिस सेवा विस्तार",
            category: "health",
            categoryEn: "Health",
            categoryNe: "स्वास्थ्य",
            locationEn: "Ilam Central Hospital",
            locationNe: "इलाम अस्पताल",
            budgetEn: "NPR 7.1 Crore",
            budgetNe: "रु ७.१ करोड",
            progress: 100,
            status: "Completed",
            statusEn: "Completed",
            statusNe: "सम्पन्न",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            titleEn: "Solar-Powered Lift Drinking Water Scheme",
            titleNe: "सौर्य ऊर्जा सञ्चालित लिफ्ट खानेपानी आयोजना",
            category: "infrastructure",
            categoryEn: "Infrastructure",
            categoryNe: "पूर्वाधार",
            locationEn: "Mai Municipality Ward 4 & 5",
            locationNe: "माई नगरपालिका वडा ४ र ५",
            budgetEn: "NPR 5.5 Crore",
            budgetNe: "रु ५.५ करोड",
            progress: 65,
            status: "In Progress",
            statusEn: "In Progress",
            statusNe: "निर्माणाधीन",
            image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80"
        }
    ],

    mediaItems: [
        {
            id: "m1",
            type: "speech",
            categoryEn: "Parliament Speech",
            categoryNe: "संसदीय सम्बोधन",
            titleEn: "House of Representatives Session: National Budget Allocation & Agricultural Subsidies",
            titleNe: "प्रतिनिधि सभा बैठक: राष्ट्रिय बजेट विनियोजन र चिया किसानको अनुदान सम्बन्धी बहस",
            dateEn: "March 28, 2026",
            dateNe: "चैत १५, २०८२",
            youtubeId: "1gHmfDKys2U",
            thumbnail: "https://img.youtube.com/vi/1gHmfDKys2U/hqdefault.jpg",
            summaryEn: "Demanded swift government intervention on fertilizers, price indexing for cardamom, and special export rebates for tea producers.",
            summaryNe: "मलखाद आपूर्ति, अलैंचीको उचित मूल्य र नेपाली चिया निर्यातमा भन्सार सहजीकरण बारे सरकारको ध्यानाकर्षण।"
        },
        {
            id: "m2",
            type: "media",
            categoryEn: "National TV Interview",
            categoryNe: "टेलिभिजन अन्तरवार्ता",
            titleEn: "Prime Time Discussion: Good Governance, Federalism & Youth Retention in Nepal",
            titleNe: "विशेष बहस: सुशासन, संघीयताको प्रभावकारिता र युवा जनशक्ति पलायन रोक्ने उपाय",
            dateEn: "March 22, 2026",
            dateNe: "चैत ९, २०८२",
            youtubeId: "Vuqo5dyT1p0",
            thumbnail: "https://img.youtube.com/vi/Vuqo5dyT1p0/hqdefault.jpg",
            summaryEn: "Insightful interview on policy-driven job creation, IT potential in hill regions, and legislative integrity.",
            summaryNe: "नीतिगत सुधारमार्फत रोजगारी सिर्जना, पहाडी भेगमा आईटी र कृषि पर्यटनको सम्भावनाबारे गहन छलफल।"
        },
        {
            id: "m3",
            type: "speech",
            categoryEn: "Parliament Speech",
            categoryNe: "संसदीय सम्बोधन",
            titleEn: "Zero Hour Session: Emergency Flood Protection & Road Connectivity in Ilam",
            titleNe: "शून्य समय: इलामका बाढी पहिरो पीडितलाई राहत र सडक मर्मत सम्बन्धी विशेष ध्यानाकर्षण",
            dateEn: "March 17, 2026",
            dateNe: "चैत ४, २०८२",
            youtubeId: "aHoslHM5vMc",
            thumbnail: "https://img.youtube.com/vi/aHoslHM5vMc/hqdefault.jpg",
            summaryEn: "Urged immediate disaster response fund mobilization for damaged bridge networks and affected farmer families.",
            summaryNe: "क्षतिग्रस्त सडक तथा पुलको तत्काल पुनर्निर्माण र प्रभावित परिवारलाई राहत उपलब्ध गराउन सरकारसँग माग।"
        },
        {
            id: "m4",
            type: "media",
            categoryEn: "Policy Debate",
            categoryNe: "नीतिगत बहस",
            titleEn: "Parliamentary Standing Committee: Quality Standards in Infrastructure Contracts",
            titleNe: "संसदीय समिति बैठक: पूर्वाधार ठेक्का व्यवस्थापन र समयमै काम सम्पन्न गर्ने मापदण्ड",
            dateEn: "March 09, 2026",
            dateNe: "फागुन २६, २०८२",
            youtubeId: "aoCs8uRNJuw",
            thumbnail: "https://img.youtube.com/vi/aoCs8uRNJuw/hqdefault.jpg",
            summaryEn: "Strict review of delayed public contracts and holding contractors accountable to public safety and timeline.",
            summaryNe: "अलपत्र परेका विकास आयोजनाहरूमा ठेकेदारको जवाफदेहिता र गुणस्तर अनुगमन सम्बन्धी कडा निर्देशन।"
        },
        {
            id: "m5",
            type: "speech",
            categoryEn: "Parliament Speech",
            categoryNe: "संसदीय सम्बोधन",
            titleEn: "Debate on Industrial Policy: Protecting Domestic Producers & Organic Certifications",
            titleNe: "औद्योगिक नीति छलफल: स्वदेशी उत्पादन प्रवर्धन र अर्गानिक प्रमाणीकरण",
            dateEn: "February 20, 2026",
            dateNe: "फागुन ८, २०८२",
            youtubeId: "2GERSlNvQ0c",
            thumbnail: "https://img.youtube.com/vi/2GERSlNvQ0c/hqdefault.jpg",
            summaryEn: "Advocating international branding and laboratory certification for Himalayan organic products.",
            summaryNe: "नेपाली उत्पादनको अन्तर्राष्ट्रिय ब्रान्डिङ र गुणस्तर प्रयोगशाला स्थापनाको माग।"
        },
        {
            id: "m6",
            type: "media",
            categoryEn: "Press Interview",
            categoryNe: "प्रेस वार्ता",
            titleEn: "The Kathmandu Post / Kantipur Special: 'Youth Must Lead Institutional Policy'",
            titleNe: "विशेष कुराकानी: 'नीति निर्माण र राज्य सञ्चालनमा युवाको निर्णायक उपस्थिति हुनुपर्छ'",
            dateEn: "February 12, 2026",
            dateNe: "माघ २९, २०८२",
            youtubeId: "nOcJguLlHHc",
            thumbnail: "https://img.youtube.com/vi/nOcJguLlHHc/hqdefault.jpg",
            summaryEn: "Feature discussion on modernizing parliamentary legislative drafting and digital governance standards.",
            summaryNe: "संसदीय कार्यप्रणालीको डिजिटलाइजेसन र कानुन निर्माण प्रक्रियालाई जनसहभागितामूलक बनाउने दृष्टिकोण।"
        }
    ],

    galleryItems: [
        {
            id: "g1",
            category: "parliament",
            categoryEn: "Parliament & Legislation",
            categoryNe: "संसदीय गतिविधि",
            titleEn: "Delivering Address at the House of Representatives Session",
            titleNe: "प्रतिनिधि सभाको बैठकमा विशेष सम्बोधन गर्दै",
            captionEn: "Presenting policy reforms during the national legislative debate at Federal Parliament.",
            captionNe: "संघीय संसदमा नीतिगत सुधार र जनताका पक्षमा आफ्नो विचार राख्दै।",
            image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=85",
            thumb: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: "g2",
            category: "constituency",
            categoryEn: "Constituency & People",
            categoryNe: "जनतासँग भेटघाट",
            titleEn: "Community Town Hall with Local Farmers in Ilam",
            titleNe: "इलामका किसानहरूसँग प्रत्यक्ष अन्तरक्रिया तथा संवाद",
            captionEn: "Listening to the concerns of organic tea cultivators and local cooperatives.",
            captionNe: "चिया किसान, सहकारी सञ्चालक तथा स्थानीय बासिन्दाका समस्या सुन्दै र समाधानको पहल गर्दै।",
            image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=85",
            thumb: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: "g3",
            category: "development",
            categoryEn: "Development Inspection",
            categoryNe: "विकास आयोजना अनुगमन",
            titleEn: "Field Inspection of Sandakpur Road Construction",
            titleNe: "सन्दकपुर सडक आयोजनाको स्थलगत अनुगमन",
            captionEn: "Inspecting engineering standards, drainage systems, and environmental compliance.",
            captionNe: "सडक निर्माणको गुणस्तर, नाला व्यवस्थापन र समय तालिकाको प्रत्यक्ष निरीक्षण।",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
            thumb: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: "g4",
            category: "youth",
            categoryEn: "Youth & Education",
            categoryNe: "शिक्षा तथा युवा",
            titleEn: "Inauguration of Smart IT Lab in Community Secondary School",
            titleNe: "सामुदायिक माध्यमिक विद्यालयमा स्मार्ट कम्प्युटर ल्याब उद्घाटन",
            captionEn: "Empowering 500+ rural students with modern digital coding and research facilities.",
            captionNe: "विद्यार्थीहरूलाई प्रविधिमैत्री शिक्षा प्रदान गर्न कम्प्युटर ल्याबको शुभारम्भ।",
            image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
            thumb: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: "g5",
            category: "parliament",
            categoryEn: "Parliament & Legislation",
            categoryNe: "संसदीय गतिविधि",
            titleEn: "House Standing Committee on Public Accounts & Infrastructure",
            titleNe: "संसदीय सार्वजनिक लेखा तथा पूर्वाधार समिति बैठक",
            captionEn: "Deliberating on transparency, budget efficiency, and infrastructure standards.",
            captionNe: "राष्ट्रिय आयोजनाहरूको बजेट सदुपयोग र पारदर्शिता सम्बन्धी छलफल।",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
            thumb: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: "g6",
            category: "constituency",
            categoryEn: "Constituency & People",
            categoryNe: "संस्कृति तथा सम्पदा",
            titleEn: "Mai Pokhari Eco-Festival & Cultural Celebration",
            titleNe: "माई पोखरी पर्या-पर्यटन महोत्सव तथा साँस्कृतिक उत्सव",
            captionEn: "Celebrating indigenous Limbu, Rai, and multicultural heritage with the community.",
            captionNe: "स्थानीय मौलिक संस्कृति, भेषभूषा र जैविक विविधता संरक्षण महोत्सवमा सहभागी हुँदै।",
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
            thumb: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: "g7",
            category: "development",
            categoryEn: "Development Inspection",
            categoryNe: "स्वास्थ्य पूर्वाधार",
            titleEn: "Inspection of Hospital Oxygen & Dialysis Plant",
            titleNe: "अस्पतालको अक्सिजन तथा डायलायसिस प्लान्टको अवलोकन",
            captionEn: "Ensuring round-the-clock emergency medical services for patients in eastern hills.",
            captionNe: "इलाम अस्पतालमा स्वास्थ्य उपकरणको उपलब्धता र सेवा प्रवाहको सुनिश्चितता।",
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=85",
            thumb: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: "g8",
            category: "youth",
            categoryEn: "Youth & Education",
            categoryNe: "युवा उद्यमशीलता",
            titleEn: "Ilam Youth Innovation & Agro-Enterprise Summit",
            titleNe: "इलाम युवा नवप्रवर्तन तथा कृषि उद्यमशीलता सम्मेलन",
            captionEn: "Mentoring young entrepreneurs building sustainable export brands from Ilam.",
            captionNe: "स्थानीय उत्पादनलाई राष्ट्रिय र अन्तर्राष्ट्रिय बजारमा पुर्‍याउन युवा उद्यमीहरूसँग संवाद।",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
            thumb: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
        }
    ]
};
