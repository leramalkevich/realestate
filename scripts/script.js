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

    form[3].onchange = function () {
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
            alert('Please, enter your name.');
            isValid = false;
        }
        if (!clientsEmail.value || !clientsEmail.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
            alert('Please, enter your email.');
            isValid = false;
        }

        if (!clientsPhone.value && !clientsPhone.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
            alert('Please, enter your phone number.');
            isValid = false;
        }

        if (!form[3].checked) {
            alert('You should accept Privacy policy.');
            isValid = false;
        }

        return isValid;
    }

}
