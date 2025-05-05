import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            userInfo: {
                name: "Ram"
            }
        }

        console.log("Constructor");

    }

    async componentDidMount() {
        console.log("Component Did Mount");
        this.timer = setInterval(() => {
            console.log("Ram");
        }, 1000);

        const data = await fetch("https://api.github.com/users/the-ajay-panigrahi")
        const jsonData = await data.json()
        console.log(jsonData);
        this.setState({
            userInfo: jsonData
        })

    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
        clearInterval(this.timer)

    }

    render() {
        const { name, avatar_url, bio } = this.state.userInfo
        let { count } = this.state
        return <div className="about-card">
            <img src={avatar_url} />
            <h2>Name : {name}</h2>
            <h3>Bio : {bio}</h3>
        </div>
    }
}

export default UserClass
