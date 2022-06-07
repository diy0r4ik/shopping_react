import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  state = {
    id: 1,
    a: '',
    b: true,
    c: '',
    l: ['diyor'],
    o: {'name': 'diyor'}
  }
  my =() => {
    this.setState({id:this.state.id *2})
  }
  my2=() => {
    this.setState({a: document.querySelector('.inp').value})

  }
  my3=() => {
    var k =document.querySelector('.inp').value
    this.setState({l:this.state.l.concat([k])})
  }
  render() {
    return (
      
      <div>
        <button onClick={this.my}>KOP</button>
        {this.state.id}<br/><br/>

        <input type='text' className='inp'></input>
        <button onClick={this.my2}>click</button>  
        <h4>{this.state.a}</h4><br/>

        
        <button onClick={this.my3}>click</button>  
      <ul>   {this.state.l.map(item=>{
          return <li>{item}</li>
        })}
       
         
        </ul>
      </div>
    )
  }
}