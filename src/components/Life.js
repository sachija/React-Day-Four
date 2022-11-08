import React, { Component } from 'react'

export default class Life extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       favcolor:"red"
      }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favcolor:"yellow"})
        },1000)

}
  render() {
    return (
      <div>
       < h2 className='red'>Implementation of React Life Cycle</h2>
        <h2 className='color'>you will see the change after 2 seconds color will get change </h2>
        <h3 className='red'>my fav color is {this.state.favcolor}</h3> <hr></hr>
      </div>
    )
  }
}