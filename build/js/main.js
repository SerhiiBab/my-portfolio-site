
        let currentLang = 'de';
        
        const translations = {
            en: "CV PDF",
            de: "Lebenslauf PDF"
        };

        const translations1 = {
            en: "Home",
            de: "Start"
        };
        const translations2 = {
            en: "About",
            de: "Über mich"
        };
        const translations3 = {
            en: "Contact",
            de: "Kontakt"
        };
        const translations4 = {
            en: "About",
            de: "Über mich"
        };
        const translations5 = {
            en: "Contact",
            de: "Kontakt"
        };
        const translations6 = {
            en: "Hi,",
            de: "Hallo,"
        };
        const translations7 = {
            en: "My name is",
            de: "mein Name ist"
        };
        const translations8 = {
            en: "I build things for web!",
            de: "Ich baue Dinge für das Web!"
        };
        const translations9 = {
            en: "CONTACT ME",
            de: "KONTAKT"
        };
        const translations10 = {
            en: "About Me",
            de: "Über mich"
        };
        const translations11 = {
            en: "Hi, my name is Serhii Babych. I’m a Web Developer with a passion for crafting innovative solutions. I thrive on creating seamless and user-friendly interfaces that make a meaningful impact.",
            de: "Hallo, mein Name ist Serhii Babych. Ich bin Webentwickler und habe eine Leidenschaft dafür, innovative Lösungen zu entwickeln. Ich liebe es, nahtlose und benutzerfreundliche Oberflächen zu gestalten, die einen spürbaren Mehrwert schaffen."
        };
        const translations12 = {
            en: "Work Experience",
            de: "Berufserfahrung"
        };
        const translations13 = {
            en: "- Wieprich Werbeagentur Web Developer (Feb 2024 – until today)",
            de: "- Wieprich Werbeagentur – Webentwickler (Februar 2024 – heute)"
        };
        const translations14 = {
            en: "Designed and developed responsive websites using HTML, CSS, JavaScript, React, and Tailwind CSS.",
            de: "Websites entworfen (PSD, Figma) und responsive entwickelt unter Verwendung von HTML, CSS, JavaScript und weiteren Technologien."
        };


        
        function setLang(lang) {

            currentLang = lang;

            document.getElementById("lang-text").textContent = translations[lang];
            document.getElementById("lang-text1").textContent = translations1[lang];
            document.getElementById("lang-text2").textContent = translations2[lang];
            document.getElementById("lang-text3").textContent = translations3[lang];
            document.getElementById("lang-text4").textContent = translations4[lang];
            document.getElementById("lang-text5").textContent = translations5[lang];
            document.getElementById("lang-text6").textContent = translations6[lang];
            document.getElementById("lang-text7").textContent = translations7[lang];
            document.getElementById("lang-text8").textContent = translations8[lang];
            document.getElementById("lang-text9").textContent = translations9[lang];
            document.getElementById("lang-text10").textContent = translations10[lang];
            document.getElementById("lang-text11").textContent = translations11[lang];
            document.getElementById("lang-text12").textContent = translations12[lang];
            document.getElementById("lang-text13").textContent = translations13[lang];
            document.getElementById("lang-text14").textContent = translations14[lang];

            document.getElementById("btn-en").className = 
                "px-3 py-1 rounded border border-blue-500  text-blue-500 hover:bg-blue-50 transition-colors";
            document.getElementById("btn-de").className = 
                "px-3 py-1 rounded border border-blue-500  text-blue-500 hover:bg-blue-50 transition-colors";
            

            if (lang === "en") {
                document.getElementById("btn-en").className = 
                    "px-3 py-1 rounded border border-blue-500 bg-blue-500 text-white shadow-md";
            } else if (lang === "de") {
                document.getElementById("btn-de").className = 
                    "px-3 py-1 rounded border border-blue-500 bg-blue-500 text-white shadow-md";
            }
        }
        
        setLang('de');

