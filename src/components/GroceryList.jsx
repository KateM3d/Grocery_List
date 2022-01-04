import { Component } from "react";

export class GroceryList extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      groceryList: [],
    };
  }
  handleChangeInput(e) {
    this.setState({
      userInput: e,
    });
  }
  handleAddItem(input) {
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({ userInput: "", groceryList: listArray });
    console.log(listArray);
  }
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="What would you like to buy?"
          value={this.state.userInput}
          onChange={(e) => this.handleChangeInput(e.target.value)}
        />
        <button onClick={() => this.handleAddItem(this.state.userInput)}>
          Add
        </button>
        <ul>
          {this.state.groceryList.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </>
    );
  }
}
