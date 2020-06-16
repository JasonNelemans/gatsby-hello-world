import React, { Component } from 'react';
import Layout from "../components/Layout";

export default class Counter extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div style={{ color: this.props.color }}>
        <Layout>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>Plus</button>
        <button onClick={() => {
          this.setState({
            count: this.state.count - 1
          })
        }}>Minus</button>
        </Layout>
      </div>
    )
  }
}
