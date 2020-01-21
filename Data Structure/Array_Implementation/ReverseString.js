function reverse(data) {
    if (!data || data.length < 2 || typeof data !== 'string') {
        return data;
    }

    let result = '';
    for (let i = data.length - 1; i >= 0; i--) {
        result += data[i];
    }
    return result;
}

function reverse2(data) {
    return data.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

console.log(reverse("Hello from the other side of the world"));
console.log(reverse2("Hello from the other side of the world"));
console.log(reverse3("Hello from the other side of the world"));

/*
Output:
dlrow eht fo edis rehto eht morf olleH
dlrow eht fo edis rehto eht morf olleH
dlrow eht fo edis rehto eht morf olleH
*/