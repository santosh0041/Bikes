import React from "react";


const Course = (props) => {
    console.log(props);
  return (
    <><br></br>
    <h1 className="Head">List Of Best Bikes</h1>
    <div className="parentBlock1">
    <div className="mainBlock">
    <img src={props.payload[0].BikePhoto} alt=""/>
    <h2>BIKE:{props.payload[0].BikeName}</h2>
    <h2>COMPANY:{props.payload[0].BikeCompany}</h2>
    <h2>FEATURES:{props.payload[0].Features.map((x)=>{
      return <li>{x}</li>
    })}</h2>
    <h2>MILEAGE:{props.payload[0].Mileage}</h2>
   </div>


   <div className="mainBlock">
    <img src={props.payload[1].BikePhoto} alt=""/>
    <h2>BIKE:{props.payload[1].BikeName}</h2>
    <h2>COMPANY:{props.payload[1].BikeCompany}</h2>
    <h2>FEATURES:{props.payload[1].Features.map((x)=>{
      return <li>{x}</li>
    })}</h2>
    <h2>MILEAGE:{props.payload[1].Mileage}</h2>
   </div>


   <div className="mainBlock">
    <img src={props.payload[2].BikePhoto} alt=""/>
    <h2>BIKE:{props.payload[2].BikeName}</h2>
    <h2>COMPANY:{props.payload[2].BikeCompany}</h2>
    <h2>FEATURES:{props.payload[2].Features.map((x)=>{
      return <li>{x}</li>
    })}</h2>
    <h2>MILEAGE:{props.payload[2].Mileage}</h2>
   </div>

   <div className="mainBlock">
    <img src={props.payload[3].BikePhoto} alt=""/>
    <h2>BIKE:{props.payload[3].BikeName}</h2>
    <h2>COMPANY:{props.payload[3].BikeCompany}</h2>
    <h2>FEATURES:{props.payload[3].Features.map((x)=>{
      return <li>{x}</li>
    })}</h2>
    <h2>MILEAGE:{props.payload[3].Mileage}</h2>
   </div>

   <div className="mainBlock">
    <img src={props.payload[4].BikePhoto} alt=""/>
    <h2>BIKE:{props.payload[4].BikeName}</h2>
    <h2>COMPANY:{props.payload[4].BikeCompany}</h2>
    <h2>FEATURES:{props.payload[4].Features.map((x)=>{
      return <li>{x}</li>
    })}</h2>
    <h2>MILEAGE:{props.payload[4].Mileage}</h2>
   </div>
   </div>

   <div className="parentBlock2">
   <div className="mainBlock">
    <img src={props.payload[5].BikePhoto} alt=""/>
    <h2>BIKE:{props.payload[5].BikeName}</h2>
    <h2>COMPANY:{props.payload[5].BikeCompany}</h2>
    <h2>FEATURES:{props.payload[5].Features.map((x)=>{
      
      return <li>{x}</li>
    })}</h2>
    <h2>MILEAGE:{props.payload[5].Mileage}</h2>
   </div>

   <div className="mainBlock">
    <img src={props.payload[6].BikePhoto} alt=""/>
    <h2>BIKE:{props.payload[6].BikeName}</h2>
    <h2>COMPANY:{props.payload[6].BikeCompany}</h2>
    <h2>FEATURES:{props.payload[6].Features.map((x)=>{
      return <li>{x}</li>
    })}</h2>
    <h2>MILEAGE:{props.payload[6].Mileage}</h2>
   </div>

   
   <div className="mainBlock">
    <img src={props.payload[7].BikePhoto} alt=""/>
    <h2>BIKE:{props.payload[7].BikeName}</h2>
    <h2>COMPANY:{props.payload[7].BikeCompany}</h2>
    <h2>FEATURES:{props.payload[7].Features.map((x)=>{
      return <li>{x}</li>
    })}</h2>
    <h2>MILEAGE:{props.payload[7].Mileage}</h2>
   </div>

   <div className="mainBlock">
    <img src={props.payload[8].BikePhoto} alt=""/>
    <h2>BIKE:{props.payload[8].BikeName}</h2>
    <h2>COMPANY:{props.payload[8].BikeCompany}</h2>
    <h2>FEATURES:{props.payload[8].Features.map((x)=>{
      return <li>{x}</li>
    })}</h2>
    <h2>MILEAGE:{props.payload[8].Mileage}</h2>
   </div>

   <div className="mainBlock">
    <img src={props.payload[9].BikePhoto} alt=""/>
    <h2>BIKE:{props.payload[9].BikeName}</h2>
    <h2>COMPANY:{props.payload[9].BikeCompany}</h2>
    <h2>FEATURES:{props.payload[9].Features.map((x)=>{
      return <li>{x}</li>
    })}</h2>
    <h2>MILEAGE:{props.payload[9].Mileage}</h2>
   </div>
  </div>
    </>
  )
}

export default Course