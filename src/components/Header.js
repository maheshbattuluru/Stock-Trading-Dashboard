import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
    const [price, setPrice] = useState(null);
    const [change, setChange] = useState(null);

    useEffect(() => {
        // Fetch stock data from the API
        axios.get('https://finnhub.io/api/v1/quote?symbol=BRK.A&token=cr07cnpr01qh7uf2oc50cr07cnpr01qh7uf2oc5g')
            .then(response => {
                const { c: currentPrice, pc: previousClose } = response.data;
                // Calculate the change in price
                const priceChange = currentPrice - previousClose;
                setPrice(currentPrice);
                setChange(priceChange);
            })
            .catch(error => {
                console.error('Error fetching stock price:', error);
            });
    }, []);

    return (
        <div className="p-5">
            <h1 className="text-6xl mt-2 font-semibold relative">
                {price !== null ? price.toFixed(2) : 'Loading...'}
                <span className={`text-4xl absolute mt-1 top-[5px] text-gray-400 ${price==null?'hidden':''}`}>USD</span>
            </h1>
            <p className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {change !== null ? `${change > 0 ? '+' : ''}${change.toFixed(2)} (${((change / (price - change)) * 100).toFixed(2)}%)` : 'Loading...'}
            </p>
        </div>
    );
};

export default Header;
