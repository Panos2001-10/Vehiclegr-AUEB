// validation.js

// Επικύρωση ταιριάσματος των δύο password
function validatePasswordMatch()
{
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword)
    {
        document.getElementById('confirmPassword').setCustomValidity('Οι κωδικοί πρόσβασης δεν ταιριάζουν.');
    }
    else
    {
        document.getElementById('confirmPassword').setCustomValidity('');
    }

    document.getElementById('confirmPassword').reportValidity();
}

// Επικύρωση ηλικιακού ορίου χρήστη (π.χ., 18 ετών)
function validateUserAge()
{
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    if (age < 18)
    {
        document.getElementById('birthdate').setCustomValidity('Πρέπει να είστε τουλάχιστον 18 ετών.');
    } else
    {
        document.getElementById('birthdate').setCustomValidity('');
    }

    document.getElementById('birthdate').reportValidity();
}

// Επικύρωση τηλεφώνου επικοινωνίας
function validatePhoneNumber()
{
    const phonePattern = /^\d{10}$/;
    const phone = document.getElementById('phone').value;

    if (!phonePattern.test(phone))
    {
        document.getElementById('phone').setCustomValidity('Το τηλέφωνο πρέπει να έχει τη μορφή 6912345678.');
    } else
    {
        document.getElementById('phone').setCustomValidity('');
    }

    document.getElementById('phone').reportValidity();
}

// Προσθήκη event listeners για τα σχετικά πεδία
document.addEventListener('DOMContentLoaded', function ()
{
    document.getElementById('newPassword').addEventListener('input', validatePasswordMatch);
    document.getElementById('confirmPassword').addEventListener('input', validatePasswordMatch);
    document.getElementById('birthdate').addEventListener('input', validateUserAge);
    document.getElementById('phone').addEventListener('input', validatePhoneNumber);
});