import Products from "../../components/products";

function Category() {
  return (
    <div>
      <div>
        <img src={require('../../assets/img/banner.jpg')} alt="home-banner" className="banner-height w-100" />
      </div>
      <Products />
    </div>
  );
}
export default Category;