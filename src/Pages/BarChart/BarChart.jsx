import React from 'react'
import Bar from './Bar';
import Header from '../../Components/Header';




export default function BarChart() {

  return (
    // Bar chart | nivo
    <>

     <Header title={"Bar chart"} subTitle={"The minimum wage in Germany , France , Spain and Egypt (EUR/month)"}/>

      <Bar/>
    </>
  );
}
