import { zipArrays } from 'helpers/helpers';
import { getESIAllMarketGroups, getESIAllMarket, getESIMarketGroupByID } from "stores/market.store";
import { localStore } from 'modules/storage';
import { getESINamesByID } from "stores/universe.store";

/**
 * Gets all market items from ESI then extracts the type_ids to pass back to ESI to get item 
 * names. Using these two arrays they are combined to return one master list with all both
 * arrays data together.
 * 
 * @returns {array}
 */
export async function getCombinedMarketItems() {
    const marketItems = await getESIAllMarket();
    const items = await getMarketItemIDs(marketItems);
    let combinedArrays = zipArrays(marketItems, items, "type_id", "id");
    return combinedArrays;
}

/**
 * Resolves all market items into named items with an identifying "id" that correlates to
 * "type_id".
 * 
 * @param {array} itemsArray If no market items are sent the function looks them up
 * @returns {array}
 */
export async function getMarketItemIDs(itemsArray = []) {
    const maxBatchSize = 450;
    if (itemsArray.length === 0) {
        itemsArray = await getESIAllMarket();
    }

    let returnItems = [];
    let lookupIDs = [];
    for (let item of itemsArray) {
        if (item.hasOwnProperty("type_id")) {
            lookupIDs.push(item["type_id"]);
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

export async function getMarketGroups() {
    const marketGroupIDs = await getESIAllMarketGroups();
    let marketGroups = [];
    for (let groupID of marketGroupIDs) {
        let marketGroup = await getESIMarketGroupByID(groupID);
        marketGroups.push(marketGroup);
    }
    console.log(marketGroups);
    return marketGroups;
}

export function storeMarketNamedItems(itemsArray) {
    localStore.set("market.named.items", itemsArray);
}