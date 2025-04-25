// const element = document.createElement("h1");
// element.innerHTML = "Namaste React Using JS!";

// const root = document.getElementById("root");
// root.appendChild(element);

// const element = React.createElement(
//     "h1",
//     {
//         title: "Jai Shree Ram",
//         id: "heading",
//     },
//     "Namaste!!"
// );

// const root = document.getElementById("root");

// const myRoot = ReactDOM.createRoot(root);

// myRoot.render(element);

// import React from "react";
// import ReactDOM from "react-dom/client"

// const parentElement = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" }, [
//         React.createElement("h1", {}, "I am an h1 tag."),
//         React.createElement("h2", { class: "styling" }, "I am an h2 tag."),
//     ]), React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "I am an h1 tag."),
//         React.createElement("h2", { class: "styling" }, "I am an h2 tag."),
//     ])
// ]);
// // We will be using JSX to tackle the above ugly syntax! 

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parentElement)

import React from "react";
import ReactDOM from "react-dom/client"


const heading = <h1>Namaste React 🚀</h1>

const HeadingComponent1 = () => {
    return <h1>Namsate React H1 😁</h1>
}

const HeadingComponent2 = () => (<h1>Namsate React H1 💖💖💖💖💖💖😡♾️🙏😃</h1>)


// const data = "<script>alert('XSS')</script>";
// const element = <div>{data}</div>;

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(HeadingComponent2())
root.render(element)
