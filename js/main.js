document.addEventListener("DOMContentLoaded", function () {

    const path = typeof basePath !== 'undefined' ? basePath : "./";
    const activeId = typeof activeMenuId !== 'undefined' ? activeMenuId : "";

    // ==========================================
    // 1. โค้ดสำหรับ NAVBAR และ FOOTER 
    // ==========================================
    const navbarHTML = `
    <header id="main-header">
        <div class="logo-container">
            <a href="${path}index.html" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
                <img src="${path}picture/logo-unname.png" alt="Expatique Logo" id="navbar-logo" style="height: 64px; transition: all 0.4s ease;">
                
                <span class="navbar-brand-name" style="font-family: var(--font-main); font-size: 1.18rem; font-weight: 600; letter-spacing: 2px; color: var(--primary-color); text-transform: uppercase; transition: all 0.4s ease;">
                    EXPATIQUE
                </span>
            </a>
        </div>
        
        <div class="hamburger" id="hamburger">
            <span></span><span></span><span></span>
        </div>

        <nav class="nav-menu" id="nav-menu">
            <ul style="display: flex; gap: 20px; align-items: center; margin: 0; padding: 0; list-style: none;">
                <li><a href="${path}index.html" class="nav-item" id="nav-home">Home</a></li>
                <li><a href="${path}who-we-are.html" class="nav-item" id="nav-who">Who We Are</a></li>

                <li class="mega-dropdown">
                    <a href="${path}legal-litigation-tax/index.html" class="nav-item" id="nav-legal">Legal, Litigation & Tax ▾</a>
                    <div class="mega-menu">
                        <div class="mega-menu-left">
                            <a href="${path}legal-litigation-tax/legal-support.html" class="mega-menu-link active-hover" 
                               data-tag="LEGAL SERVICES" data-title="Legal & Litigation Support" 
                               data-desc="Expatique provides comprehensive legal support for businesses and individuals in Thailand. We help you navigate complex legal challenges with confidence." 
                               data-bullets="Experienced Team|Proven Success|Strategic Approach|Expert Representation"
                               data-link="${path}legal-litigation-tax/legal-support.html" 
                               data-img="${path}picture/legal-litigation-tax/legal-support/legal.png" data-position="right center">
                               <h4>Legal & Litigation Support</h4><p>Comprehensive legal advisory</p>
                            </a>
                            <a href="${path}legal-litigation-tax/probate-estate.html" class="mega-menu-link" 
                               data-tag="LEGAL SERVICES" data-title="Probate & Estate Support" 
                               data-desc="Assistance with wills, inheritance, and estate administration. We guide you through every step of probate proceedings in Thailand." 
                               data-bullets="Will Preparation|Inheritance Claims|Estate Administration|Asset Protection"
                               data-link="${path}legal-litigation-tax/probate-estate.html" 
                               data-img="${path}picture/legal-litigation-tax/probate-estate/Probate.png" data-position="right center">
                               <h4>Probate and Estate Support</h4><p>Wills, inheritance & estate admin</p>
                            </a>
                            <a href="${path}legal-litigation-tax/family-law.html" class="mega-menu-link" 
                               data-tag="LEGAL SERVICES" data-title="Family Law & Domestic Litigation" 
                               data-desc="Guidance on divorce, custody, and family disputes. Compassionate legal support for sensitive family matters in Thailand." 
                               data-bullets="Divorce Proceedings|Child Custody|Prenuptial Agreements|Domestic Mediation"
                               data-link="${path}legal-litigation-tax/family-law.html" 
                               data-img="${path}picture/legal-litigation-tax/family-law/family-law.png" data-position="center center">
                               <h4>Family Law & Domestic Litigation</h4><p>Divorce, custody & family disputes</p>
                            </a>
                            <a href="${path}legal-litigation-tax/immigration-law.html" class="mega-menu-link" 
                               data-tag="LEGAL SERVICES" data-title="Immigration Law & Residency" 
                               data-desc="Navigating immigration regulations and residency applications. Expert support for visas, work permits, and permanent residency in Thailand." 
                               data-bullets="Visa Applications|Residency Permits|Work Authorization|Compliance Advisory"
                               data-link="${path}legal-litigation-tax/immigration-law.html" 
                               data-img="${path}picture/legal-litigation-tax/immigration-law/immigration-law.png" data-position="center center">
                               <h4>Immigration Law & Residency</h4><p>Immigration & residency applications</p>
                            </a>
                            <a href="${path}legal-litigation-tax/taxation.html" class="mega-menu-link" 
                               data-tag="TAX SERVICES" data-title="Taxation Support" 
                               data-desc="Tax planning, filing, and compliance advisory. We ensure your tax obligations are met efficiently while maximizing benefits." 
                               data-bullets="Tax Planning|Annual Filing|Compliance Review|Tax Optimization"
                               data-link="${path}legal-litigation-tax/taxation.html" 
                               data-img="${path}picture/legal-litigation-tax/taxation/taxation.png" data-position="65% 50%">
                               <h4>Taxation Support</h4><p>Tax planning, filing & compliance</p>
                            </a>
                            <a href="${path}legal-litigation-tax/boi.html" class="mega-menu-link" 
                               data-tag="INVESTMENT SERVICES" data-title="Thailand Board Of Investment" 
                               data-desc="BOI promotion applications and incentive management. Maximize your investment benefits through Thailand's BOI programs." 
                               data-bullets="BOI Applications|Incentive Management|Compliance Support|Reporting Assistance"
                               data-link="${path}legal-litigation-tax/boi.html" 
                               data-img="${path}picture/legal-litigation-tax/boi/boi.png" data-position="center center">
                               <h4>Thailand Board Of Investment (BOI)</h4><p>BOI promotion & incentive management</p>
                            </a>
                            <a href="${path}legal-litigation-tax/eec.html" class="mega-menu-link" 
                               data-tag="INVESTMENT SERVICES" data-title="Eastern Economic Corridor" 
                               data-desc="Support for EEC zone investment and privileges. Leverage Thailand's premier economic zone for your business growth." 
                               data-bullets="Zone Registration|Tax Privileges|Land & Facilities|Permit Assistance"
                               data-link="${path}legal-litigation-tax/eec.html" 
                               data-img="${path}picture/legal-litigation-tax/eec/eec.png" data-position="right center">
                               <h4>Eastern Economic Corridor (EEC)</h4><p>EEC zone investment & privileges</p>
                            </a>
                        </div>
                        <div class="mega-menu-right">
                            <div class="mega-content">
                                <span class="mega-tag">LEGAL SERVICES</span>
                                <h3 class="mega-title">Legal & Litigation Support</h3>
                                <p class="mega-desc">Expatique provides comprehensive legal support for businesses and individuals in Thailand. We help you navigate complex legal challenges with confidence.</p>
                                <div class="mega-bullet-grid">
                                    <div class="mega-bullet-item">Experienced Team</div>
                                    <div class="mega-bullet-item">Proven Success</div>
                                    <div class="mega-bullet-item">Strategic Approach</div>
                                    <div class="mega-bullet-item">Expert Representation</div>
                                </div>
                                <div class="mega-actions">
                                    <a href="${path}contact.html" class="btn">Book a Consultation</a>
                                    <a href="${path}legal-litigation-tax/legal-support.html" class="btn btn-outline mega-btn">Explore Services</a>
                                </div>
                            </div>
                            <div class="mega-image-container">
                                <img src="${path}picture/legal-litigation-tax/legal-support/legal.png" alt="Legal Services" class="mega-img" style="object-position: right center;">
                            </div>
                        </div>
                    </div>
                </li>

                <li><a href="${path}investment.html" class="nav-item" id="nav-invest">Investment</a></li>
                <li><a href="${path}visa-work-permit.html" class="nav-item" id="nav-visa">Visa & Work Permit</a></li>

                <li class="mega-dropdown">
                    <a href="${path}health-insurance/index.html" class="nav-item" id="nav-health">Health & Insurance ▾</a>
                    <div class="mega-menu">
                        <div class="mega-menu-left">
                            <a href="${path}health-insurance/medical-assistance.html" class="mega-menu-link active-hover" 
                               data-tag="HEALTH SERVICES" data-title="Medical Assistance" 
                               data-desc="Hospital coordination, medical referrals, and healthcare navigation. We connect you with Thailand's best medical facilities." 
                               data-bullets="Hospital Coordination|Medical Referrals|Translation Services|Follow-up Care"
                               data-link="${path}health-insurance/medical-assistance.html" 
                               data-img="${path}picture/health-insurance/medical/medical-assistance.png" data-position="center center">
                               <h4>Medical Assistance</h4><p>Hospital coordination & referrals</p>
                            </a>
                            <a href="${path}health-insurance/insurance.html" class="mega-menu-link" 
                               data-tag="HEALTH SERVICES" data-title="Insurance Assistance" 
                               data-desc="Insurance claims support and policy advisory. We help you understand and maximize your insurance coverage in Thailand." 
                               data-bullets="Claims Processing|Policy Review|Coverage Advisory|Dispute Resolution"
                               data-link="${path}health-insurance/insurance.html" 
                               data-img="${path}picture/health-insurance/insurance/insurance-assistance.png" data-position="right center">
                               <h4>Insurance Assistance</h4><p>Claims support & policy advisory</p>
                            </a>
                        </div>
                        <div class="mega-menu-right">
                            <div class="mega-content">
                                <span class="mega-tag">HEALTH SERVICES</span>
                                <h3 class="mega-title">Medical Assistance</h3>
                                <p class="mega-desc">Hospital coordination, medical referrals, and healthcare navigation. We connect you with Thailand's best medical facilities.</p>
                                <div class="mega-bullet-grid">
                                    <div class="mega-bullet-item">Hospital Coordination</div>
                                    <div class="mega-bullet-item">Medical Referrals</div>
                                    <div class="mega-bullet-item">Translation Services</div>
                                    <div class="mega-bullet-item">Follow-up Care</div>
                                </div>
                                <div class="mega-actions">
                                    <a href="${path}contact.html" class="btn">Book a Consultation</a>
                                    <a href="${path}health-insurance/medical-assistance.html" class="btn btn-outline mega-btn">Explore Services</a>
                                </div>
                            </div>
                            <div class="mega-image-container">
                                <img src="${path}picture/health-insurance/medical/medical-assistance.png" alt="Health Services" class="mega-img" style="object-position: right center;">
                            </div>
                        </div>
                    </div>
                </li>

                <li class="mega-dropdown">
                    <a href="${path}study-and-intern-in-thailand/index.html" class="nav-item" id="nav-study">Study & Intern ▾</a>
                    <div class="mega-menu">
                        <div class="mega-menu-left">
                            <a href="${path}study-and-intern-in-thailand/index.html" class="mega-menu-link active-hover" 
                               data-tag="EDUCATION SERVICES" data-title="Study in Thailand" 
                               data-desc="Comprehensive educational support, institution matching, and ED Visa solutions." 
                               data-bullets="Global Recognition|Affordable Living|English Programs|Strong Support"
                               data-link="${path}study-and-intern-in-thailand/index.html" 
                               data-img="${path}picture/study-and-intern-in-thailand/study-in-thailand/study-in-thailand.png" data-position="center center">
                               <h4>Study in Thailand</h4><p>University & School placement</p>
                            </a>
                            <a href="${path}study-and-intern-in-thailand/internship.html" class="mega-menu-link" 
                               data-tag="EDUCATION SERVICES" data-title="Internship Programs" 
                               data-desc="Internship placement and program coordination in Thailand. Gain professional experience in one of Southeast Asia's most dynamic markets." 
                               data-bullets="Placement Matching|Visa Coordination|Mentorship Programs|Career Development"
                               data-link="${path}study-and-intern-in-thailand/internship.html" 
                               data-img="${path}picture/study-and-intern-in-thailand/internship/internship.png" data-position="right center">
                               <h4>Internship</h4><p>Placement & program coordination</p>
                            </a>
                        </div>
                        <div class="mega-menu-right">
                            <div class="mega-content">
                                <span class="mega-tag">EDUCATION SERVICES</span>
                                <h3 class="mega-title">Study in Thailand</h3>
                                <p class="mega-desc">Comprehensive educational support, institution matching, and ED Visa solutions.</p>
                                <div class="mega-bullet-grid">
                                    <div class="mega-bullet-item">Global Recognition</div>
                                    <div class="mega-bullet-item">Affordable Living</div>
                                    <div class="mega-bullet-item">English Programs</div>
                                    <div class="mega-bullet-item">Strong Support</div>
                                </div>
                                <div class="mega-actions">
                                    <a href="${path}contact.html" class="btn">Book a Consultation</a>
                                    <a href="${path}study-and-intern-in-thailand/index.html" class="btn btn-outline mega-btn">Explore Services</a>
                                </div>
                            </div>
                            <div class="mega-image-container">
                                <img src="${path}picture/study-and-intern-in-thailand/study-in-thailand/study-in-thailand.png" alt="Study Services" class="mega-img" style="object-position: center center;">
                            </div>
                        </div>
                    </div>
                </li>

                <li><a href="${path}real-estate.html" class="nav-item" id="nav-real">Real Estate</a></li>
                <li><a href="${path}contact.html" class="nav-item" id="nav-contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;

    const footerHTML = `
    <footer class="main-footer">
        <div class="footer-container">
            <div class="footer-col">
                <img src="${path}picture/logo-unname.png" alt="Expatique Logo" style="height: 50px; margin-bottom: 15px;">
                <p>Expatique is a dedicated advisory service committed to supporting expats and businesses in Thailand.</p>
            </div>

            <div class="footer-col">
                <h4>COMPANY</h4>
                <ul>
                    <li><a href="${path}who-we-are.html">Who We Are</a></li>
                    <li><a href="${path}legal-litigation-tax/index.html">Legal, Litigation & Tax</a></li>
                    <li><a href="${path}investment.html">Investment</a></li>
                    <li><a href="${path}visa-work-permit.html">Visa & Work Permit</a></li>
                    <li><a href="${path}health-insurance/index.html">Health & Insurance</a></li>
                    <li><a href="${path}study-and-intern-in-thailand/index.html">Study & Intern</a></li>
                    <li><a href="${path}real-estate.html">Real Estate</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>CONTACT</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 15px;">
                    <li style="display: flex; gap: 12px; align-items: flex-start;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #C49765)" stroke-width="2" style="width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <a href="mailto:connect@expatique.com" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-gold)'" onmouseout="this.style.color='inherit'">connect@expatique.com</a>
                    </li>
                    <li style="display: flex; gap: 12px; align-items: flex-start;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #C49765)" stroke-width="2" style="width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <a href="tel:+66961040440" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent-gold)'" onmouseout="this.style.color='inherit'">+66 96 104 0440</a>
                    </li>
                    <li style="display: flex; gap: 12px; align-items: flex-start;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #C49765)" stroke-width="2" style="width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span style="line-height: 1.6; color: inherit;">K Building, 22 Sukhumvit 35 Alley,<br>Khlong Toei Nuea, Watthana,<br>Bangkok 10110 (6th Floor)</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 Expatique. All rights reserved.
        </div>
    </footer>
    `;

    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;

    const activeElement = document.getElementById(activeId);
    if (activeElement) activeElement.classList.add('active');

    // ==========================================
    // 2. Hamburger Toggle 
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        hamburger.classList.toggle('is-active');

        // ถ้าเมนูหลักถูกปิด ให้สั่งปิดเมนูย่อย (Dropdown) ทั้งหมดด้วย
        if (!navMenu.classList.contains('is-active')) {
            const allMegaMenus = document.querySelectorAll('.mega-menu');
            allMegaMenus.forEach(function (menu) {
                menu.classList.remove('is-active-mobile');
            });
        }
    });

    // ==========================================
    // 3. ระบบคลิกเปิด Mega Menu 
    // ==========================================
    const megaDropdowns = document.querySelectorAll('.mega-dropdown');
    let hideTimers = new Map();

    megaDropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.mega-menu');

        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(hideTimers.get(dropdown));
            if (menu) {
                menu.style.opacity = "1";
                menu.style.visibility = "visible";
                menu.style.pointerEvents = "auto";
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            hideTimers.set(dropdown, setTimeout(() => {
                if (menu) {
                    menu.style.opacity = "0";
                    menu.style.visibility = "hidden";
                    menu.style.pointerEvents = "none";
                }
            }, 300));
        });
    });

    // ==========================================
    // 4. Scroll Animation
    // ==========================================
    window.addEventListener('scroll', function () {
        const header = document.getElementById('main-header');
        const logo = document.getElementById('navbar-logo');
        const brandName = document.querySelector('.navbar-brand-name');

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            if (logo) logo.style.height = '48px';
            if (brandName) {
                brandName.style.fontSize = '1.05rem';
                brandName.style.color = '#FFFFFF';
            }
        } else {
            header.classList.remove('scrolled');
            if (logo) logo.style.height = '64px';
            if (brandName) {
                brandName.style.fontSize = '1.18rem';
                brandName.style.color = '#FFFFFF';
            }
        }
    });

    // ==========================================
    // 5. Mega Menu Hover Logic
    // ==========================================
    const megaLinks = document.querySelectorAll('.mega-menu-link');
    let fadeTimers = new Map();

    megaLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            if (window.innerWidth <= 1024) return;

            const megaMenu = this.closest('.mega-menu');
            if (!megaMenu) return;

            const tag = megaMenu.querySelector('.mega-tag');
            const title = megaMenu.querySelector('.mega-title');
            const desc = megaMenu.querySelector('.mega-desc');
            const linkBtn = megaMenu.querySelector('.mega-btn');
            const img = megaMenu.querySelector('.mega-img');
            const bulletGrid = megaMenu.querySelector('.mega-bullet-grid');

            if (fadeTimers.has(megaMenu)) clearTimeout(fadeTimers.get(megaMenu));

            const timerId = setTimeout(() => {
                if (tag) tag.textContent = this.getAttribute('data-tag');
                if (title) title.textContent = this.getAttribute('data-title');
                if (desc) desc.textContent = this.getAttribute('data-desc');
                if (linkBtn) linkBtn.href = this.getAttribute('data-link');

                if (img && this.getAttribute('data-img')) {
                    img.src = this.getAttribute('data-img');
                    const imgPos = this.getAttribute('data-position') || 'right center';
                    img.style.objectPosition = imgPos;
                }

                const bulletsStr = this.getAttribute('data-bullets');
                if (bulletGrid && bulletsStr) {
                    const bullets = bulletsStr.split('|');
                    bulletGrid.innerHTML = '';
                    bullets.forEach(b => {
                        const div = document.createElement('div');
                        div.className = 'mega-bullet-item';
                        div.textContent = b;
                        bulletGrid.appendChild(div);
                    });
                }
            }, 100);

            fadeTimers.set(megaMenu, timerId);

            megaMenu.querySelectorAll('.mega-menu-link').forEach(l => l.classList.remove('active-hover'));
            this.classList.add('active-hover');
        });
    });

    // ==========================================
    // 6. ระบบฉีด Favicon 
    // ==========================================
    const setFavicon = () => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = `${path}picture/logo-unname.png?v=${new Date().getTime()}`;
    };
    setFavicon();

    // ==========================================
    // 7. ระบบ Cursor Spotlight
    // ==========================================
    if (window.innerWidth > 1024) {
        const cursor = document.createElement('div');
        cursor.classList.add('cursor-follower');
        document.body.appendChild(cursor);

        let mouseX = 0, mouseY = 0;
        let isMoving = false;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isMoving) {
                requestAnimationFrame(() => {
                    cursor.style.left = `${mouseX}px`;
                    cursor.style.top = `${mouseY}px`;
                    isMoving = false;
                });
                isMoving = true;
            }
        });
    }

    // ==========================================
    // 8. Mobile Menu & Dropdown Logic
    // ==========================================
    const mobileDropdownToggles = document.querySelectorAll('.mega-dropdown > a.nav-item');

    mobileDropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                const megaMenu = this.nextElementSibling;
                if (megaMenu && megaMenu.classList.contains('mega-menu')) {
                    document.querySelectorAll('.mega-menu').forEach(function (menu) {
                        if (menu !== megaMenu) menu.classList.remove('is-active-mobile');
                    });
                    megaMenu.classList.toggle('is-active-mobile');
                }
            }
        });
    });

});