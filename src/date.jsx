import React from "react";
import "../src/style.css"
const CheckWether =(month,lat)=>{
    if(month>=3 && month<=6){
        return lat > 1 ? "summer" :"monsoon";
    }
    else{
        return lat < 0 ? "winter" :"monsoon";
    }
}

const FindMonth=(props)=>{
    let date=new  Date().getMonth()+1;
    console.log(date);
    let Report= CheckWether(date,props.lat);
    if(Report ==="summer"){
        return(   
            <div className={`container summer`}>
                <h1>Hey, This Is Summer Time.</h1>
            </div>  
            
            )
    }
    else if(Report ==="monsoon")
    {
        return( 
            <div className={`container monsoon`}>
                <h1>Open your Umbrella, Its Monsoon!! </h1>
            </div>      
            
            )
    }
    else{
        return(  
            <div className={`container winter`}>
                <h1>Get ready for SNOW!!</h1>
            </div>     
            
            )
    }

}
export default FindMonth;