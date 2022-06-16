import { Table } from "react-bootstrap";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <>
      <div className='payment-box'>
        <div className='payment-title'>
          <h1>결제</h1>
        </div>
        <div className='cart'>
          <Cart />
        </div>

        <div className='order-form'>
          <div className='order-user-form'></div>
          <div className='refund-account'></div>
          <div className='payment'></div>
        </div>
      </div>
    </>
  );

  function Cart() {
    return (
      <>
        <div className='card-box'>
          <div className='product-image'></div>
          <div className='product-content'>
            <h6>NeuroEars-Anna</h6>
            <p>00,000,000원</p>
          </div>
          <div className='amount'>
            <button>+</button>
            <div className='count'>0</div>
            <button>-</button>
          </div>
          <div className='price'>
            <h6>원가</h6>
            <p>00,000,000</p>
          </div>
          <div className='discount'>
            <h6>할인</h6>
            <p>00,000,000</p>
          </div>
          <div className='total'>
            <h6>합계</h6>
            <p>00,000,000</p>
          </div>
        </div>
      </>
    );
  }
};
export default PaymentPage;
