        document.addEventListener('DOMContentLoaded', function() {
            const preloader = document.querySelector('.preloader');
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1500);

            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                const backToTop = document.querySelector('.back-to-top');
                
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                    backToTop.classList.add('active');
                } else {
                    header.classList.remove('scrolled');
                    backToTop.classList.remove('active');
                }
            });

            document.querySelector('.back-to-top').addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const nav = document.querySelector('nav');
            
            mobileMenuBtn.addEventListener('click', function() {
                nav.classList.toggle('active');
                this.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });

            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        nav.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                });
            });

            const testimonialSlides = document.querySelectorAll('.testimonial-slide');
            const dots = document.querySelectorAll('.slider-dot');
            let currentSlide = 0;
            
            function showSlide(index) {
                testimonialSlides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                testimonialSlides[index].classList.add('active');
                dots[index].classList.add('active');
                currentSlide = index;
            }
            
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = parseInt(this.getAttribute('data-slide'));
                    showSlide(slideIndex);
                });
            });
            
            setInterval(() => {
                currentSlide = (currentSlide + 1) % testimonialSlides.length;
                showSlide(currentSlide);
            }, 5000);

            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach(el => {
                const size = Math.random() * 100 + 50;
                const posX = Math.random() * 80 + 10;
                const posY = Math.random() * 80 + 10;
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 10;
                
                el.style.width = `${size}px`;
                el.style.height = `${size}px`;
                el.style.left = `${posX}%`;
                el.style.top = `${posY}%`;
                el.style.animationDelay = `${delay}s`;
                el.style.animationDuration = `${duration}s`;
            });

            const membershipForm = document.getElementById('membershipForm');
            membershipForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your application! We will contact you shortly to complete your membership registration.');
                this.reset();
            });

            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.feature-card, .resource-card, .tier-card, .stat-item');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll();
        });
