import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
        time: 0,
        showTime: true,
        date : new Date()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
      clearInterval(this.timerId);
  }

  componentDidUpdate(){
    if (this.state.showTime === true){
      if (this.state.time <= 0){
        this.setState({showTime: false})
      }
    }
  }

  tick() {
      this.setState({
        time: this.state.time - 1,
        date: new Date()
      });
  }  


  render() {
    return(
      <div style={{textAlign:"center"}}>
        {
          this.state.showTime && 
            (<>
                <h1 style={{float:"left", display:"inline-block", paddingLeft:"30px"}}>
                  jam sekarang - {this.state.date.toLocaleTimeString()}
                </h1>
                <h1 style={{float:"right", display:"inline-block", paddingRight:"30px"}}>
                  Hitungan Mundur : {this.state.time}
                </h1>
            </>)
        }
      </div>
    )
  }
}


export default Clock
