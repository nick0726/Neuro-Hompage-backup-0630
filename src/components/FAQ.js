import React from "react";

const FAQ = (props) => {
  const isSelected = props.selected === props.idx;
  return (
    <>
      {isSelected ? (
        <FAQmodal
          faq={props.faq}
          idx={props.idx}
          isSelected={props.isSelected}
        />
      ) : (
        <div
          className='FAQ-contents'
          onClick={() => {
            props.setSelected(props.idx);
          }}
        >
          {/* title */}
          <div>
            <h5>Q {props.faq.title}</h5>
            {/* {console.log(props.faq)} */}
          </div>
        </div>
      )}
    </>
  );
};

function FAQmodal(props) {
  const style = {
    color: `${props.isSelected === true ? "black" : "#024abd"}`,
    backgroundColor: `${props.isSelected === true ? "white" : null}`,
  };
  return (
    <>
      <div className='FAQ-contents'>
        <h5 style={style}>
          <b style={style}>Q</b> {props.faq.title}
        </h5>
      </div>
      <div className='FAQ-contents-modal'>{props.faq.answer}</div>
    </>
  );
}

export default FAQ;
