import { React } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";

const Home = () => {
  return (
    <div>
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default Home;
