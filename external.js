function onChange() {
    const password = document.querySelector('input[id=password]');
    const confirm = document.querySelector('input[id=confirm_password]');
    if (confirm.value === password.value) {
        confirm.setCustomValidity('');
        console.log('hi');
    }
    else {
        password.setCustomValidity('Passwords do no match');
        console.log('bye');
    }
}