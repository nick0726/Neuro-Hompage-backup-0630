import React from "react";

const Specifications = () => {
  // const arr = new Array(9);
  return (
    <>
      <table border="1" bordercolor="#F7F7F7" width="1200" align="center">
        <thead>
          <th>구분</th>
          <th>최소샤앙</th>
          <th>권장사양</th>
        </thead>
        <tbody>
          {/* {arr.map((el, i) => {
            return (
              <tr key={i}>
                <td>Operating system</td>
                <td>test{i}</td>
                <td>test{i}</td>
              </tr>
            );
          })} */}
          <tr>
            <td>Operating system</td>
            <td>Windows 10 64 bit</td>
            <td>Windows 10 64 bit</td>
          </tr>
          <tr>
            <td>CPU</td>
            <td>Windows 10 64 bit</td>
            <td>Windows 10 64 bit</td>
          </tr>
          <tr>
            <td>메인보드</td>
            <td>Windows 10 64 bit</td>
            <td>Windows 10 64 bit</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>Windows 10 64 bit</td>
            <td>Windows 10 64 bit</td>
          </tr>
          <tr>
            <td>그래픽카드</td>
            <td>Windows 10 64 bit</td>
            <td>Windows 10 64 bit</td>
          </tr>
          <tr>
            <td>SSD</td>
            <td>Windows 10 64 bit</td>
            <td>Windows 10 64 bit</td>
          </tr>
          <tr>
            <td>Keyboard</td>
            <td>Windows 10 64 bit</td>
            <td>Windows 10 64 bit</td>
          </tr>
          <tr>
            <td>Mouse</td>
            <td>Windows 10 64 bit</td>
            <td>Windows 10 64 bit</td>
          </tr>
          <tr>
            <td>Display (동등사양이상)</td>
            <td>Windows 10 64 bit</td>
            <td>Windows 10 64 bit</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Specifications;
