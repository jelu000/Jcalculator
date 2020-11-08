import React, { Component } from 'react'

export default class Jcalculator extends Component {

  constructor(){
    super();

    this.state = {
      resultat: ""

    }
      //console.log(this.state.resultat);
     //Måste binda events i react om man ej använder arrowfucktions
     this.setcalcText = this.setcalcText.bind(this);

     //Om man inte vill använda bind() i event funktioner i constructor så kan arrowfunctions-lambdafunction används
     /*
     alt1
     setcalcText = () => {    this.setState({resultat: event.target.name});  }

     vid anrop i htmlkod i render:
     <button onClick={   this.setcalcText}   }>

     alt2
     setcalcText() {  this.setState({resultat: event.target.name});  }
     vid anrop i htmlkod i render:
     <button onClick={   () => this.setcalcText()   }>
     */
   }//End of constructor



   setcalcText(event) {


     //Kan använda andra attribut som value: ex let knappnum =+ event.target.value;
     let knappnum_string = event.target.name.toString();// för välja rätt knapp

     var tempresultat = this.state.resultat + event.target.name;
     this.setState({resultat: tempresultat});


     if(knappnum_string ==="="){//knappnum === "C" isNaN(knappnum)

        try {
          let svaret = eval(this.state.resultat);
          console.log("Inne if =" + svaret);
          this.setState({resultat: tempresultat+svaret });
        }
        catch (e){
          this.setState({resultat: "Syntax error!"});
        }
    }

    else if(knappnum_string === "C"){
        console.log("Else If C ");
        this.setState({resultat: "" });
    }

    else if(knappnum_string === "CE"){
        console.log("Else If CE ");
        let svaret = this.state.resultat;
        svaret = svaret.substring(0, svaret.length - 1);
        console.log("Inne if =" + svaret);
        this.setState({resultat: svaret });
    }

  };//End of


  //Här händer det, dvs sida renderas! wrap="off" cols="30" rows="5">
  render() {

    var bodystyle = {
      backgroundColor: "#EAF2F8",
      padding: 10

    };


    var buttonstyle1 = {
      fontSize: "large",
      width: 60,
      height: 60,
      margin: 5
    };


    return (
      <div style={bodystyle}>
        <h3>Enkel Kalkylator i React!</h3>
          <p>av {this.props.mess}</p>


          <div>
            <textarea id="tf1"rows="6" cols="26" onChange={this.setcalcText} value={this.state.resultat}>{this.state.resultat}</textarea>
          </div>

          <div className="button">
            <button name="1" type="button" style={buttonstyle1} onClick={this.setcalcText}>1</button>
            <button name="2" type="button" style={buttonstyle1} onClick={this.setcalcText}>2</button>
            <button name="3" type="button" style={buttonstyle1} onClick={this.setcalcText}>3</button>
          </div>
          <div className="button">
            <button name="4" type="button" style={buttonstyle1} onClick={this.setcalcText}>4</button>
            <button name="5" type="button" style={buttonstyle1} onClick={this.setcalcText}>5</button>
            <button name="6" type="button" style={buttonstyle1} onClick={this.setcalcText}>6</button>
          </div>
          <div className="button">
            <button name="7" type="button" style={buttonstyle1} onClick={this.setcalcText}>7</button>
            <button name="8" type="button" style={buttonstyle1} onClick={this.setcalcText}>8</button>
            <button name="9" type="button" style={buttonstyle1} onClick={this.setcalcText}>9</button>
          </div>

          <div className="button">
          <button name="+" type="button" style={buttonstyle1} onClick={this.setcalcText}>+</button>
          <button name="0" type="button" style={buttonstyle1} onClick={this.setcalcText}>0</button>
          <button name="-" type="button" style={buttonstyle1} onClick={this.setcalcText}>-</button>
          </div>

          <div className="button">
          <button name="C" type="button" style={buttonstyle1} onClick={this.setcalcText}>C</button>
          <button name="=" type="button" style={buttonstyle1} onClick={this.setcalcText}>=</button>
          <button name="CE" value="CE" type="button" style={buttonstyle1} onClick={this.setcalcText}>CE</button>
          </div>
      </div>
    )
  }
}
