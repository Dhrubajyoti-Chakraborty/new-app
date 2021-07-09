import React, {Component} from 'react';


class Player extends Component {

    handleForm(e){

    	e.preventDefault();
    	this.props.player(e.target.player.value)
    }



	render(){

		return (
           <form onSubmit={(e) => this.handleForm(e)}>

                <label>
                Player x
                <input type="radio" name="player" value="x" />

                </label>

                   <label>
                Player o
                <input type="radio" name="player" value="o" />

                </label>

                <input type="submit" value="start" />


           </form>
           )
	}
		
}

export default Player;