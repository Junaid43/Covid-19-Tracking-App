import React, { Component } from "react";
import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaimage from "./images/image.jpg";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData(); //fetching data from api
    this.setState({ data: fetchedData }); // fetch data from api and store them in data array
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    // set the state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={coronaimage} className={styles.image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
