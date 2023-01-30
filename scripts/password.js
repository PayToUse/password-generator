    function generatePassword() {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~';
            let password = '';
        for (i = 0; i < 15; i++) {
                password += characters.charAt(Math.floor(Math.random() * characters.length));
            };
        document.getElementById('password').innerHTML = password;
        }
    document.getElementById('generateBtn').addEventListener('click', generatePassword);
