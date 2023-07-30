const user = {
    age: 27,
    password: "qwertyui",
    agreeToTerms: true
}

const user2 = {
    age: 17,
    password: "qwertyu11i",
    agreeToTerms: false
}

function checkAge(user) {
    return user.age > 18;
}
function checkPassword(user) {
    return user.password.length >= 8;
}
function checkTerms(user) {
    return user.agreeToTerms === true;
}

function validator(...tests) {
    return function (obj) {
        for (let i = 0; i < tests.length; i++) {
            if (tests[i](obj) === false) return false;
        }
        return true;
    }
}

const val1 = validator(checkAge, checkPassword, checkTerms);
console.log(val1(user));
const val2 = validator(checkAge, checkPassword);
console.log(val2(user2));

