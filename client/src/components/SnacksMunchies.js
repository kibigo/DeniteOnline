import React, { useState } from 'react';

const SnacksMunchiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const products = [
    { id: 1, name: 'Tropical Heat Snacks Salted Crisps 50G', category: 'Snacks', weight: '50G', price: 'Ksh 1.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/he8/hf6/28550183551006/32275_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 2, name: 'Tropical Heat Snacks Waves Crisps Salted 30G', category: 'Snacks', weight: '30G', price: 'Ksh 2.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h7e/h2c/45843168657438/1700Wx1700H_32296_Main.jpg?im=Resize=400' },
    { id: 3, name: 'Norda Urban Stix BBQ Crunchy Corn Snacks 40g', category: 'Snacks', weight: '40g', price: 'Ksh 3.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h18/h62/12463226093598/47651_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 4, name: 'Wow Sugared Snacks 250g', category: 'Snacks', weight: '250g', price: 'Ksh 4.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hd3/h34/12462296432670/27607_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 5, name: 'Tropical Heat Snacks Cheese & Onion Crisps 200G', category: 'Snacks', weight: '200G', price: 'Ksh 5.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hb0/h34/28550185025566/32281_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 6, name: 'Tropical Heat Snacks Chilli Lemon Crisps 400G', category: 'Snacks', weight: '400G', price: 'Ksh 6.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h8a/he9/28550188433438/32290_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 7, name: 'Wow Sugared Snacks 100g', category: 'Snacks', weight: '100g', price: 'Ksh 7.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hd6/h34/12462295449630/27606_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 8, name: 'Bitez Crunchy Corn Barbeque Sauce Snack 30g', category: 'Snacks', weight: '30g', price: 'Ksh 8.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h1e/h83/16872247984158/82805_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 9, name: 'Kripsii Snack Salted 100G', category: 'Snacks', weight: '100G', price: 'Ksh 9.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h70/h80/33471201574942/34732_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 10, name: 'Haldiram\'s Indian Snacks Ratlami Sev 150g', category: 'Snacks', weight: '150g', price: 'Ksh 10.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h7c/hbe/27846372622366/2041_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 11, name: 'Haldiram’s Indian Snacks Soya Sticks 150g', category: 'Snacks', weight: '150g', price: 'Ksh 11.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h9a/hbb/27846364430366/2046_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 12, name: 'Haldirams Snacks Khatta Meetha 200G', category: 'Snacks', weight: '200G', price: 'Ksh 12.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/he2/h6a/26760646852638/2033_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 13, name: 'HALDIRAMS SNACKS ALOO BHUJIA 350G', category: 'Snacks', weight: '350G', price: 'Ksh 13.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h88/h7a/26760652423198/2057_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 14, name: 'Wots Bharti Ben Kenyan Indian Mix Bhusu Chevda 350g', category: 'Snacks', weight: '350g', price: 'Ksh 14.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h91/haf/44987225505822/1700Wx1700H_166706_main.jpg?im=Resize=400' },
    { id: 15, name: 'Krackles Tangy Tomato Potato Chips 30g', category: 'Snacks', weight: '30g', price: 'Ksh 15.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h44/he3/17385156476958/34680_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 16, name: 'Krackles Tingly Cheese And Onion Potato Chips 30g', category: 'Snacks', weight: '30g', price: 'Ksh 16.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h3c/h13/17385153855518/34682_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 17, name: 'Krackles Bang Bang Chilli Potato Chips 30g', category: 'Snacks', weight: '30g', price: 'Ksh 17.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hf1/h91/17385152217118/34679_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 18, name: 'Urban Bites Peri-Peri Potato Chips 120g', category: 'Snacks', weight: '120g', price: 'Ksh 18.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h64/h6f/32227152363550/177850_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 19, name: 'Urban Bites Party Paprika Tomato Potato Chips 120g', category: 'Snacks', weight: '120g', price: 'Ksh 19.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h64/h6f/32227152363550/177850_main.jpg_1700Wx1700H?im=Resize=400' }
  ];

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => selectedPriceRange === 'All' || (selectedPriceRange === 'Low' && product.price < 1) || (selectedPriceRange === 'High' && product.price >= 1));

  return (
    <div className="container">
      <h1>Snacks & Munchies</h1>

      <div className="content">
        {/* Filter Card */}
        <div className="card filter-card">
          <div className="filter-section">
            <h2>Filters</h2>
            <div>
              <label>Category:</label>
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Snacks">Snacks</option>
                <option value="Munchies">Munchies</option>
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

export default  SnacksMunchiesPage;