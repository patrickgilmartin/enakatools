import getESINamesByID from "./universe.store";

const maxBatchSize = 450;

/**
 * Resolves an array of items to a name object array
 * 
 * @param {Array} itemsArray Array of objects with key/value to lookup 
 * @param {String} lookupKey Key value to identify ID key name
 * @example
 * // Use lookupKey type_id 
 * getESIItemsByID([{type_id:18,...},...], "type_id");
 * @example
 * // Use lookupKey id
 * getESIItemsByID([{id:82903,...},...], "id");
 * @returns {array} [{"category": "...","id": ...,"name": "..."}]
 */
async function getESIItemNamesByID(itemsArray, lookupKey) {
    var returnItems = [];
    var lookupIDs = [];
    for (let item of itemsArray) {
        if (item.hasOwnProperty(lookupKey)) {
            lookupIDs.push(item[lookupKey]);
        }

        if (lookupIDs.length % maxBatchSize === 0) {
            let items = await getESINamesByID(lookupIDs);
            returnItems.push(...items);
            lookupIDs = [];
        }
    }

    if (lookupIDs.length > 0) {
        let items = await getESINamesByID(lookupIDs);
        returnItems.push(...items);
        lookupIDs = [];
    }

    return returnItems;
}

export default getESIItemNamesByID;