import React, { Component } from 'react';

class ItemListClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' }
            ]
        };
    }

    addItem = () => {
        const newItem = { id: this.state.items.length + 1, name: `Item ${this.state.items.length + 1}` };
        this.setState({
            items: [...this.state.items, newItem]
        });
    };

    deleteItem = (id) => {
        const updatedItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: updatedItems
        });
    };

    render() {
        return (
            <div>
                <h2>Item List (Class Component)</h2>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>
                            {item.name}
                            <button onClick={() => this.deleteItem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <button onClick={this.addItem}>Add Item</button>
            </div>
        );
    }
}

export default ItemListClass;
