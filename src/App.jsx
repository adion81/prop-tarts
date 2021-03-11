import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopTartCard from './components/PopTartCard/PopTartCard';
import ash from './assets/images/ashTray.jpeg';
import bigMac from './assets/images/bigMac.jpeg';
import budLight from './assets/images/budLight.jpeg';
import {Component} from 'react';


class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      chomps:9
    }

    this.chomp = this.chomp.bind(this);
  }

  chomp(){
    this.setState({chomps:this.state.chomps + 1});
  }
  render() {
    return (
      <div className="jumbotron">
      <h2 className="text-center text-danger">Chomps : {this.state.chomps}</h2>
      <div className="d-flex flex-wrap justify-content-evenly">
        <PopTartCard 
          name="Ash Tray" 
          calories={1000} 
          isFrosted={true}
          img={ash}
          chompIt={this.chomp}
          bites={2}
        />
        <PopTartCard 
          name="Big Mac" 
          calories={6000} 
          isFrosted={true}
          img={bigMac}
          chompIt={this.chomp}
          bites={3}
        />
        <PopTartCard 
          name="Bud Light" 
          calories={45} 
          isFrosted={true}
          img={budLight}
          chompIt={this.chomp}
          bites={4}
        />
      </div>
      </div>

    );

  }
}

export default App;
