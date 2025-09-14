import React from 'react'
import Pie from './Pie';
import Header from '../../Components/Header';


export default function PieChart() {



  return (
    // the Parent must have height
    <>

    <Header title={"Pie Chart"} subTitle={"Simple Pie Chart"}/>

      <Pie/>
    </>
  );
}
