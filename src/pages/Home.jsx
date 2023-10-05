import { Layout } from "antd";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Bottom from "../components/Bottom";

const Home = () => {
    return (
        <>
            <Layout className="layout">
                <Navbar />
                <Body />
                <Bottom />
            </Layout>
        </>
    );
}

export default Home;