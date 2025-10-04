// Translation dictionary
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.paths": "Career Paths",
        "nav.resources": "Resources",
        "nav.about": "About",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.title": "Developer Roadmap",
        "hero.subtitle": "6 Proven Paths to Launch Your Career with Complete Resources",
        "hero.button": "Explore Paths",
        
        // Paths Section
        "paths.title": "6 Proven Career Paths",
        "paths.subtitle": "Each path includes detailed information, tools, frameworks, and learning resources",
        "paths.data-science": "Data Science",
        "paths.frontend": "Frontend",
        "paths.backend": "Backend",
        "paths.mobile": "Mobile",
        "paths.cloud": "Cloud",
        "paths.ui-ux": "UI/UX",
        
        // Card Titles
        "card.languages": "Languages",
        "card.frameworks": "Frameworks",
        "card.tools": "Core Tools",
        "card.fundamentals": "Fundamental Topics",
        "card.advanced": "Advanced Topics",
        
        // Data Science Path
        "data-science.title": "Data Science & Machine Learning",
        "data-science.description": "Ideal for problem-solvers who love working with data, trends, and intelligent systems.",
        "data-science.frameworks.scikit": "Python ML library for simple models",
        "data-science.frameworks.tensorflow": "Google's ML framework for deep learning",
        "data-science.frameworks.pytorch": "Facebook's dynamic deep learning framework",
        "data-science.frameworks.keras": "High-level API for building neural networks",
        "data-science.tools.jupyter": "Web-based interactive computing environment",
        "data-science.tools.colab": "Free cloud Jupyter notebook service",
        "data-science.tools.pandas": "Data manipulation and analysis library",
        "data-science.tools.numpy": "Fundamental package for numerical computations",
        "data-science.tools.opencv": "Library for real-time computer vision",
        "data-science.tools.nltk": "Toolkit for working with Natural Language",
        "data-science.tools.spacy": "Industrial-strength NLP library in Python",
        "data-science.tools.cloud": "Major cloud platforms for scalable computing",
        "data-science.fundamentals.python": "Python programming basics",
        "data-science.fundamentals.cleaning": "Data cleaning and transformation",
        "data-science.fundamentals.stats": "Descriptive statistics and probability",
        "data-science.fundamentals.algorithms": "Machine learning algorithms (regression, k-NN)",
        "data-science.fundamentals.visualization": "Data visualization (Matplotlib, Plotly, Seaborn)",
        "data-science.advanced.deep-learning": "Deep learning (CNNs, RNNs, GANs)",
        "data-science.advanced.nlp": "NLP (BERT, GPT, embeddings)",
        "data-science.advanced.evaluation": "Model evaluation (ROC, F1, precision/recall)",
        "data-science.advanced.reinforcement": "Reinforcement learning",
        "data-science.advanced.mlops": "MLOps, deployment pipelines",
        "data-science.advanced.llm": "LLM applications and fine-tuning",
        
        // Frontend Path
        "frontend.title": "Frontend Development",
        "frontend.description": "For engineers interested in building beautiful and interactive web interfaces.",
        "frontend.frameworks.react": "JavaScript library for building user interfaces",
        "frontend.frameworks.vue": "Progressive framework for building user interfaces",
        "frontend.frameworks.angular": "Structured framework for building scalable web applications",
        "frontend.frameworks.tailwind": "Utility-first CSS framework for rapid UI development",
        "frontend.frameworks.bootstrap": "Popular framework for building responsive, mobile-first sites",
        
        // Backend Path
        "backend.title": "Backend Development",
        "backend.description": "For engineers who enjoy building APIs, handling data, and architecting systems.",
        "backend.frameworks.express": "Minimalist web framework for Node.js",
        
        // Mobile Path
        "mobile.title": "Mobile App Development",
        "mobile.description": "For engineers who want to create mobile apps for iOS and Android platforms.",
        "mobile.frameworks.reactnative": "JavaScript framework for native apps",
        "mobile.frameworks.flutter": "Google's UI toolkit for mobile",
        "mobile.frameworks.android": "Official SDK for Android",
        
        // Cloud Path
        "cloud.title": "Cloud Engineering",
        "cloud.description": "For engineers who love automation, system design, scaling systems, and managing infrastructure.",
        "cloud.frameworks.terraform": "Infrastructure as Code tool",
        
        // UI/UX Path
        "ui-ux.title": "UI/UX Designer",
        "ui-ux.description": "For creative individuals passionate about crafting intuitive and engaging digital experiences.",
        "ui-ux.frameworks.figma": "Collaborative interface design tool",
        "ui-ux.frameworks.invision": "Digital product design platform",
        
        // Resources Section
        "resources.title": "Learning Resources",
        "resources.subtitle": "Curated resources to help you master your chosen career path",
        "resources.freecodecamp": "Free online coding courses and projects",
        "resources.mdn": "Comprehensive documentation for web technologies",
        "resources.coursera": "Online courses from top universities and companies",
        "resources.youtube": "Free tutorials and courses from industry experts",
        "resources.explore": "Explore",
        
        // About Section
        "about.title": "About This Guide",
        "about.subtitle": "Your roadmap to a successful career in software engineering",
        "about.quote": "\"If you fail to plan, you are planning to fail.\" — Benjamin Franklin",
        "about.description1": "This comprehensive guide was created to help aspiring software engineers navigate the complex landscape of technology careers. With so many paths to choose from, it can be overwhelming to know where to start.",
        "about.description2": "Each path has been carefully researched and includes:",
        "about.list1": "Essential programming languages and frameworks",
        "about.list2": "Core tools and technologies",
        "about.list3": "Fundamental concepts to master",
        "about.list4": "Advanced topics for career growth",
        "about.list5": "Curated learning resources",
        "about.description3": "Whether you're just starting your journey or looking to switch specializations, this guide provides a clear roadmap to success in the ever-evolving field of software engineering.",
        "about.stat1": "Career Paths",
        "about.stat2": "Technologies",
        "about.stat3": "Resources",
        "about.stat4": "Possibilities",
        
        // Footer
        "footer.description": "Software Engineering Student & Aspiring Full-Stack Developer",
        "footer.quicklinks": "Quick Links",
        "footer.careerpaths": "Career Paths",
        "footer.resources": "Resources",
        "footer.rights": "All rights reserved."
    },
    ar: {
        // Navigation
        "nav.home": "الرئيسية",
        "nav.paths": "المسارات المهنية",
        "nav.resources": "الموارد",
        "nav.about": "حول",
        "nav.contact": "اتصل بنا",
        
        // Hero Section
        "hero.title": "خارطة طريق تعلم البرمجة",
        "hero.subtitle": "6 مسارات مثبتة لبدء حياتك المهنية مع موارد كاملة",
        "hero.button": "استكشف المسارات",
        
        // Paths Section
        "paths.title": "6 مسارات مهنية مثبتة",
        "paths.subtitle": "يحتوي كل مسار على معلومات مفصلة وأدوات وأطر عمل وموارد تعليمية",
        "paths.data-science": "علم البيانات",
        "paths.frontend": "واجهة المستخدم",
        "paths.backend": "الخلفية",
        "paths.mobile": "الجوال",
        "paths.cloud": "الحوسبة السحابية",
        "paths.ui-ux": "واجهة المستخدم/تجربة المستخدم",
        
        // Card Titles
        "card.languages": "اللغات",
        "card.frameworks": "أطر العمل",
        "card.tools": "الأدوات الأساسية",
        "card.fundamentals": "الموضوعات الأساسية",
        "card.advanced": "الموضوعات المتقدمة",
        
        // Data Science Path
        "data-science.title": "علم البيانات وتعلم الآلة",
        "data-science.description": "مثالي لحلالي المشكلات الذين يحبون العمل مع البيانات والاتجاهات والأنظمة الذكية.",
        "data-science.frameworks.scikit": "مكتبة بايثون للتعلم الآلي للنماذج البسيطة",
        "data-science.frameworks.tensorflow": "إطار عمل جوجل للتعلم الآلي للتعلم العميق",
        "data-science.frameworks.pytorch": "إطار عمل فيسبوك الديناميكي للتعلم العميق",
        "data-science.frameworks.keras": "واجهة برمجة تطبيقات عالية المستوى لبناء الشبكات العصبية",
        "data-science.tools.jupyter": "بيئة حوسبة تفاعلية قائمة على الويب",
        "data-science.tools.colab": "خدمة مجانية للسحابة الإلكترونية لدفاتر جوبيتر",
        "data-science.tools.pandas": "مكتبة لمعالجة وتحليل البيانات",
        "data-science.tools.numpy": "الحزمة الأساسية للحسابات الرقمية",
        "data-science.tools.opencv": "مكتبة للرؤية الحاسوبية في الوقت الفعلي",
        "data-science.tools.nltk": "مجموعة أدوات للعمل مع اللغة الطبيعية",
        "data-science.tools.spacy": "مكتبة معالجة اللغة الطبيعية القوية في بايثون",
        "data-science.tools.cloud": "منصات سحابية رئيسية للحوسبة القابلة للتطوير",
        "data-science.fundamentals.python": "أساسيات برمجة بايثون",
        "data-science.fundamentals.cleaning": "تنظيف البيانات وتحويلها",
        "data-science.fundamentals.stats": "الإحصاء الوصفي والاحتمالات",
        "data-science.fundamentals.algorithms": "خوارزميات التعلم الآلي (الانحدار، كي-إن إن)",
        "data-science.fundamentals.visualization": "تصور البيانات (Matplotlib، Plotly، Seaborn)",
        "data-science.advanced.deep-learning": "التعلم العميق (CNNs، RNNs، GANs)",
        "data-science.advanced.nlp": "معالجة اللغة الطبيعية (BERT، GPT، التضمينات)",
        "data-science.advanced.evaluation": "تقييم النماذج (ROC، F1، الدقة/الاستدعاء)",
        "data-science.advanced.reinforcement": "التعلم المعزز",
        "data-science.advanced.mlops": "MLOps، خطوط النشر",
        "data-science.advanced.llm": "تطبيقات ونماذج اللغة الكبيرة وضبطها الدقيق",
        
        // Frontend Path
        "frontend.title": "تطوير واجهة المستخدم",
        "frontend.description": "للمهندسين المهتمين ببناء واجهات ويب جميلة وتفاعلية.",
        "frontend.frameworks.react": "مكتبة جافاسكريبت لبناء واجهات المستخدم",
        "frontend.frameworks.vue": "إطار عمل تقدمي لبناء واجهات المستخدم",
        "frontend.frameworks.angular": "إطار عمل منظم لبناء تطبيقات ويب قابلة للتطوير",
        "frontend.frameworks.tailwind": "إطار عمل CSS ذو أولوية للأداة لتطوير واجهة المستخدم بسرعة",
        "frontend.frameworks.bootstrap": "إطار عمل شائع لبناء مواقع تستجيب للأجهزة المحمولة أولاً",
        
        // Backend Path
        "backend.title": "تطوير الواجهة الخلفية",
        "backend.description": "للمهندسين المهتمين بمنطق الخادم، قواعد البيانات، وتطوير واجهات برمجة التطبيقات.",
        "backend.frameworks.express": "إطار ويب بسيط لـ Node.js",
        
        // Mobile Path
        "mobile.title": "تطوير الجوال",
        "mobile.description": "للمهندسين المتحمسين لبناء تطبيقات الجوال الأصلية والمتعددة المنصات.",
        "mobile.frameworks.reactnative": "إطار عمل لبناء تطبيقات أصلية باستخدام React",
        "mobile.frameworks.flutter": "أداة واجهة مستخدم لتطبيقات متعددة المنصات",
        "mobile.frameworks.android": "إطار عمل رسمي لتطوير Android",
        
        // Cloud Path
        "cloud.title": "هندسة الحوسبة السحابية",
        "cloud.description": "للمهندسين المتخصصين في البنية التحتية السحابية، النشر، والقابلية للتطوير.",
        "cloud.frameworks.terraform": "أداة البنية كرمز",
        
        // UI/UX Path
        "ui-ux.title": "تصميم واجهة المستخدم/تجربة المستخدم",
        "ui-ux.description": "للمصممين المهتمين بإنشاء واجهات وتجارب مستخدم بديهية وسهلة الاستخدام.",
        "ui-ux.frameworks.figma": "أداة تصميم واجهة تعاونية",
        "ui-ux.frameworks.invision": "منصة تصميم المنتجات الرقمية",
        
        // Resources Section
        "resources.title": "موارد التعلم",
        "resources.subtitle": "موارد مختارة لمساعدتك في إتقان مسارك المهني المختار",
        "resources.freecodecamp": "دورات ومشاريع برمجة مجانية عبر الإنترنت",
        "resources.mdn": "توثيق شامل لتقنيات الويب",
        "resources.coursera": "دورات عبر الإنترنت من أفضل الجامعات والشركات",
        "resources.youtube": "دروس ودورات مجانية من خبراء الصناعة",
        "resources.explore": "استكشف",
        
        // About Section
        "about.title": "حول هذا الدليل",
        "about.subtitle": "خارطة طريقك إلى مهنة ناجحة في هندسة البرمجيات",
        "about.quote": "\"إذا فشلت في التخطيط، فأنت تخطط للفشل.\" — بنجامين فرانكلين",
        "about.description1": "تم إنشاء هذا الدليل الشامل لمساعدة مهندسي البرمجيات الطموحين على التنقل في المشهد المعقد للمهن التكنولوجية. مع وجود العديد من المسارات للاختيار من بينها، يمكن أن يكون الأمر مربكًا لمعرفة من أين تبدأ.",
        "about.description2": "كل مسار تم البحث فيه بعناية ويتضمن:",
        "about.list1": "لغات البرمجة وأطر العمل الأساسية",
        "about.list2": "الأدوات والتقنيات الأساسية",
        "about.list3": "المفاهيم الأساسية لإتقانها",
        "about.list4": "موضوعات متقدمة للنمو المهني",
        "about.list5": "موارد تعلم مختارة",
        "about.description3": "سواء كنت قد بدأت رحلتك للتو أو تبحث عن تغيير التخصصات، يقدم هذا الدليل خارطة طريق واضحة للنجاح في مجال هندسة البرمجيات المتطور دائمًا.",
        "about.stat1": "مسارات مهنية",
        "about.stat2": "تقنيات",
        "about.stat3": "موارد",
        "about.stat4": "إمكانيات",
        
        // Footer
        "footer.description": "طالب هندسة برمجيات ومطور ويب طموح",
        "footer.quicklinks": "روابط سريعة",
        "footer.careerpaths": "المسارات المهنية",
        "footer.resources": "الموارد",
        "footer.rights": "جميع الحقوق محفوظة."
    }
};

// Initialize particles.js and handle Lottie animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#8A2BE2', '#9B4DFF', '#00D4FF', '#FF4D9B']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#8A2BE2',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Set initial language
    setLanguage(currentLang);
    
    // Add event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    function setLanguage(lang) {
        // DON'T change HTML direction - keep it always LTR for layout
        // Only change the language attribute for semantic purposes
        document.documentElement.lang = lang;
        
        // Add a class to body for Arabic text styling without layout flipping
        if (lang === 'ar') {
            document.body.classList.add('arabic-text');
            document.body.classList.remove('english-text');
        } else {
            document.body.classList.add('english-text');
            document.body.classList.remove('arabic-text');
        }
        
        // Update active button
        langButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            }
        });
        
        // Update all translatable elements
        const translatableElements = document.querySelectorAll('[data-i18n]');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Save language preference
        localStorage.setItem('language', lang);
    }

    // Navigation toggle for mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change hamburger icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Path navigation functionality
    const pathNavBtns = document.querySelectorAll('.path-nav-btn');
    const pathContents = document.querySelectorAll('.path-content');
    
    pathNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            pathNavBtns.forEach(b => b.classList.remove('active'));
            pathContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Show corresponding content
            const pathId = btn.getAttribute('data-path');
            document.getElementById(`${pathId}-path`).classList.add('active');
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                // Reset hamburger icon
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});