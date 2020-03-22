function inBetween(a, b) {
    return (function (x) {
        return x >= a && x <= b;
    });
}

function inArray(arr) {
    return function(x) {
        for (let i of arr) {
            if  (i === x)
            return x;
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
//alert( arr.filter(inBetween(3, 6)) );
alert( arr.filter(inArray([1, 2, 10])) );

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}