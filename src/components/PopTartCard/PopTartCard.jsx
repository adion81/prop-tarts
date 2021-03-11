import React, { Component} from 'react';


class PopTartCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            bites: this.props.bites
        }

        
    }

    handleBite(){
        this.setState({bites:this.state.bites + 1});
        this.props.chompIt();
    }


    render () {
        const {name,calories,isFrosted,img} = this.props;
        return (
            <div className="card col-3 text-center">
                <img src={img} alt={name} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">Calories: {calories}</p>
                    <p className="card-text">IsFrosted: { isFrosted ? "Yes" : "No" }</p>
                    <p className="card-text"># of Bites: {this.state.bites}</p>
                    <button onClick={() => this.handleBite()} >Bite</button>
                </div>
            </div>

        );
    }
    
}

export default PopTartCard;