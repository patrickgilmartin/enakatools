export const local = {
    get,
    set,
    remove
}

let cache = {};

let example = {
    enakatools: {
        market:{
            named: {
                items: [{}],
                lastUpdate: ''
            },
            groups: {
                named: [{}],
                lastUpdate: ''
            }
        },
        regions:[{}],
        corporations: [{}],
        characterID: {},
        structureID: {}
    }
}

/**
 * 
 * @param {*} itemName 
 * @param {*} defaultValue 
 * @returns 
 */
function get(itemName = '', defaultValue = '__noDefaultSupplied__') {
    if (checkForLocalStorage()) {
        const storageObject = JSON.parse(localStorage.getItem(itemName));
        //Check if present if not initialize
        if (storageObject === null) {
            if (defaultValue !== '__noDefaultSupplied__') {
                set(itemName, defaultValue);
                return defaultValue;
            }
            return null;
        }
        //Check for 'value' and if present if not initialize
        if (storageObject.hasOwnProperty('value')) {
            if (storageObject.value === null && defaultValue !== '__noDefaultSupplied__') {
                set(itemName, defaultValue);
                return defaultValue;
            }
            return storageObject.enakatools.value;
        }

        return null;
    } else {
        //If no localStorage available then use a temp cached object
        if (cache.hasOwnProperty(itemName))
            return cache[itemName];
        else if (defaultValue !== '__noDefaultSupplied__') {
            cache[itemName] = defaultValue;
            return defaultValue;
        }
        return null;
    }
}

function set(itemName = '', itemValue) {
    if (checkForLocalStorage()) {
        const valueToBeSerialized = { value: itemValue };
        const serializedValue = JSON.stringify(valueToBeSerialized);
        localStorage.setItem(itemName, serializedValue);
    } else {
        cache[itemName] = itemValue;
    }
    return itemValue;
}

function remove(itemName = '') {
    if (checkForLocalStorage())
        localStorage.removeItem(itemName);
    else if (cache.hasOwnProperty(itemName))
        delete cache[itemName];
    return true;
}

export function checkForLocalStorage() {
    try {
        const testKey = '__testKey___';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
};