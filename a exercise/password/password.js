function passwordScope() {
    const form = document.getElementById('passwordForm')
    const input = document.getElementById('passwordInput')
    const result = document.getElementById('result')

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const password = input.value;
        const strength = checkPassword(password);

        result.textContent = strength;
    });

    function checkPassword(password){
        if(password.length < 6) {
            return "Weak";
        }

        const hasNumber = /\d/.test(password);
        const hasLetter = /[a-zA-Z]/.test(password); 
        const hasSpecial = /[!@#$%^&*]/.test(password);

        if(password.length >= 8 && hasNumber && hasLetter && hasSpecial) {
            return "Strong";
        };

        if(password.length >= 6 && hasLetter && hasNumber) {
            return "Medium";
        }

        return "Weak"
    };
}
passwordScope();