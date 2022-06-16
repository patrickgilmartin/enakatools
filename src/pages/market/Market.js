import Amplify, { API } from 'aws-amplify';
import { useState, useEffect } from "react";
import awsconfig from '../../aws-exports';
import { MarketSideMenu } from '../../components/market/SideMenu';
import { getCombinedMarketItems } from "../../contollers/market.controller";
import { getNamedRegions } from '../../contollers/region.controller';

Amplify.configure(awsconfig);
API.configure(awsconfig);

function Market() {
    const [market, setMarket] = useState([]);
    const [region, setRegion] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const combinedMarketItems = getCombinedMarketItems();
            const namedRegions = getNamedRegions();

            setMarket(combinedMarketItems);
        }
        fetchData();
    }, []);

    return (
        <main className="pt-5 mt-5">
            <div className="container mt-5">
                <div className="d-flex align-items-center p-3 my-3 text-white bg-dark rounded shadow-sm">
                    <img className="me-3" src="/assets/images/market.png" alt="" width="86" height="64" />
                    <div className="lh-1">
                        <h1 className="h6 mb-0 text-white lh-1">EVE Market</h1>
                        <small>{Date()}</small>
                    </div>
                </div>
            </div>
            <aside id='side'>
                <MarketSideMenu />
            </aside>
        </main>
    )
}

export default Market;