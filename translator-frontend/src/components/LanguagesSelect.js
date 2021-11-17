import React, { useState, Component } from "react";
import { Form, Button, Row, Col, FormLabel } from "react-bootstrap";

class LanguagesSelect extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    const url =
      "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0";

    await fetch(url)
      .then((res) => res.json())
      .then((json) =>{
		   this.setState({ data: json });
			console.log(this.state.data.dictionary);
		   });
  }
  render() {
    return (
      <div>
        <h2>{this.state.data.translation.map()}</h2>
		{/* <select >
            {
                Object.entries(this.state.data.translation).map(([key, value]) => 
				<option key={key}>{value.name}</option>)
            }
		</select> */}



        {/* {['clientName', 'siteName', 'segmentName'].map(key => (
				<select key={key}>
				{lang.map(({ [key]: value }) => <option key={value}>{value}</option>)}
				</select>
			))} */}
        {/* <div>
          <ul>
            {this.state.data.dictionary.map((el) => (
              <li>
                {el.name}: {el.price_usd}
              </li>
            ))}
          </ul>
        </div> */}
           
      </div>
    );
  }
}

export default LanguagesSelect;
