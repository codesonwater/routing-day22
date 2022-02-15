import React from "react";
import { Link } from "react-router-dom";

function CatchAll(){
    return (
        <>
        <h1> 404 Page not Found. So sorry, mate.</h1>
        <Link to='/'>Go Home</Link>
        </>
    );
}


export default CatchAll;