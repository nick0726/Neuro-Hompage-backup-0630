import "./PurchaseHistoryPage.css";
import MaterialTable from "material-table";
import { tableData } from "../../data/tableData";
import { useState } from "react";
import Table from "../../components/Table";

const PurchaseHistoryPage = () => {
  return (
    <>
      <div className='purchase-box'>
        <div className='purchase-title'>
          <h1>구매 이력</h1>
          <div>고객님께서 구매하신 이력입니다.</div>
        </div>
        {/* <MTable /> */}
        <Table />
      </div>
    </>
  );

  // function MTable() {
  //   const [selectedRow, setSelectedRow] = useState(null);
  //   const columns = [
  //     { title: "Title", field: "title" },
  //     { title: "Author", field: "authors" },
  //     { title: "Page Count", field: "num_pages" },
  //     { title: "Rating", field: "rating" },
  //   ];
  //   return (
  //     <div style={{ maxWidth: "100%" }}>
  //       <MaterialTable
  //         columns={columns}
  //         data={tableData}
  //         title='Books Directory'
  //         onRowClick={(evt, selectedRow) =>
  //           setSelectedRow(selectedRow.tableData.id)
  //         }
  //         options={{
  //           search: false,
  //           rowStyle: (rowData) => ({
  //             backgroundColor:
  //               selectedRow === rowData.tableData.id ? "#67aeae" : "#FFF",
  //           }),
  //         }}
  //       />
  //     </div>
  //   );
  // }
};
export default PurchaseHistoryPage;
