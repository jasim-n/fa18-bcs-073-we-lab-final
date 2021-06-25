import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "./../../services/ProductsService";
import Auth from "../auth/Auth";
const NewProduct = (props) => {
  const [team1, setTeam1] = React.useState("");
  const [team2, setTeam2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState("");
  const finalize=(e) => {
   if(checksame()){ productService
      .addProduct({ team1, team2,date,city })
      .then((data) => {
        console.log(data);
        props.history.push("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  }}
  const checksame=()=>{
    let a=1;
    if((!team1)&&(!team2)){
      alert("select both teams");
     a=0
    }
    if(!team1){
      alert("select for teams 1");
      a=0
    }
    if(!team2){
      alert("select for teams 2");
      a=0
    }
    if(!city){
      alert("enter city");
      a=0
    }
    if(!date){
      alert("enter date");
      a=0
    }
    return a;

  }
 let a=["Karachi Kings","Multan Sultans","Peshawar Zalmi","Lahore Qalanders","Islamabad United","Quetta Gladiators"]
  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Add New Product</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
        <select
        value={team1}
        onChange={(e) => setTeam1(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        {a.filter(c => c !== team2).map(s => (
  
      <option value={s}>{s}</option>
  
  ))}

        
      </select>
      <select
        value={team2}
        onChange={(e) => setTeam2(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        {a.filter(c => c !== team1).map(s => (
  
      <option value={s}>{s}</option>
  
  ))}</select>
         <TextField
            label="city"
            fullWidth
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <TextField
            label="date"
            fullWidth
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={finalize}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewProduct;
