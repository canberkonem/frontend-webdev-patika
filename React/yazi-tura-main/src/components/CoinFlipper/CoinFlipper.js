import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      tura:0,
      yazi:0
    };
  }
  
  handleClick = () => {
    Math.random() <= 0.5 
    ? this.setState({side :"tura",
    tura: this.state.tura+1})
    : this.setState({side :"yazi",
    yazi: this.state.yazi+1});

    this.setState({ flipping: true });
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.tura + this.state.yazi} </strong>
          atıştan
          <strong> {this.state.tura} </strong> tura
          <strong> {this.state.yazi} </strong> yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
