import { Box, ThemeProvider } from "@material-ui/core";
import React from "./theme/theme";
import { Box } from "./Components/header";

export default () => {
    return ( < ThemeProvider theme = { theme } >
        <
        Header / >
        <
        Grid container justify = "center" >
        <
        Grid item xs = { 10 } >
        <
        SearchBar / >
        <
        /Grid> <ThemeProvider / >
    );
};