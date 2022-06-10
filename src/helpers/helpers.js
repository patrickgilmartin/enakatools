
/**
 * Merge two arrays into a single array based on shared simlar property.
 * 
 * @param {array} firstArray 
 * @param {array} secondArray
 * @param {string} firstKey Property in firstArray
 * @param {string} secondKey Property in secondArray
 * @returns {array} Combined array
 * @example // returns [{type_id:18, price:1, id:18, name:"Plagioclase"}]
 * zipArrays({
 *  firstArray:[{type_id:18, price:1}], 
 *  secondArray:[{id:18, name:"Plagioclase"}], 
 *  firstKey: "type_id", 
 *  secondKey: "id"
 * })
 */
export function zipArrays(firstArray, secondArray, firstKey, secondKey) {
    if (!Array.isArray(firstArray)) throw new TypeError("First array is not an array.");
    if (!Array.isArray(secondArray)) throw new TypeError("Second array is not an array.");

    const map = new Map();
    firstArray.forEach(item => map.set(item[firstKey], item));
    secondArray.forEach(item => map.set(item[secondKey], { ...map.get(item[secondKey]), ...item }));
    let combinedArrays = Array.from(map.values());
    return combinedArrays;
}