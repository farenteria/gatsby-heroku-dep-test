import React from "react";

function Item(props){
    return(
        <div className="item-container">
            <img className="item-img" src={props.src}/>
            <div className="item-name">{props.name}</div>
            <div className="item-price">${props.price}</div>
            <div className="item-desc">{props.description}</div>
        </div>
    );
}

class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    async componentDidMount(){
        let response = await fetch("https://morning-shelf-23135.herokuapp.com/items");

        if(!response.ok){
            return;
        }

        let items = await response.json();
        this.setState({items: items});
    }

    render(){
        return(
            <div>
                {
                    this.state.items.map((item, i) => (
                        <Item key={i} name={item.Name} price={item.Price} description={item.Description} src={item.image}/>    
                    ))
                }
            </div>
        );
    }
}

export default Shop;