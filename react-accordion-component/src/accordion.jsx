import React from 'react';

let id = 0;
let hidden = 'hidden';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.showListItem = this.showListItem.bind(this);
    this.state = {
      listItem: null
    };
  }

  showListItem(event) {
    hidden = '';
  }

  render() {
    const list = this.props.list;
    const topics =
      list.map(item => {
        id++;
        return (
          <div key={id.toString()}>
            <div className='title-div' id={id} onClick={this.showListItem} >
              <h3> {item.topic}</h3>
            </div>
            <p className={hidden} > {item.content} </p>
          </div>
        );
      });

    return <div className='container'> {topics} </div>;
  }
}
