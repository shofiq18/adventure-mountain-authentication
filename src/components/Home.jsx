import Banner from "./Banner";
import Mail from "./Mail";
import Mountains from "./Mountains";
import Welcome from "./Welcome";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Mountains></Mountains>
            <Mail></Mail>
           
        </div>
    );
};

export default Home;