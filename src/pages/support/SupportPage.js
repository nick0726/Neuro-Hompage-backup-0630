import "./SupportPage.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Productquery from "./Support_Product_Query";
import FAQ from "./Support_FAQ";
import QnA from "./Support_QnA";

const tabList = {
  0: <Productquery />,
  1: <FAQ />,
  2: <QnA />,
};

function SupportPage() {
  return (
    <>
      <div>
        <Productquery />
        <FAQ />
        <QnA />
        <Footer />
      </div>
    </>
  );
}

export default SupportPage;
