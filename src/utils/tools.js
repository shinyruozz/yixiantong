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