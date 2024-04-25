function validateForm() {
    let fnameValid = document.forms['myForm']['fname'].value;
    let lnameValid = document.forms['myForm']['lname'].value;
    let numValid = document.forms['myForm']['number'].value;
    let emailValid = document.forms['myForm']['email'].value;

    // getquote
    let mailValid = document.forms['QForm']['mail'].value;
    let numbValid = document.forms['QForm']['num'].value;

    const RegExpname = /[^a-z A-Z]/;
    const RegExpnum = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    const RegExpmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (RegExpname.test(fnameValid)) {
        alert('Name should be combined of letters only!')
        return false;
    }
    if (RegExpname.test(lnameValid)) {
        alert('Name should be combined of letters only!')
        return false;
    }
    if (RegExpmail.test(emailValid)) {
        alert('Enter a valid Email address!')
        return false;
    }
    if (!(RegExpnum.test(numValid))) {
        alert('Services only available in India!')
        return false;
    }

    // getquote validation

    if (RegExpmail.test(mailValid)) {
        alert('Enter a valid Email address!')
        return false;
    }
    if (!(RegExpnum.test(numbValid))) {
        alert('Services only available in India!')
        return false;
    }
    else {
        return true
    }
}