import React from "react";
import ReactDOM from "react-dom/client";

const App=()=>{
    return (
    
    <form className="form">
        <label htmlfor="imie">Wpisz swoje imię</label>
        <input type="text" id="imie"/>
        <button style={{backgroundColor: "blue", color: "white"}}>Wyslij</button>
    </form>
    )
}

let root =document.getElementById("root");
let place = ReactDOM.createRoot(root);
place.render(<App/>);