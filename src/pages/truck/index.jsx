import React, { Component } from "react";
import API from "../../service";
import Content from "../../components/content";

class Index extends Component {
  state = {
    trucks:[]
  }
  
  get = () => {
    API.getTrucks().then(res => {
      this.setState({
        trucks:res
      })
    })
  }
  
  componentDidMount() {
    this.get()
  }

  render() {
    return (
      <Content
        title={'trucks'}
        data={this.state.trucks}
        button={true}/>
    );
  }
}

export default Index;