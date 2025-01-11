window.onload = function () {
    window.addEventListener('scroll', function() {
        if (pageYOffset > 50) {
            document.querySelector('.header').classList.add('active')
        } else {
            document.querySelector('.header').classList.remove('active')
        }
    });

    let menu = document.getElementById('menu');

    document.getElementById('menu-icon').onclick = function () {
        menu.classList.add('open');
    }
    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            menu.classList.remove('open');
        }
    });

    let form = document.getElementById('form');
    let clientsName = form[0];
    let clientsEmail = form[1];
    let clientsPhone = form[2];
    let checkboxInput = form[3];
    let checkboxErrorMessage = document.getElementById('checkbox-error');

    document.getElementById('action-button').onclick = function () {
        form.scrollIntoView({behavior: "smooth"});
    };
    document.getElementById('advantage-button').onclick = function () {
        form.scrollIntoView({behavior: "smooth"});
    };
    document.getElementById('footer-button').onclick = function () {
        form.scrollIntoView({behavior: "smooth"});
    };

    checkboxInput.onchange = function () {
        if (this.checked) {
            console.log('Agreed');
            return true;
        } else {
            console.log('NOT agreed');
            return false;
        }
    }

    form.onsubmit = function (event) {
        event.preventDefault();

        if (validateForm(form) === false) {
            return false;
        } else {
            event.preventDefault();
            document.getElementById('popup').style.display = 'block';
        }
    }

    document.getElementById('popup-btn').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
    });

    function validateForm() {
        let isValid = true;

        if (!clientsName.value || !clientsName.value.match(/^[A-Z][a-z]+\s*$/)) {
            clientsName.classList.add('invalid');
            clientsName.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            clientsName.classList.remove('invalid');
            clientsName.nextElementSibling.style.display = 'none';
        }
        if (!clientsEmail.value || !clientsEmail.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
            clientsEmail.classList.add('invalid');
            clientsEmail.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            clientsEmail.classList.remove('invalid');
            clientsEmail.nextElementSibling.style.display = 'none';
        }

        if (!clientsPhone.value && !clientsPhone.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
            clientsPhone.classList.add('invalid');
            clientsPhone.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            clientsPhone.classList.remove('invalid');
            clientsPhone.nextElementSibling.style.display = 'none';
        }

        if (!checkboxInput.checked) {
            checkboxInput.classList.add('invalid');
            checkboxErrorMessage.style.display = 'block';
            isValid = false;
        } else {
            checkboxInput.classList.remove('invalid');
            checkboxErrorMessage.style.display = 'none';
        }
        return isValid;
    }

}
