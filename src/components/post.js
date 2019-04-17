import React, {Component} from 'react';

export default class Post extends Component {

  render() {
    return(
      <a className="app-Post" href={this.props.link} rel="noopener" target="__blank">
        <h2>{this.props.title}</h2>
        <hr />
        <p>{this.props.subtitle}</p>
      </a>
    );
  }
}
