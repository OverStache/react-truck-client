import React, { Component } from "react";
import API from "../../service";
import Content from "../../components/content";

class Index extends Component {
  state = {
    brands:[]
  }
  
  get = () => {
    API.getBrands().then(res => {
      this.setState({
        brands:res
      })
    })
  }
  
  componentDidMount() {
    this.get()
  }

  render() {
    return (
      <Content
        title={'brands'}
        data={this.state.brands}
      />
    )
  }
}

export default Index;