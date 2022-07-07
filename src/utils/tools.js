export function forMatKeyWord(array, key) {
    return array.map((item) => {
        item[key] = !item[key] ? item[key] : item[key].split(",");
        return item;
    });
}

export function jsonToArr(str) {
    return JSON.parse(str);
}

export function strToArr(str) {
    return str.split(",");
}

export function replaceToSpace(str) {
    return str.replace(/,/g, " ");
}

export function trimSpace(str) {
    return str.replace(/\s+/g, "");
}

export function throttle(fn, delay) {
    let t = null,
        begin = new Date().getTime();
    return function() {
        const args = arguments,
            _self = this,
            cur = new Date().getTime();
        clearTimeout(t);
        if (cur - begin >= delay) {
            fn.apply(_self, args);
            begin = cur;
        } else {
            t = setTimeout(() => {
                fn.apply(_self, args);
                begin = cur;
            }, delay - (cur - begin));
        }
    };
}