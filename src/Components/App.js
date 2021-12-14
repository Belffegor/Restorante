import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "./sample-burgers";
import Burger from "./Burger";
import base from "../Base";

class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    // this.ref = base.syncState(`${this.props.match.params.restaurantId}`) или деструктуризацтя котороая выше
    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: "burgers",
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addBurger = (burger) => {
    // 1 делаем копию объекта state
    const burgers = { ...this.state.burgers };
    //2 в этот объект нужно добавить наш новый объект
    burgers[`burger${Date.now()}`] = burger;
    //3 записать наш новый объект burgers в state
    this.setState({ burgers });
  };

  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurgers });
  };

  addToOrder = (key) => {
    // 1 делаем копию объекта state
    const order = { ...this.state.order };
    // 2. добавляем ключ к заказу со значением 1, или обновить текущее значение
    order[key] = order[key] + 1 || 1;
    //3. записываем наш новый объект order в state
    this.setState({ order });
  };

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very hot Burger" />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map((key) => {
              return (
                <Burger
                  key={key}
                  index={key}
                  addToOrder={this.addToOrder}
                  details={this.state.burgers[key]}
                />
              );
            })}
          </ul>
        </div>
        <Order burgers={this.state.burgers} order={this.state.order} />
        <MenuAdmin
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
        />
      </div>
    );
  }
}

export default App;
