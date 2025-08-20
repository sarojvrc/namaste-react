const heading = React.createElement("h1", { id: "heading" }, "Hello from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/*

<div>
    <h1>Hello from React!</h1>
    <h2>This is a H2 div coming from react!!</h2>
</div>
<div>
    <h2> This is a H2 div coming from react!!</h2>
</div>

*/


const h2 = React.createElement("h2", { id: "h2" }, "This is a H2 div coming from react!!");
const root2 = ReactDOM.createRoot(document.getElementById("root1"));
root2.render(h2);

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [
                React.createElement("h1", {}, "I am coming from h1!!!"),
                React.createElement("h2", {}, "I am coming from h2!!!")
            ]
        ),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", {}, "I am coming from h1!!!"),
                React.createElement("h2", {}, "I am coming from h2!!!")
            ]
        )
    ]
);

root2.render(parent);