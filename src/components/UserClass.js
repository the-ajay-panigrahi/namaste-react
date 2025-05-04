import React from "react"
import Header from "./Header"

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
        console.log(this.props.name + " Child Constructor");

    }

    componentDidMount() {
        console.log(this.props.name + " Child Component Did Mount");
    }

    render() {
        const { name, location, contactInfo } = this.props
        console.log(name + " Child Render");
        let { count } = this.state
        return <div className="about-card">
            <h1>Count: {count}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : {contactInfo}</h4>
            <button onClick={() => {
                this.setState({
                    // count: this.state.count + 1
                    count: count + 1
                })
            }}>Count Increase</button>
            <Header />
        </div>
    }
}

export default UserClass
