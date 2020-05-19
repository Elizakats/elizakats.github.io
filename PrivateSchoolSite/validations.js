(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.forEach.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === true) {
                    const answer = confirm("Are you sure you want to submit?");
                    if (answer === true) {
                        alert("Submit Succesful!");

                        // at edit/update forms; don't reload page
                        if (form.classList.contains("edit") ||
                            form.classList.contains("update")) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                    else {
                        event.preventDefault();
                        event.stopPropagation();
                        form.classList.add('was-validated');
                    }
                }
                else {
                    event.preventDefault();
                    event.stopPropagation();
                    form.classList.add('was-validated');
                }
            }, false);
        });
    }, false);
})();
