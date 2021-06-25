import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={4}>
      <h2>
        <div style={{margin:"20px", color:"red"}}>Team 1:{product.team1}   </div>
        <div  style={{marginLeft:"20px"}}>VS</div>
        <div style={{margin:"20px", color:"blue"}}>Team 2:{product.team2}</div>  
        <div style={{margin:"20px",}}>city:{product.city}</div>    
        <div style={{margin:"20px",}}>date:{product.date}</div> 

       
      </h2>
     
      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
