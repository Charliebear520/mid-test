import { Helmet } from "react-helmet-async";
import { theme } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import IGList from "../components/IGList/Index";
import photos from "../json/igphotos.json";
import CategoryList from "../components/CategoryList";
import categories from "../json/category.json";
import Intro from "../components/Intro";
import DetailList from "../components/DetailList";
import DetailList2 from "../components/DetailList2";

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "HEAD & SHOULDER";

  return (
    <div className="mainLayout">
      <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
      <Header className="layoutHeader" title={title} slogan="HIAR" />
      <div className="layoutContent container ">
        <Intro />
        <CategoryList categories={categories} />
        <DetailList />
        <DetailList2 />

        <IGList photos={photos} />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
