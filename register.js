document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.card .insidebox .box input');

    inputs.forEach(function (input) {
        const label = input.nextElementSibling;

        // Initially check for existing value or placeholder
        if (input.value.trim() !== '' || !input.placeholderShown) {
            label.classList.add('focused');
            label.style.transform = 'translate(0, -1.5em) scale(0.9, 0.9)';
        }

        input.addEventListener('input', function () {
            label.classList.add('focused');
        });

        input.addEventListener('focus', function () {
            label.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            if (this.value === '' && input.placeholderShown) {
                label.classList.remove('focused');
                label.style.transform = 'translate(0, 0) scale(1, 1)';
            }
        });

        input.addEventListener('focusout', function () {
            if (this.value.trim() !== '' || !input.placeholderShown) {
                label.style.transform = 'translate(0, -1.5em) scale(0.9, 0.9)';
            }
        });
    });
});

function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    var y = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["password"].value;
    var w = document.forms["myForm"]["address"].value;
    var s = document.forms["myForm"]["aadhar"].value;
    var aadhar = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
    if (x == "" || y == "" || z == "" || w == "" || !aadhar.test(s) || s == "") {
        alert("Please fill in all fields correctly");
        return false;
    }
    return true;
}

