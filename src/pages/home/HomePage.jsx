import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
    </Layout>
  );
};

export default HomePage;
