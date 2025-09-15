
        let currentLang = 'de';
        
        const translations = {
            en: "CV PDF",
            de: "Lebenslauf PDF"
        };
        
        function setLang(lang) {

            currentLang = lang;

            document.getElementById("lang-text").textContent = translations[lang];

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

