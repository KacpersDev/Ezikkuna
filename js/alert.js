const submitClick = () => {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let text = document.getElementById('text').value;

    // TO DO LATER, JUST SOME CHECKS MADE ONLY FOR EXAMPLE...

    if (name.length <= 2) {
        document.getElementById('alert').style.visibility = 'visible';
        document.getElementById('alert_text').innerHTML = 'Please enter name';
    } else if (surname.length <= 2) {
        document.getElementById('alert').style.visibility = 'visible';
        document.getElementById('alert_text').innerHTML = 'Please enter surname';
    } else if (email.length <= 4 && !email.includes("@") && !email.includes(".")) {
        document.getElementById('alert').style.visibility = 'visible';
        document.getElementById('alert_text').innerHTML = 'Please enter email';
    } else if (phone.length <= 7) {
        document.getElementById('alert').style.visibility = 'visible';
        document.getElementById('alert_text').innerHTML = 'Please enter phone';
    } else if (text.length <= 4) {
        document.getElementById('alert').style.visibility = 'visible';
        document.getElementById('alert_text').innerHTML = 'Please enter text';
    } else {
        document.getElementById('alert').style.visibility = 'hidden';
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('text').value = '';
    }
};