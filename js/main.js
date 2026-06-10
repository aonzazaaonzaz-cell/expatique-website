document.addEventListener("DOMContentLoaded", function () {

    const path = typeof basePath !== 'undefined' ? basePath : "./";
    const activeId = typeof activeMenuId !== 'undefined' ? activeMenuId : "";

    // ==========================================
    // 1. โค้ดสำหรับ NAVBAR และ FOOTER
    // ==========================================
    const navbarHTML = `
    <header id="main-header">
        <div class="logo-container">
            <a href="${path}index.html">
                <img src="${path}picture/logo.png" alt="Expatique Logo" id="navbar-logo" style="height: 50px; transition: all 0.4s ease;">
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
                            <a href="${path}legal-litigation-tax/legal-support.html" class="mega-menu-link" data-tag="LITIGATION" data-title="Legal & Litigation" data-desc="Professional guidance and representation when navigating disputes or legal challenges." data-link="${path}legal-litigation-tax/legal-support.html"><h4>Legal & Litigation</h4></a>
                            <a href="${path}legal-litigation-tax/probate-estate.html" class="mega-menu-link" data-tag="ESTATE PLANNING" data-title="Probate and Estate" data-desc="Protecting your family’s future through clear wills drafting and estate administration." data-link="${path}legal-litigation-tax/probate-estate.html"><h4>Probate and Estate</h4></a>
                            <a href="${path}legal-litigation-tax/family-law.html" class="mega-menu-link" data-tag="FAMILY MATTERS" data-title="Family Law" data-desc="Empathetic assistance with marriage, divorce, child custody, and domestic disputes." data-link="${path}legal-litigation-tax/family-law.html"><h4>Family Law</h4></a>
                            <a href="${path}legal-litigation-tax/immigration-law.html" class="mega-menu-link" data-tag="VISA & RESIDENCY" data-title="Immigration Law" data-desc="Navigating long-term residency options, visas, and legal immigration status." data-link="${path}legal-litigation-tax/immigration-law.html"><h4>Immigration Law</h4></a>
                            <a href="${path}legal-litigation-tax/taxation.html" class="mega-menu-link" data-tag="TAX COMPLIANCE" data-title="Taxation Support" data-desc="Strategic corporate and personal tax compliance for individuals and international firms." data-link="${path}legal-litigation-tax/taxation.html"><h4>Taxation Support</h4></a>
                            <a href="${path}legal-litigation-tax/boi.html" class="mega-menu-link" data-tag="INVESTMENT" data-title="BOI Support" data-desc="Streamlining applications for Board of Investment incentives and business setup." data-link="${path}legal-litigation-tax/boi.html"><h4>BOI Support</h4></a>
                            <a href="${path}legal-litigation-tax/eec.html" class="mega-menu-link" data-tag="ECONOMIC ZONES" data-title="EEC Support" data-desc="Legal and regulatory support for investing in the Eastern Economic Corridor zone." data-link="${path}legal-litigation-tax/eec.html"><h4>EEC Support</h4></a>
                        </div>
                        <div class="mega-menu-right">
                            <div class="mega-content">
                                <span class="mega-tag" id="dynamic-tag-legal">LEGAL SERVICES</span>
                                <h3 class="mega-title" id="dynamic-title-legal">Legal, Litigation & Tax</h3>
                                <div class="mega-actions">
                                    <a href="${path}contact.html" class="mega-btn btn-dark">Contact Us</a>
                                    <a href="${path}legal-litigation-tax/index.html" class="mega-btn btn-outline" id="dynamic-link-legal">Explore</a>
                                </div>
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
                            <a href="${path}health-insurance/insurance.html" class="mega-menu-link" data-tag="PROTECTION" data-title="Insurance Assistance" data-desc="Tailored health, life, and property insurance plans designed specifically for expats." data-link="${path}health-insurance/insurance.html"><h4>Insurance Assistance</h4></a>
                            <a href="${path}health-insurance/medical-assistance.html" class="mega-menu-link" data-tag="HEALTHCARE" data-title="Medical Assistance" data-desc="Navigating the Thai healthcare system with hospital coordination and specialist referrals." data-link="${path}health-insurance/medical-assistance.html"><h4>Medical Assistance</h4></a>
                        </div>
                        <div class="mega-menu-right"><div class="mega-content"><h3 class="mega-title">Health & Insurance</h3></div></div>
                    </div>
                </li>

                <li class="mega-dropdown">
                    <a href="${path}study-and-intern-in-thailand/index.html" class="nav-item" id="nav-study">Study & Intern ▾</a>
                    <div class="mega-menu">
                        <div class="mega-menu-left">
                            <a href="${path}study-and-intern-in-thailand/index.html" class="mega-menu-link" data-tag="ACADEMIC" data-title="Study in Thailand" data-desc="Comprehensive educational support, institution matching, and ED Visa solutions." data-link="${path}study-and-intern-in-thailand/index.html"><h4>Study in Thailand</h4></a>
                            <a href="${path}study-and-intern-in-thailand/internship.html" class="mega-menu-link" data-tag="CAREER" data-title="Internship Programs" data-desc="Gain valuable international experience." data-link="${path}study-and-intern-in-thailand/internship.html"><h4>Internship Programs</h4></a>
                        </div>
                        <div class="mega-menu-right"><div class="mega-content"><h3 class="mega-title">Study & Intern</h3></div></div>
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
                <img src="${path}picture/logo.png" alt="Expatique Logo" style="height: 50px; margin-bottom: 15px;">
                <p>Expatique is a dedicated advisory service committed to supporting expats and businesses in Thailand.</p>
            </div>

            <div class="footer-col">
                <h4>COMPANY</h4>
                <ul>
                    <li><a href="${path}who-we-are.html">Who We Are</a></li>
                    <li><a href="${path}legal-litigation-tax/index.html">Legal, Litigation & Tax</a></li>
                    <li><a href="${path}investment.html">Investment</a></li>
                    <li><a href="${path}visa-work-permit.html">Visa & Work Permit</a></li>
                    <li><a href="${path}health-insurance.html">Health & Insurance</a></li>
                    <li><a href="${path}study-intern.html">Study & Intern</a></li>
                    <li><a href="${path}real-estate.html">Real Estate</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>CONTACT</h4>
                <p>info@expatique.com</p>
                <p style="margin-top: 10px;">Bangkok, Thailand</p>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 Expatique. All rights reserved.
        </div>
    </footer>
    `;

    // ฉีดเข้าหน้า
    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;

    // จัดการระบบ Active Menu
    const activeElement = document.getElementById(activeId);
    if (activeElement) activeElement.classList.add('active');

    // ==========================================
    // 2. Hamburger Toggle (สำหรับมือถือ)
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        hamburger.classList.toggle('is-active');
    });

    // ==========================================
    // 3. ระบบคลิกเปิด Mega Menu 
    // ==========================================
    const megaDropdowns = document.querySelectorAll('.mega-dropdown');
    let hideTimers = new Map();

    megaDropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.mega-menu');

        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(hideTimers.get(dropdown)); // ถ้าเมาส์กลับมาทัน ให้หยุดการหุบ
            if (menu) {
                menu.style.opacity = "1";
                menu.style.visibility = "visible";
                menu.style.pointerEvents = "auto";
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            // หน่วงเวลา 300ms (0.3 วินาที) ก่อนจะหุบ
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
    // 4. Scroll Animation (เอฟเฟกต์ตอนเลื่อนหน้าจอ)
    // ==========================================
    window.addEventListener('scroll', function () {
        const header = document.getElementById('main-header');
        const logo = document.getElementById('navbar-logo');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            if (logo) logo.style.height = '35px';
        } else {
            header.classList.remove('scrolled');
            if (logo) logo.style.height = '50px';
        }
    });

    // ==========================================
    // 5. Mega Menu Hover Logic (เฉพาะ Desktop)
    // ==========================================
    const megaLinks = document.querySelectorAll('.mega-menu-link');
    let fadeTimers = new Map();

    megaLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            // ปิดการทำงาน Hover ในมือถือเพื่อไม่ให้ตีกับระบบคลิก
            if (window.innerWidth <= 1024) return;

            const megaMenu = this.closest('.mega-menu');
            if (!megaMenu) return;

            const tag = megaMenu.querySelector('.mega-tag');
            const title = megaMenu.querySelector('.mega-title');
            const desc = megaMenu.querySelector('.mega-desc');
            const linkBtn = megaMenu.querySelector('.mega-btn.btn-outline');

            if (fadeTimers.has(megaMenu)) clearTimeout(fadeTimers.get(megaMenu));

            const timerId = setTimeout(() => {
                if (tag) tag.textContent = this.getAttribute('data-tag');
                if (title) title.textContent = this.getAttribute('data-title');
                if (desc) desc.textContent = this.getAttribute('data-desc');
                if (linkBtn) {
                    linkBtn.href = this.getAttribute('data-link');
                    linkBtn.textContent = "View Details";
                }
            }, 100);
            fadeTimers.set(megaMenu, timerId);

            megaMenu.querySelectorAll('.mega-menu-link').forEach(l => l.classList.remove('active-hover'));
            this.classList.add('active-hover');
        });
    });

    // ==========================================
    // 6. ระบบฉีด Favicon อัตโนมัติ 
    // ==========================================
    const setFavicon = () => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        // ตั้งค่า path โดยอ้างอิงจากตัวแปร path ที่เรามีอยู่แล้ว
        link.href = `${path}picture/logo.png`;
    };

    setFavicon();

    // ==========================================
    // 7. ระบบ Cursor Spotlight (อัปเดตใหม่)
    // ==========================================
    // เช็กว่าไม่ใช่หน้าจอมือถือ/แท็บเล็ต (หน้าจอกว้างกว่า 1024px) ค่อยเปิดระบบ Cursor
    if (window.innerWidth > 1024) {
        console.log("Cursor Spotlight Activated");

        const cursor = document.createElement('div');
        cursor.classList.add('cursor-follower');
        document.body.appendChild(cursor);

        // ใช้ requestAnimationFrame เพื่อให้แสงวิ่งตามเมาส์ได้ลื่นไหล ไม่กินสเปคเครื่อง
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

});