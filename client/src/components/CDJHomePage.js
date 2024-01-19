
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { Details } from "./Details";

const DrinksPage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const drinksData = [
    { id: 1, name: 'Del Monte Mixed Berry Juice 1L', category: 'Juices', weight: '1L', price: 'Ksh 1.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h55/h2a/17213263544350/38584_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 2, name: 'Minute Maid Orange Pulpy Juice 1L', category: 'Juices', weight: '1L', price: 'Ksh 2.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hf6/h86/47857493540894/1700Wx1700H_69002_main.jpg?im=Resize=400' },
    { id: 3, name: 'Pick N Peel White Grape Juice 1L', category: 'Juices', weight: '1L', price: 'Ksh 3.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h16/h80/26449917542430/41076_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 4, name: 'Del Monte Cranberry Apple Juice 1L', category: 'Juices', weight: '1L', price: 'Ksh 4.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h33/h5e/17213097738270/100298_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 5, name: 'Highlands Cordial Tropical Juice 3L', category: 'Juices', weight: '3L', price: 'Ksh 5.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hf6/h26/49865986768926/1700Wx1700H_106817_main.jpg?im=Resize=400' },
    { id: 6, name: 'Coca Cola Soda 2L', category: 'Cold Drinks', weight: '2L', price: 'Ksh 0.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hae/h7c/12462213529630/24181_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 7, name: 'Sprite Soda 2L', category: 'Cold Drinks', weight: '2L', price: 'Ksh 1.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h80/ha5/12462215823390/24185_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 8, name: 'Fanta Orange soda 2L', category: 'Cold Drinks', weight: '2L', price: 'Ksh 2.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h30/h27/17292082774046/24183_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 9, name: 'Coca Cola Soda Assorted 2L x Pack Of 4', category: 'Cold Drinks', weight: '2L', price: 'Ksh 3.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h2a/h35/12681321807902/134140_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 10, name: 'Ribena Blackcurrant Juice 250ml', category: 'Cold Drinks', weight: '250ml', price: 'Ksh 0.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h4d/h5f/12462624735262/37138_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 11, name: 'Heineken Premium Quality 0.0 Non Alcoholic Beer 330ml', category: 'Cold Drinks', weight: '330ml', price: 'Ksh 1.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h2e/h44/27845782503454/148720_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 12, name: 'Schweppes Ginger Ale Tonic Water 330Ml', category: 'Cold Drinks', weight: '330ml', price: 'Ksh 2.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h42/hb6/34849917042718/1700Wx1700H_178181_main.jpg?im=Resize=400' },
    { id: 13, name: 'Quencher Life Premium Drinking Water 18L', category: 'Cold Drinks', weight: '18L', price: 'Ksh 3.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h6e/h1c/12462987214878/17397_Main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 14, name: 'Waba Mineral Water 20L', category: 'Cold Drinks', weight: '20L', price: 'Ksh 4.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h4d/h4e/16813704740894/60619_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 15, name: 'Aquaclear Drinking Water 300ml', category: 'Cold Drinks', weight: '300ml', price: 'Ksh 5.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h9b/h35/16890515947550/16142_main.jpg_1700Wx1700H?im=Resize=400' },
    { id: 16, name: 'Aquamist Lemon Natural Mineral Water 500ml', category: 'Cold Drinks', weight: '500ml', price: 'Ksh 6.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h58/had/45019205468190/1700Wx1700H_27888_main.jpg?im=Resize=400' },
    { id: 17, name: 'Red Bull Energy Drink 250ml x 4 Pieces', category: 'Cold Drinks', weight: '250ml', price: 'Ksh 7.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h47/hea/51240487682078/1700Wx1700H_43217_main.jpg?im=Resize=400' },
    { id: 18, name: 'Monster Energy Drink 500ml', category: 'Cold Drinks', weight: '500ml', price: 'Ksh 8.99', imageUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hea/h8a/16873019867166/33440_main.jpg_1700Wx1700H?im=Resize=400' },
];
  const details = drinksData.map((item) => (
    <Details
      key={item.id}
      name={item.name}
      url={item.imageUrl} 
      price={item.price}
      description={item.description}
      weight={item.weight} 
    />
  ));

  return (
    <div className="HomePage">
      <div className="shop-from-top-categories">
        <div className="top-categories-frame">
          <div className="title">
            <div className="shop-from-top-categories-parent">
              <div className="heading-wrapper">
                <h1 className="shop-from-top-container">
                  <span>{`Cold Drinks and  `}</span>
                  <span className="top-categories">Juices</span>
                </h1>
              </div>
              <div className="line-div" />
            </div>
            <div className="title-child" />
          </div>
        </div>
        <Carousel responsive={responsive}>{details}</Carousel>
      </div>
    </div>
  );
};

export default DrinksPage;