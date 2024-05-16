import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Faq from "./Faq";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Connect Students | Home</title>
            </Helmet>
            <Banner></Banner>

            <Faq></Faq>
        </>
    );
};

export default Home;