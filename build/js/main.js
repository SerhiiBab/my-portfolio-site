
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
        const translations15 = {
            en: "Built and customized websites on various CMS platforms such as WordPress, TYPO3, Joomla, and others.",
            de: "Websites auf verschiedenen CMS-Plattformen wie WordPress, TYPO3, Joomla und anderen erstellt und angepasst."
            };
        const translations16 = {
            en: "Implemented SEO optimization, accessibility standards, and performance improvements to ensure high-quality user experiences.",
            de: "SEO-Optimierung, Barrierefreiheitsstandards und Leistungsverbesserungen implementiert, um hochwertige Nutzererfahrungen zu gewährleisten."
            };
        const translations17 = {
            en: "Worked on and delivered scalable, maintainable, and modern digital solutions aligned with industry best practices.",
            de: "An skalierbaren, wartbaren und modernen digitalen Lösungen gearbeitet und diese gemäß den besten Branchenpraktiken umgesetzt."
            };
        const translations18 = {
            en: "- ECO-Retail  - Frontend Developer (Dec 2019 – Juni 2022)",
            de: "- Frontend Entwickler - ECO-Retail (Dec 2019 – Juni 2022"
            };
        const translations19 = {
            en: "Design and development of responsive web interfaces for desktop and mobile devices (HTML, CSS, JavaScript, React, Tailwind CSS)",
            de: "Gestaltung und Entwicklung von responsiven Web-Oberflächen für Desktop- und Mobilgeräte (HTML, CSS, JavaScript, React, Tailwind CSS)"
            };
        const translations20 = {
            en: "Implementation of user-friendly interfaces for product catalogs, special offers, and online shopping.",
            de: "Umsetzung benutzerfreundlicher Interfaces für Produktkataloge, Sonderangebote und OnlineShopping."
            };
        const translations21 = {
            en: "Integration of interactive elements as well as optimization of page performance and loading times for a better user experience.",
            de: "Integration interaktiver Elemente sowie Optimierung von Seitenleistung und Ladezeiten für ein besseres Nutzererlebnis."
            };
        const translations22 = {
            en: "Collaboration with marketing and content teams to implement visual concepts.",
            de: "Zusammenarbeit mit Marketing- und Content-Teams zur Umsetzung visueller Konzepte."
            };
        const translations23 = {
            en: "Integration of payment systems and other external services.",
            de: "Anbindung von Zahlungssystemen und weiteren externen Services."
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
            document.getElementById("lang-text15").textContent = translations15[lang];
            document.getElementById("lang-text16").textContent = translations16[lang];
            document.getElementById("lang-text17").textContent = translations17[lang];
            document.getElementById("lang-text18").textContent = translations18[lang];
            document.getElementById("lang-text19").textContent = translations19[lang];
            document.getElementById("lang-text20").textContent = translations20[lang];
            document.getElementById("lang-text21").textContent = translations21[lang];
            document.getElementById("lang-text22").textContent = translations22[lang];
            document.getElementById("lang-text23").textContent = translations23[lang];

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

