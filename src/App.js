import React from 'react';
import './App.css';
import Item from './Item.js'
import apples from './pictures/apples.jpg';
import oranges from './pictures/oranges.jpg';
import strawberries from './pictures/strawberries.jpg';
import kiwis from './pictures/kiwis.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applesCount: 0,
      orangesCount: 0,
      strawberriesCount: 0,
      kiwisCount: 0,
      applesPrice: 0,
      orangesPrice: 0.00,
      strawberriesPrice: 0.00,
      kiwisPrice: 0.00,
      total: 0.00
    }
  }

  incrementApples = () => {
    this.setState({applesCount: this.state.applesCount + 1});
    this.setState({applesPrice: this.state.applesPrice + 1.59});
    this.setState({total: this.state.total + 1.59});
  }
  decrementApples = () => {
    if (this.state.applesCount > 0) {
      this.setState({applesCount: this.state.applesCount - 1});
      this.setState({applesPrice: this.state.applesPrice - 1.59});
      this.setState({total: this.state.total - 1.59});
    }
  }
  incrementOranges = () => {
    this.setState({orangesCount: this.state.orangesCount + 1});
    this.setState({orangesPrice: this.state.orangesPrice + 1.88});
    this.setState({total: this.state.total + 1.88});
  }
  decrementOranges = () => {
    if (this.state.orangesCount > 0) {
      this.setState({orangesCount: this.state.orangesCount - 1});
      this.setState({orangesPrice: this.state.orangesPrice - 1.88});
      this.setState({total: this.state.total - 1.88});
    }
  }
  incrementStrawberries = () => {
    this.setState({strawberriesCount: this.state.strawberriesCount + 1});
    this.setState({strawberriesPrice: this.state.strawberriesPrice + 1.75});
    this.setState({total: this.state.total + 1.75});
  }
  decrementStrawberries = () => {
    if (this.state.strawberriesCount > 0) {
      this.setState({strawberriesCount: this.state.strawberriesCount - 1});
      this.setState({strawberriesPrice: this.state.strawberriesPrice - 1.75});
      this.setState({total: this.state.total - 1.75});
    }
  }
  incrementKiwis = () => {
    this.setState({kiwisCount: this.state.kiwisCount + 1});
    this.setState({kiwisPrice: this.state.kiwisPrice + 1.84});
    this.setState({total: this.state.total + 1.84});
  }
  decrementKiwis = () => {
    if (this.state.kiwisCount > 0) {
      this.setState({kiwisCount: this.state.kiwisCount - 1});
      this.setState({kiwisPrice: this.state.kiwisPrice - 1.84});
      this.setState({total: this.state.total - 1.84});
    }
  }

  calculateTotal = () => {
    this.setState({
      total: this.state.applesPrice + this.state.orangesPrice + this.state.strawberriesPrice + this.state.kiwisPrice 
    });
  }
  
  render() {
    return (
      <>
      <nav className="navbar-center bg-light py-3 mr-3 ml-3 mt-2 mb-2 border border-dark rounded">
        <h1 className="text-center display-4 mb-0">Delicious Fruit Market</h1>
      </nav>
      <div className="totalDiv p-1 pt-3 mb-0 border border-dark rounded">
        <h2 className="text-center mb-0">Your Total</h2>
        <h1 className="text-center mt-0">${(this.state.total).toFixed(2)}</h1>
      </div>
      <div className="row text-center m-2">
        <div className="col border border-dark rounded m-2 bg-white">
          <Item 
          fruitName='Apples'
          pricePerPound='$1.59 per pound'
          image={apples}
          quantity={this.state.applesCount}
          price={(this.state.applesPrice).toFixed(2)}
          adding={this.incrementApples}
          subtracting={this.decrementApples}
          />
        </div>
        <div className="col border border-dark rounded m-2 bg-white">
          <Item
          fruitName='Oranges'
          pricePerPound='$1.88 per pound'
          image={oranges}
          quantity={this.state.orangesCount}
          price={(this.state.orangesPrice).toFixed(2)}
          adding={this.incrementOranges}
          subtracting={this.decrementOranges}
          />
        </div>
        <div className="col border border-dark rounded m-2 bg-white">
          <Item
          fruitName='Strawberries'
          pricePerPound='$1.75 per pound'
          image={strawberries}
          quantity={this.state.strawberriesCount}
          price={(this.state.strawberriesPrice).toFixed(2)}
          adding={this.incrementStrawberries}
          subtracting={this.decrementStrawberries}
          />
        </div>
        <div className="col border border-dark rounded m-2 bg-white">
          <Item
          fruitName='Kiwis'
          pricePerPound='$1.84 per pound'
          image={kiwis}
          quantity={this.state.kiwisCount}
          price={(this.state.kiwisPrice).toFixed(2)}
          adding={this.incrementKiwis}
          subtracting={this.decrementKiwis}
          />
        </div>
      </div>
      </>
    )
  }
}

export default App;
