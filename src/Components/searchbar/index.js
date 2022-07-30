import React from "react";
import { Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: "#fff",
        display: "flex",
        boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        "&>*": {
            flex: 1,
            height: "45px",
            margin: "8px",
        },
    },
});

export default (props) => {
    const classes = useStyles();
    return ( <
        Box className = { classes.wrapper } >
        <
        Select disableUnderline variant = "filled"
        default value = "Full time" >
        <
        MenuItem value = "Full time" > Full time < /MenuItem>{" "} <
        MenuItem value = "Part time" > Part time < /MenuItem>{" "} <
        MenuItem value = "Internships" > Internships < /MenuItem>{" "} <
        MenuItem value = "Freelancing" > Freelancing < /MenuItem>{" "} <
        /Select>{" "} <
        Select disableUnderline variant = "filled"
        default value = "Remote" >
        <
        MenuItem value = "Remote" > Remote < /MenuItem>{" "} <
        MenuItem value = "In-Office" > In - Office < /MenuItem>{" "} <
        /Select>{" "} <
        Button variant = "contained"
        color = "primary"
        disableElevation >
        Search { " " } <
        /Button>{" "} <
        /Box>
    );
};