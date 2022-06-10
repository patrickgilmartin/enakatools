import Amplify, { API } from 'aws-amplify';
import { useState, useEffect } from "react";
import awsconfig from '../../aws-exports';
import AllMarketTable from "../../components/market/AllTable";
import { zipArrays } from '../../helpers/helpers';
import { getESIAllMarket } from "../../stores/market.store";
import getESIItemNamesByID from "../../stores/items.store";

Amplify.configure(awsconfig);
API.configure(awsconfig);

function Market() {
    const [market, setMarket] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const marketItems = await getESIAllMarket();
            const items = await getESIItemNamesByID(marketItems, "type_id");
            const combinedMarketItems = zipArrays(marketItems, items, "type_id", "id");

            console.log(combinedMarketItems)
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
            <div className="container">
                <div className="row">
                    <AllMarketTable market={market} />
                </div>
            </div>
        </main>
    )
}

export default Market;