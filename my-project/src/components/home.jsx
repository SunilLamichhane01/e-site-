import CategoriesPage from "./categories/CategoriesHero";
import ContactUs from "./contact-us";
import Blogs from "./home/blogs";
import FlashSale from "./home/flash-sale";
import HomeHero from "./home/homehero";
import OtherInformation from "./home/other-information";
import PopularProduct from "./home/popular-product";
import ProductHero from "./home/ProductHero";
import YourPremier from "./home/Your-Premier";

const HomePage = () => {
  return (
    <div>
      <div>
        <HomeHero />
      </div>

      <div>
        <ProductHero />
      </div>
      <div>
        <FlashSale />
      </div>
      <div>
        <CategoriesPage />
      </div>
      <div>
        <YourPremier />
      </div>
      <div>
        <PopularProduct />
      </div>
      <div>
        <OtherInformation />
      </div>
      <div>
        <Blogs />
      </div>

      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;
