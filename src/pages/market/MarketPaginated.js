import React, { useEffect, useState } from 'react';
import PaginatedTable from 'components/market/PaginatedTable';
import { getCombinedMarketItems } from "contollers/market.controller";
import "style.scss"

export default function MarketPaginated() {
    const [market, setMarket] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const combinedMarketItems = await getCombinedMarketItems();

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
                    <PaginatedTable market={market} />
                </div>
            </div>
        </main>
    );
}