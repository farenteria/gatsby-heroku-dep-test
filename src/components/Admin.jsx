import React from "react";

class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    async componentDidMount(){
        let response = await fetch("http://localhost:1337/items");

        if(!response.ok){
            return;
        }

        let items = await response.json();
        this.setState({items: items});
    }

    render(){
        return(
            <div>
                <div className="user-container">
                    <input id="username" className="username" placeholder="Username"/>
                    <input id="password "className="password" placeholder="Password"/>
                    <button>Submit</button>
                </div>
                {
                    this.state.items.map((item, i) => (
                        <EditItem key={i} name={item.name} price={item.price} description={item.description} src={item.img}/>    
                    ))
                }
            </div>
        );
    }
}

function EditItem(props){
    return(
        <div className="edit-container">
            <img  className="edit-img" src={props.src}/>
            <input className="edit-name" value={props.name}/>
            <input className="edit-price" value={props.price}/>
            <textarea className="edit-desc" value={props.description}/>
        </div>
    );
}

export default Admin;