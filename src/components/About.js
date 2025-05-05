// import { Component } from "react"
import React from "react"
import UserClass from "./UserClass"

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("Parent Constructor");
    }


    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");
        return (<>
            <h1>About US</h1>
            {/* <User name={"Ajay(fn)"} location={"Mumbai(fn)"} contactInfo={"Contact Info(fn)"} /> */}
            <UserClass name={"Ajay(class)"} location={"Mumbai(class)"} contactInfo={"Contact Info(class)"} />
        </>)
    }
}


export default About

// Parent Constructor
// Parent Render
// AJay Child Constructor
// AJay Child Render
// Header Constructor
// Header Render
// Ram Child Constructor
// Ram Child Render
// Header Constructor
// Header Render
// Vijay Child Constructor
// Vijay Child Render
// Header Constructor
// Header Render
// Header ComponentDidMount
// Ajay Didmount
// Header ComponentDidMount
// Ram Didmount
// Header ComponentDidMount
// Vijay Didmount
// Parent Didmount