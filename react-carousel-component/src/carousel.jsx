import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.selectImageByDot = this.selectImageByDot.bind(this);
    this.state = {
      imageId: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.nextImg(),
      3000
    );
  }

  nextImg(e) {
    const id = Number(this.state.imageId);
    if (id > this.props.list.length - 2) {
      this.setState({ imageId: 0 });
    } else {
      this.setState({ imageId: id + 1 });
    }
    clearInterval(this.timerID);
    this.componentDidMount();
  }

  prevImg(e) {
    const id = Number(this.state.imageId);
    if (id === 0) {
      this.setState({ imageId: this.props.list.length - 1 });
    } else {
      this.setState({ imageId: id - 1 });
    }
    clearInterval(this.timerID);
    this.componentDidMount();
  }

  selectImageByDot(event) {
    const targetID = event.target.id.split('-');
    const idNum = Number(targetID[1]);
    this.setState({ imageId: idNum - 1 });
    clearInterval(this.timerID);
    this.componentDidMount();
  }

  render() {
    let hidden = 'hidden';
    let circle = 'fas';
    const images = this.props.list;
    let id = 0;
    const imgList = images.map(img => {
      if (id > images.length - 1) {
        id = 0;
      }
      if (id === this.state.imageId) {
        hidden = '';
      } else {
        hidden = 'hidden';
      }
      id++;
      return (
        <img key={id} src={img} alt="surfing" className={hidden}/>
      );
    });
    id = 0;
    const circleButtons = images.map(img => {
      if (id === this.state.imageId) {
        circle = 'fas';
      } else {
        circle = 'far';
      }
      id++;
      return (
        <i id={`dot-${id}`} key={`circle-${id}`} className={`circle ${circle} fa-circle`} onClick={this.selectImageByDot}></i>
      );
    });
    return (<div className='container margin-top'>
      <div className="row">
        <div className="column-full center">
          <i onClick={this.prevImg} className="l arrow fas fa-angle-left"></i>
          <div className="img">
            {imgList}
            </div>
          <i onClick={this.nextImg} className="r arrow fas fa-angle-right"></i>
        </div>
      </div>
    <div className="row">
      <div className="circle column-full center">
          {circleButtons}
      </div>
    </div>
  </div>);
  }
}
