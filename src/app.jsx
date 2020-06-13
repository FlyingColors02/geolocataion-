import React, { Component } from "react";
import FindMonth from "./date";
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            lat:null,
            lon:null,
            error:""
        }
        
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            this.setState({lat:position.coords.latitude});
            this.setState({lon:position.coords.longitude}); 
    },
            (error)=>{
            this.setState({error:error.message});
    
        })
    }
    render(){
        
        if(this.state.lat && this.state.lon && !this.state.error)
        {
        return (
            <>
            {/* <h1>latitude:{this.state.lat}</h1>
        <h1>longitude:{this.state.lon}</h1> */}
        <FindMonth lat={this.state.lat}/>
        </>
        )
        }
        else if(this.state.error && !this.state.lat && !this.state.lon){
            return(
                <>
                <h1>ERROR:{this.state.error}</h1>
                </>
            )
        }
        else{
            return(
                <h2>loading....</h2>
            )
        }
    }
}
export default App;