import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import BestSellingProduct from "./BestSellingProduct";
import HairCare from "./HairCare"
import ReviewList from "./ReviewList";
import Reels from "./Reels";
import SkinCare from "./SkinCare"
import CollectionSection from "../../components/CollectionSection";
import PromotionBanner from "../../components/PromotionBanner";

const Home = () => {
  return (
    <>
      <div className="p-0 m-0 bg-[#fffdfa]">
        <Hero />
        <Category />
        <PromotionBanner 
          image="/snack.png" 
          alt="Traditional Snacks Banner"
          link="/product?category=Snacks" 
        />
<CollectionSection 
  title="Our Food Products " 
  subtext="tasty and healthy snacks" 
  categoryName="Food Products" 
/>

        <PromotionBanner 
          image="/skincare_1600x375.png" 
          alt="Skin and Hair Care Banner"
          link="/product?category=Skin And Hair" 
        />
<CollectionSection 
  title="Our Hair And Skin Care Collection" 
  subtext="Restore your hair's natural shine with our organic treatments." 
  categoryName="Skin And Hair" 
/>
      <PromotionBanner 
          image="/fabrics_banner.png" 
          alt="Traditional Fabrics Banner"
          link="/product?category=Fabrics" 
        />
<CollectionSection 
  title="Our Fabric Collections" 
  subtext="Best Quality Fabrics." 
  categoryName="Fabrics" 
/>
        {/* <Reels /> */}
        {/* <HairCare />
        <SkinCare /> */}
        <BestSellingProduct />
        <ReviewList />
      </div>
    </>
  );
};

export default Home;
