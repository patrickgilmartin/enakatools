import Amplify, { API } from 'aws-amplify';
import { useState, useEffect } from "react";
import awsconfig from '../aws-exports';
import AllMarketTable from "../components/market/AllTable";

Amplify.configure(awsconfig);
API.configure(awsconfig);

const myAPI = "apie37b7d6f"
const path = '/rest';

function Market() {
    const [market, setMarket] = useState([]);

    useEffect(() => {
        API.get(myAPI, path + "/market/allMarketNames")
            .then(response => {
                console.log(response)
                let marketItems = [...market]
                marketItems.push(response)
                setMarket(marketItems);
            })
            .catch(error => {
                console.log(error)
            })
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