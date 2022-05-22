import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.showListItem = this.showListItem.bind(this);
    this.state = {
      listItem: null
    };
  }

  showListItem(event) {
    const array = this.props.list;
    const eventId = Number(event.target.id);
    if (this.state.listItem !== null && eventId !== this.state.listItem.id) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === eventId) {
          this.setState({ listItem: array[i] });
          return;
        }
      }
    } else if (this.state.listItem !== null) {
      this.setState({ listItem: null });
    } else {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === eventId) {
          this.setState({ listItem: array[i] });
          return;
        }
      }
    }
  }

  render() {
    let id = 0;
    let hidden = 'hidden';
    const list = this.props.list;
    let listItemId;
    if (this.state.listItem) {
      listItemId = this.state.listItem.id;
    }
    const topics =
      list.map(item => {
        id++;
        if (listItemId === id) {
          hidden = '';
        } else {
          hidden = 'hidden';
        }
        return (
          <div key={id.toString()}>
            <div className='title-div' id={id} onClick={this.showListItem} >
               {item.topic}
            </div>
            <p className= {hidden} > {item.content} </p>
          </div>
        );
      });
    return <div className='container'> {topics} </div>;
  }
}
