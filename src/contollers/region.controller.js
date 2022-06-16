import { localStore } from '../utils/appStorage';
import getESINamesByID from "../stores/universe.store";
import getESIRegions from '../stores/region.store';

/**
 * 
 * @returns {array}
 */
export async function getNamedRegions() {
    let regionIDs = await getESIRegions();
    let regions = await getESINamesByID(regionIDs);

    return regions;
}