import './SupportPage.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Inquiry from './Support_Inquiry';
import FAQ from './Support_FAQ';
import QnA from './Support_QnA';

const tabList = {
  0: <Inquiry />,
  1: <FAQ />,
  2: <QnA />
};

function SupportPage() {
  return (
    <>
      <Header />
      <div>
        <Inquiry />
        <FAQ />
        <QnA />
      </div>
      <Footer />
    </>
  );
}

export default SupportPage;
