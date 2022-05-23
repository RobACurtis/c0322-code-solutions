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
    const id = this.state.imageId;
    if (id > this.props.list.length - 2) {
      this.setState({ imageId: 0 });
    } else {
      this.setState({ imageId: id + 1 });
    }
    clearInterval(this.timerID);
    this.componentDidMount();
  }

  prevImg(e) {
    const id = this.state.imageId;
    if (id === 0) {
      this.setState({ imageId: this.props.list.length - 1 });
    } else {
      this.setState({ imageId: id - 1 });
    }
    clearInterval(this.timerID);
    this.componentDidMount();
  }

  selectImageByDot(e) {
    const targetID = e.target.id.split('-');
    const idNum = Number(targetID[1]);
    this.setState({ imageId: idNum - 1 });
    clearInterval(this.timerID);
    this.componentDidMount();
  }

  render() {
    let hidden;
    const images = this.props.list;
    let imageId = 0;
    const imgList = images.map(img => {
      if (imageId > images.length - 1) {
        imageId = 0;
      }
      if (imageId === this.state.imageId) {
        hidden = '';
      } else {
        hidden = 'hidden';
      }
      imageId++;
      return (
        <img key={imageId} src={img} alt="surfing" className={hidden}/>
      );
    });

    let circleClass;
    let circleId = 0;
    const circleButtons = images.map(img => {
      if (circleId === this.state.imageId) {
        circleClass = 'fas';
      } else {
        circleClass = 'far';
      }
      circleId++;
      return (
        <i id={`dot-${circleId}`} key={`circle-${circleId}`} className={`circle ${circleClass} fa-circle`} onClick={this.selectImageByDot}></i>
      );
    });

    return (
    <div className='container'>
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
  </div>
    );
  }
}
