import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
export default (props) => ( <
    Box py = { 10 }
    bgcoulor = "secondary.main"
    color = "white" >
    <
    Grid container justify = "center" >
    <
    Grid item xs = { 10 } >
    <
    Box display = "flex"
    justifyContent = "space-between" >
    <
    Typography variant = "h5" > joBsOnScroll < /Typography> <
    Button variant = "contained"
    color = "primary"
    disableElevation > { " " }
    Post a Job <
    /Button> <
    /Box> <
    /Grid> <
    /Grid> <
    /Box>
);