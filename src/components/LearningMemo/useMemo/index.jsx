import React, {useState, useMemo} from 'react';

const UseMemo = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
    const handleSubmit = ()=>{
        setProducts([...products, {
            name,
            price: parseInt(price)
        }])
    }
    const total = useMemo(()=>{
        console.log("Re-calculate")
        const result = products.reduce((result, prod)=>result += prod.price,0)
        return result;
    },[products])
    return (
        <div>
            <h2>Count total of cart</h2>
            <input 
            type="text" 
            placeholder="Enter name..." 
            value={name}
            onChange={e=>setName(e.target.value)}
            />
            <br />
            <input 
            type="text" 
            placeholder="Enter price..." 
            value={price}
            onChange={e=>setPrice(e.target.value)}
            />
            <br />
            Total: {total}
            <br />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {
                    products.map((product, index)=>
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>)
                }
            </ul>
        </div>
    );
}

export default UseMemo;
