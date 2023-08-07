// import ListRow from "./ListRow";
// import ListRowCell from "./ListRowCell";

// import ListHeader from "./ListHeader";
// import ListHeaderCell from "./ListHeaderCell";
// import timestamp from '../../assets/timeStamps.json'

// import styles from "./List.module.css";

// const List = ({ rows,currency,searchText }) => {

//   const getOrderId=(val)=>{
//     console.log(val)
//     for(let i=0;i<timestamp.results.length;i++){
//       if(timestamp.results[i]["&id"]===val){
//         return timestamp.results[i].timestamps.orderSubmitted
//       }
//     }
//   }

//   return (
//     <table className={styles.container}>
//       <thead>
//         <ListHeader>
//           <ListHeaderCell>Order ID</ListHeaderCell>
//           <ListHeaderCell>Buy/Sell</ListHeaderCell>
//           <ListHeaderCell>Country</ListHeaderCell>
//           <ListHeaderCell>Order Submitted</ListHeaderCell>
//           <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
//         </ListHeader>
//       </thead>
//       <tbody>
//         {rows.map((row) => (
//           <ListRow>
//             <ListRowCell>{row["&id"]}</ListRowCell>
//             <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
//             <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
//             <ListRowCell>{getOrderId(row["&id"])}</ListRowCell>
//             <ListRowCell>{row["bestExecutionData"]["orderVolume"][currency]}</ListRowCell>
//           </ListRow>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default List;
































import React, { useState,useEffect } from 'react';
import ListRow from './ListRow';
import ListRowCell from './ListRowCell';
import ListHeader from './ListHeader';
import ListHeaderCell from './ListHeaderCell';
import timestamp from '../../assets/timeStamps.json';
import styles from './List.module.css';

const List = ({ rows,setRow, currency, searchText }) => {
  if(searchText===''){
    setRow(rows)
  }

  const getOrderId = (val) => {
    for (let i = 0; i < timestamp.results.length; i++) {
      if (timestamp.results[i]['&id'] === val) {
        return timestamp.results[i].timestamps.orderSubmitted;
      }
    }
  };

  useEffect(() => {
  }, [rows]);
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
          <ListRow>
            
            <ListRowCell>{row['&id']}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{getOrderId(row['&id'])}</ListRowCell>
            <ListRowCell>{row['bestExecutionData']['orderVolume'][currency]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;

