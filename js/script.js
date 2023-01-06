a = '';
let b = '';
c = true;
sign = true;
v1 = document.querySelector('#field');
v2 = document.querySelector('#vvod')
v2.value = 0;

Clik = (event) => {
    content = event.target.textContent;
    switch (content) {
        case '/':
            if (sign) {
                a = div(a);
                v1.value = b;
                v2.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case '*':
            if (sign) {
                a = mnog(a);
                v1.value = b;
                v2.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case '+':
            if (sign) {
                a = sum(a);
                v1.value = b;
                v2.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case '-':
            if (sign) {
                a = minus(a);
                v1.value = b;
                v2.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case 'C':
            a = clear(a);
            v2.value = a;
            v1.value = a;
            a = '';
            break;
        case '←':
            a = remElem(a);
            v2.value = a;
            v1.value = b + a;
            break;
        case '=':
            a = calc(a);
            v2.value = a;
            v1.value = '';
            b = '';
            a = '';
            break;
        case '.':
            a = dot(a);
            v2.value = a;
            v1.value = b + a;
            break;
        default:
            sign = true;
            a += event.target.textContent;
            v1.value = b + a;
            v2.value = a;
    }
};


calc = (a) => {
    a = eval(b + a);
    c = true;
    sign = true;
    return a;
}

clear = (a) => {
    a = '0';
    b = '';
    c = true;
    sign = true;
    return a;
}

remElem = (a) => {

    if (!a == '') {
        console.log(1);
        a = a.substr(0, a.length - 1);
        b += a;
        b = b.substr(0, b.length - a.length);
    } else {
        console.log(12);
        b = '';
        return 0;
    }

    return a;
}

dot = (a) => {
    if (c) {
        a += '.';
        c = false;
        return a;
    }
    else return a;
}

sum = (a) => {
    if (sign) {
        b += a + ' +'
        a = '+';
        c = true;
        sign = false;
        return a;
    } else return a;
}

minus = (a) => {
    if (sign) {
        b += a + ' -';
        a = '- ';
        c = true;
        sign = false;
        return a;
    } else return a;
}

mnog = (a) => {
    if (sign) {
        b += a + ' *';
        a = '* ';
        c = true;
        sign = false;
        return a;
    } else return a;
}

div = (a) => {
    if (sign) {
        b += a + ' /';
        a = '/ ';
        c = true;
        sign = false;
        return a;
    } else return a;
}

document.querySelectorAll("td").forEach(element => {
    element.addEventListener("click", Clik);
}) 