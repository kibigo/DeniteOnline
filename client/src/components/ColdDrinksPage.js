import React, { useState } from 'react';

const ColdDrinksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  // Placeholder product data with image URLs
  const products = [
    { id: 1, name: 'Del Monte Mixed Berry Juice 1L', category: 'Juices', price: 1.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h55/h2a/17213263544350/38584_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 2, name: 'Minute Maid Orange Pulpy Juice 1L', category: 'Juices', price: 2.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hf6/h86/47857493540894/1700Wx1700H_69002_main.jpg?im=Resize=400' },
    { id: 3, name: 'Pick N Peel White Grape Juice 1L', category: 'Juices', price: 3.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h16/h80/26449917542430/41076_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 4, name: 'Del Monte Cranberry Apple Juice 1L', category: 'Juices', price: 4.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h33/h5e/17213097738270/100298_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 5, name: 'Highlands Cordial Tropical Juice 3L', category: 'Juices', price: 5.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hf6/h26/49865986768926/1700Wx1700H_106817_main.jpg?im=Resize=400' },
    { id: 6, name: 'Coca Cola Soda 2L', category: 'Cold Drinks', price: 0.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hae/h7c/12462213529630/24181_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 7, name: 'Sprite Soda 2L', category: 'Cold Drinks', price: 1.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h80/ha5/12462215823390/24185_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 8, name: 'Fanta Orange soda 2L', category: 'Cold Drinks', price: 2.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h30/h27/17292082774046/24183_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 9, name: 'Coca Cola Soda Assorted 2L x Pack Of 4', category: 'Cold Drinks', price: 3.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h2a/h35/12681321807902/134140_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 10, name: 'Ribena Blackcurrant Juice 250ml', category: 'Cold Drinks', price: 0.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h4d/h5f/12462624735262/37138_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 11, name: 'Heineken Premium Quality 0.0 Non Alcoholic Beer 330ml', category: 'Cold Drinks', price: 1.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h2e/h44/27845782503454/148720_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 12, name: 'Schweppes Ginger Ale Tonic Water 330Ml', category: 'Cold Drinks', price: 2.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h42/hb6/34849917042718/1700Wx1700H_178181_main.jpg?im=Resize=400' },
    { id: 13, name: 'Quencher Life Premium Drinking Water 18L', category: 'Cold Drinks', price: 3.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h6e/h1c/12462987214878/17397_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 14, name: 'Waba Mineral Water 20L', category: 'Cold Drinks', price: 4.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h4d/h4e/16813704740894/60619_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 15, name: 'Aquaclear Drinking Water 300ml', category: 'Cold Drinks', price: 5.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h9b/h35/16890515947550/16142_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 16, name: 'Aquamist Lemon Natural Mineral Water 500ml', category: 'Cold Drinks', price: 6.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h58/had/45019205468190/1700Wx1700H_27888_main.jpg?im=Resize=400' },
    { id: 17, name: 'Red Bull Energy Drink 250ml x 4 Pieces', category: 'Cold Drinks', price: 7.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h47/hea/51240487682078/1700Wx1700H_43217_main.jpg?im=Resize=400' },
    { id: 18, name: 'Monster Original Energy Drink 500ml', category: 'Cold Drinks', price: 8.99, imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hea/h8a/16873019867166/33440_main.jpg_1700Wx1700H?im=Resize=400' },
    //add more
  ];

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => selectedPriceRange === 'All' || (selectedPriceRange === 'Low' && product.price < 1) || (selectedPriceRange === 'High' && product.price >= 1));

  return (
    <div className="container">
      <h1>Cold Drinks & Juices</h1>

      <div className="content">
        {/* Filter Card */}
        <div className="card filter-card">
          <div className="filter-section">
            <h2>Filters</h2>
            <div>
              <label>Category:</label>
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Cold Drinks">Cold Drinks</option>
                <option value="Juices">Juices</option>
              </select>
            </div>
            <div>
              <label>Price Range:</label>
              <select value={selectedPriceRange} onChange={e => setSelectedPriceRange(e.target.value)}>
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="card-container">
          {filteredProducts.map(product => (
            <div key={product.id} className="card">
              <img src={product.imageUrl} alt={product.name} />
              <label>{product.name}</label>
              <div className="card-details">
                <p>Category: {product.category}</p>
                <p>Price: Kshs.{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColdDrinksPage;