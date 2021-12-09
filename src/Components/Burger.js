import React from "react";

class Burger extends React.Component {
  render() {
    // const image = this.props.details.image;
    // const name = this.props.details.name;
    // и передовать константы image, name
    // или так деструктуризацией
    // const {image, name} = this.props.details;

    const { image, name, price, desc, status } = this.props.details;

    return (
      <li className="menu-burger">
        <div className="image-container">
          {/* <img src={this.props.details.image} /> */}
          <img src={image} alt={name} />
        </div>
        <div className="burger-details">
          {/* <h3 className="burger-name">{this.props.details.name}</h3> */}
          <h3 className="burger-name">
            {name}
            <span className="price"> {price} ₽</span>
          </h3>
          <p> {desc}</p>
          <button className="buttonOrder">Заказать</button>
        </div>
      </li>
    );
  }
}

export default Burger;
