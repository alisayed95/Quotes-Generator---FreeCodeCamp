import React from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
class App extends React.Component{
  constructor(){
    super();
    this.state={
        quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
        quotesList : [],
        author : "Thomas Edison",
        colors : ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"],
        color : '#16a085'
    }
  }

  componentDidMount(){
    fetch("https://type.fit/api/quotes")
      .then(resp => resp.json())
      .then(data=>{
        this.setState({
          quotesList : data
        })
      })
  }

  handleSubmit = (event) => {
     event.preventDefault();
     const randNum = Math.floor(Math.random()*this.state.quotesList.length);
     const randQuot = this.state.quotesList[randNum]['text'];
     const randAouth = this.state.quotesList[randNum]["author"];
     const randColor = this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
     this.setState({
       quote : randQuot,
       author : randAouth,
       color : randColor
     })
  }

  render(){
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const leftQuote = <FontAwesomeIcon icon={faQuoteLeft} />
    const styles = {backgroundColor : `${this.state.color}`}
    const styless = {color : `${this.state.color}`}
    return(
      <div id="wrapper" style={styles}>
        <div id="quote-box">
          <div id="text" style={styless}>
            {leftQuote} {this.state.quote}
          </div>
          <div id="author" style={styless}>
            - {this.state.author? this.state.author:"Unknown"}
          </div>
          <div id="row">
              <div id="tweet-quote" style={styles}>
              <a href={`https://twitter.com/intent/tweet?text=${this.state.quote}--${this.state.author}--byAliElsayed`} target="_blank" rel="noopener noreferrer"><i class="social">{twitter}</i></a>
              </div>
              <div id="new-quote">
                <button class="btn" style={styles} onClick={this.handleSubmit}>New quote</button>
              </div>
          </div>
        </div>  
      </div>
    );
  } 
}

export default App;