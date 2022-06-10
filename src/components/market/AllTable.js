
const AllMarketTable = (props) => (
    <table className="table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">Item</th>
                <th scope="col">Name</th>
                <th scope="col">Adj Price</th>
                <th scope="col">Avg Price</th>
            </tr>
        </thead>
        <tbody>
            {props.market.map((item) => (
                <MarketRowItem key={item.type_id} item={item} />
            ))}
        </tbody>
    </table>
)

const MarketRowItem = ({ item }) => (
    <tr>
        <td><img src={`/assets/images/Types/${item.type_id}_32.png`} alt="item"></img></td>
        <td>{item.name}</td>
        <td>{item.adjusted_price}</td>
        <td>{item.average_price}</td>
    </tr>
)

export default AllMarketTable;