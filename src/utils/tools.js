export function forMatKeyWord(array, key) {
    return array.map((item) => {
        item[key] = !item[key] ? item[key] : item[key].split(",");
        return item;
    });
}