export default function convert(array) {
    return Object.keys(array).reduce((acc, key) => {
        const innerObject = array[key]
        const innerKey = Object.keys(innerObject)[0]
        acc[innerKey] = innerObject[innerKey]
        return acc
    }, {})
}