import About from './components/About';
import React, { Component } from "react";
import Link from "umi/link";
import router from "umi/router";

export default function() {
    return (
        <div>
            User page
            <About />
            <Link to={`/login`}>test</Link>
        </div>
    )
}
