import React from "react";

const Header = ({ title }) => (
    <div>
        <a href = "/login">Login</a>
        <h1> {title} </h1>
    </div>
);

export default Header;