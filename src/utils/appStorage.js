import lodash from "lodash";
export const localStore = {
    get,
    set,
    remove
}

let cache = {};

/**
 * 
 * @param {*} itemName 
 * @param {*} defaultValue 
 * @returns 
 */
function get(itemName = '', defaultValue = '__noDefaultSupplied__') {
    if (checkForLocalStorage()) {
        const storageObject = JSON.parse(localStorage.getItem('enakatools'));
        //Check if present if not initialize
        if (storageObject === null) {
            initializeStorage();
            if (defaultValue !== '__noDefaultSupplied__') {
                set(itemName, defaultValue);
                return defaultValue;
            }
            return null;
        }
        //Check for 'value' and if present if not initialize
        let property = itemName.includes(".") ? itemName.substr(0, itemName.indexOf(".")) : itemName;
        if (storageObject.hasOwnProperty(property) || property === "") {
            if (storageObject[property] === null && defaultValue !== '__noDefaultSupplied__') {
                set(itemName, defaultValue);
                return defaultValue;
            }
            return property === "" ? storageObject : lodash._.get(storageObject, itemName);
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
        let storageObject = get("");
        itemValue.lastUpdate = new Date().toISOString();
        lodash._.set(storageObject, itemName, itemValue);

        const serializedValue = JSON.stringify(storageObject);
        localStorage.setItem("enakatools", serializedValue);
        return itemValue;
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

function initializeStorage() {
    let initialStorageObject = {
        market: {
            named: {
                items: [{}],
                lastUpdate: ''
            },
            groups: {
                named: [{}],
                lastUpdate: ''
            }
        },
        regions: [{}],
        corporations: [{}],
        characterID: {},
        structureID: {}
    }
    localStorage.setItem("enakatools", JSON.stringify(initialStorageObject));
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