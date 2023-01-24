import ProductsCard from "../../components/card";

function Home() {
  return (
    <div>
      <div>
        <img src={require('../../assets/img/banner.jpg')} alt="home-banner" className="banner-height w-100" />
      </div>
      <ProductsCard />
    </div>
  );
}
export default Home;