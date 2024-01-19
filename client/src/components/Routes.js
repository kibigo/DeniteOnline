// Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";  // Update import path
import FruitsVegetablesPage from "./FruitsVegetablesPage";  // Update import path
import FeaturedBrandsPage from "./FeaturedBrandsPage";
import ColdDrinksPage from "./ColdDrinksPage";
import SnacksMunchiesPage from "./SnacksMunchies";  // Update import path
import Details from "./Details";
import { TopCategoriesPage } from "./TopCategoriesPart";

const AppRoutes = () => {
  return (
    <Routes>
    
      <Route path="/" element={<HomePage/>}/>
      <Route path="/top-categories" element={<TopCategoriesPage />} />
      <Route path="/fruits-and-vegetables" element={<FruitsVegetablesPage />} />
      <Route path="/featured-brands" element={<FeaturedBrandsPage />} />
      <Route path="/cold drinks-and-juices" element={<ColdDrinksPage />} />
       <Route path="/snacks-and-munchies" element={<SnacksMunchiesPage />}/>
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
