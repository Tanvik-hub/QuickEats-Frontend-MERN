import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';
import { Link } from 'react-router-dom';

const FirmCollections = () => {
    const [firmData, setFirmData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [activeCategory, setActiveCategory] = useState('all');

    const firmDataHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const newFirmData = await response.json();

            // ✅ Change 1: Ensure `newFirmData.vendors` is an array
            setFirmData(newFirmData.vendors || []); 

        } catch (error) {
            alert('Firm data not fetched');
            console.log(error);
        }
    };

    useEffect(() => {
        firmDataHandler();
    }, []);

    const filterHandler = (region, category) => {
        setSelectedRegion(region);
        setActiveCategory(category);
    };

    return (
        <>
            <h3>Restaurants with online food delivery in Hyderabad</h3>
            <div className="filterButtons">
                <button onClick={() => filterHandler("All", 'all')} className={activeCategory === 'all' ? 'activeButton' : ''}>All</button>
                <button onClick={() => filterHandler("South-Indian", 'south-indian')} className={activeCategory === 'south-indian' ? 'activeButton' : ''}>South-Indian</button>
                <button onClick={() => filterHandler("North-Indian", 'north-indian')} className={activeCategory === 'north-indian' ? 'activeButton' : ''}>North-Indian</button>
                <button onClick={() => filterHandler("Chinese", 'chinese')} className={activeCategory === 'chinese' ? 'activeButton' : ''}>Chinese</button>
                <button onClick={() => filterHandler("Bakery", 'bakery')} className={activeCategory === 'bakery' ? 'activeButton' : ''}>Bakery</button>
            </div>
            <section className='firmSection'>
                
                {firmData && firmData.length > 0 ? (
                    firmData.map((apple) => {
                        return apple.firm && apple.firm.map((item) => {
                            if (selectedRegion === "All" || item.region.includes(selectedRegion.toLowerCase())) {
                                return (
                                    // ✅ Change 3: Add `key` to each mapped element
                                    <Link to={`/products/${item._id}/${item.firmName}`} className='link' key={item._id}>
                                        <div className='firmGroupBox'>
                                            <div className='firmGroup'>
                                                <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} />
                                                <div className="firmOffer">
                                                    {item.offer}
                                                </div>
                                            </div>
                                            <div className='firmDetails'>
                                                <strong>{item.firmName}</strong>
                                                <div className='firmArea'>{item.region.join(', ')}</div>
                                                <div className='firmArea'>{item.area}</div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            }
                            return null; // Added a return for unmatched items
                        });
                    })
                ) : (
                    <p>No data available.</p> 
                )}
            </section>
        </>
    );
};

export default FirmCollections;
