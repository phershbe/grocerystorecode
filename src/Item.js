import React from 'react';

class Item extends React.Component {
    increment = () => {
        this.props.adding();
        console.log('Being read');
    }

    decrement = () => {
        this.props.subtracting();
        console.log('Being read');
    }

    render() {
        return (
        <>
        <h1 className="m-0 mt-1">{this.props.fruitName}</h1>
        <h3 className="m-0 mb-2">{this.props.pricePerPound}</h3>
        <div className="pictureDiv">
        <img src={this.props.image} alt='fruit'/>
        </div>
        
        <div className="row d-flex justify-content-center mb-0 mt-2">
            <button onClick={this.decrement} className="btn-sm bg-white btn-outline-dark"><h1 className="mt-1">-</h1></button>
            <h1 className="m-2">{this.props.quantity}</h1>
            <button onClick={this.increment} className="btn-sm bg-white btn-outline-dark"><h1 className="mt-1">+</h1></button>
        </div>
        <h1 className="m-0 mb-2">${this.props.price}</h1>
        </>
        )
    }
}

export default Item;
