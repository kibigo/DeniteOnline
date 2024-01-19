import React from "react";

import TopCategoriesPage  from "./TopCategoriesPage";
import FruitsVegPage from "./FVHomePage";
import FeaturedBrandsPage from "./FeaturedBrandsPage";
import ColdDrinksPage from "./CDJHomePage";
import SnacksPage from "./SCHomePage";
const HomePage = () => {
  return (
    <div>
      <TopCategoriesPage/>
      <FruitsVegPage />
      <FeaturedBrandsPage />
      <ColdDrinksPage/>
      <SnacksPage/>

      
      
    </div>
  );
};

export default HomePage;
