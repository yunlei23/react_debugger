import React,{Component} from 'react';
import './App.css';

class UpdateCounter extends Component{
  constructor(props) {
		super(props);
		this.state = {
			count: 0,
			text: '点击计数'
		};
    // 知道这里为什么要用bind吗？
		this.handleClick = this.handleClick.bind(this);
	}
  
  handleClick() {
    this.setState({
			count: this.state.count + 1
		});
  }
  
  render() {
		return (
			<div className="wrap-box">
				<button key="1" onClick={this.handleClick}>{this.state.text}</button>
				<span key="2" id="spanText" className="span-text">{this.state.count}</span>
			</div>
		)
	}
}

export default UpdateCounter;
