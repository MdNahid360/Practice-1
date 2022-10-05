function mode() {
    
 let toggleBtn = document.getElementById('toggleBtn');
                
                let body = document.body;

                let darkMode = localStorage.getItem('dark-mode');

                const enableDarkMode = () => {
                    toggleBtn.classList.replace('fa-sun', 'fa-moon');
                    body.classList.add('dark');
                    localStorage.setItem('dark-mode', 'enabled');
                }

                const disableDarkMode = () => {
                    toggleBtn.classList.replace('fa-moon', 'fa-sun');
                    body.classList.remove('dark');
                    localStorage.setItem('dark-mode', 'disable');
                }
                if (darkMode === 'enabled') {
                    enableDarkMode();
                }
                toggleBtn.onclick = () => {
                    darkMode = localStorage.getItem('dark-mode');
                    if (darkMode === 'disable') {
                        enableDarkMode();
                    } else {
                        disableDarkMode();
                    }
                }
}
mode();