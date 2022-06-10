/**
 * Returns a name object array in reference to ID given. 
 * 
 * @param {array} idArray 
 * @returns {array}
 */
async function getESINamesByID(idArray) {
    let names = await fetch("https://esi.evetech.net/latest/universe/names/?datasource=tranquility", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(idArray)
    })
        .then(res => res.json())
        .then(json => {
            return json;
        });
    return names;
}

export default getESINamesByID;