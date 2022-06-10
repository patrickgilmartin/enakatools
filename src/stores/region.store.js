/**
 * Returns a set of all region IDs.
 * 
 * @returns {array}
 */
async function getESIRegions() {
    let payload = await fetch("https://esi.evetech.net/latest/universe/regions/?datasource=tranquility")
        .then(res => res.json())
        .then(json => {
            return json;
        });

    return payload;
}

export default getESIRegions;