
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Track from "../../components/track/Track";
const HomePage = () => {

    return (
        <Layout>
            <HeroSection/>
            <Category/>
            <HomePageProductCard/>
            <Track/>
            
        </Layout>
    );
}

export default HomePage;