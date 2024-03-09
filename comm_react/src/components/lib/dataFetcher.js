import { useState, useEffect } from 'react';

const DataFetcher = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setTimeout(async () => {
                    const response = await fetch('https://fakestoreapi.com/products');
                    if (!response.ok) {
                        throw new Error('Failed to fetch products');
                    }
                    const data = await response.json();
                    setProducts(data);
                    setIsLoading(false);
                }, 2000);
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return children({ products, isLoading });
};

export default DataFetcher;