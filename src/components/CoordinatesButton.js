import React, {Component} from "react"

export default class CoordinatesButton extends Component {

  handleOnClick = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <button onClick={this.handleOnClick}></button>
    )
  }
}