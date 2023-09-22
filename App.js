const parent= React.createElement("div", {}, React.createElement("div", {id: "child"}, [React.createElement("h1", {},"I'm H1 Tag"),React.createElement("h2", {},"I'm H2 Tag")]));

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);
