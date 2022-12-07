import React from "react";
import { Card, CardHeader, CardTitle, Table } from "reactstrap";
import moment from "moment";
import axiosConfig from "../../../axiosConfig";
import { useState, useEffect } from "react";

const DispatchedOrders = () => {
  const [dealerTable, setDealerTable] = useState([]);
  // console.log(dealerTable._id);
  useEffect(() => {
    async function getStudent() {
      try {
        const dealerdata = await axiosConfig.get("/dealer/alldealers");
        // console.log(dealerdata.data);
        setDealerTable(dealerdata.data.data);
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }
    getStudent();
  }, []);

  return (
    <div></div>
    // <Card>
    //   <CardHeader>
    //     <CardTitle>Notified SOS</CardTitle>
    //   </CardHeader>
    //   <Table
    //     responsive
    //     className="dashboard-table table-hover-animation mb-0 mt-1"
    //   >
    //     <thead>
    //       <tr>
    //         <th>DEALER NAME</th>
    //         <th>EMAIL</th>
    //         <th>MOBILE NO</th>
    //         <th>DISTRICT</th>
    //         <th>STATE</th>
    //         <th>CREATE DATE</th>
    //         <th>UPDATE DATE</th>
    //       </tr>
    //     </thead>

    //     <tbody>
    //       {dealerTable.map((dealer, i) => {
    //         return (
    //           <tr key={i}>
    //             <td>{dealer.dealer_name}</td>
    //             <td>
               
    //               <span>{dealer.email}</span>
    //             </td>
    //             <td className="p-1">
    //               <ul className="list-unstyled users-list m-0 d-flex">
    //                 {dealer.mobile}
    //               </ul>
    //             </td>
    //             <td>{dealer.district}</td>
    //             <td>
    //               <span>{dealer.location}</span>
    //             </td>

    //             <td>{moment(dealer.createdAt).format("ll")} </td>
    //             <td>{moment(dealer.updatedAt).format("ll")} </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </Table>
    // </Card>
  );
};

export default DispatchedOrders;
