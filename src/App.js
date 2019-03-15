import React from 'react';
import styled from 'styled-components';
import './App.css';
import Tiles from  './components/Tiles';
import Weekdays from  './components/Weekdays';
import Modal from  './components/Modal';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10% auto 10%;`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.6em;
  color: white;
  border-radius: 0.2em;
  padding: 0.08em 0;
  margin: 0.2em 10%;
  Font-variant-numeric: tabular-nums;`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.months = ["January", "February", "March","April", "May","June","July","August","September","October","November","December"];
    this.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      events: [["Event"]],
      time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
      components: {modal: false}
    };
  }

  daysArray(numDays) {
    let temp = [];
    for (let i = 1; i <= numDays; i++)
      temp.push(i);
    return temp;
  }

   firstDay(){
    return (new Date(this.state.year, this.state.month , 1)).getDay() + 1;
  }

  numDays(month, year) {
    return 32 - new Date(year, month, 32).getDate();
  }

  changeMonth(i){
      if((this.state.month + i) < 0){
     this.setState({ year: this.state.year - 1, month: 11 });
   }else if((this.state.month + i)> 11){
       this.setState({ year: this.state.year + 1, month: 0});
    } else{
      this.setState({ month: this.state.month + i});
    }
  }

  getEvents(){
    fetch('http://localhost:3001/events:'+ 0)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });
  }

    componentWillMount() {
    this.setState({
      days: this.daysArray(this.numDays(this.state.month, this.state.year))
    });

    setInterval(()=>{this.setState({
       time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()})}, 1000);
  }

  render() {
    return (
      <div className="main">
        <Title>
          {this.months[this.state.month]}, {this.state.year}, {this.state.time}
        </Title>
        <Wrapper>
          <div className = "poop">
             <button className="bt" onClick={()=>{this.changeMonth(-1)}}> <i className="material-icons">chevron_left</i></button>
          </div>
        <Container>
          {this.weekdays.map(i => <Weekdays day={i}  key={i.toString()}/>)}

          {this.daysArray(this.numDays(this.state.month, this.state.year)).map(i => <Tiles day={i} firstDay={this.firstDay.bind(this)} event={this.state.events[0][0]}  key={i.toString()} click={()=>{ this.setState({components : {modal: true}})}}/>
          )
          }
        </Container>
        <div className = "poop">
          <button className="bt" onClick={()=>{this.changeMonth(1)}}><i className="material-icons">chevron_right</i></button>
         </div>
         <Modal show={this.state.components.modal} close={()=>{ this.setState({components : {modal: false}})}}/>
        </Wrapper>
      </div>
    );
  }
}

export default App;
