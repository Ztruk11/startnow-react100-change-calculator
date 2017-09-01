import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      due: '',
      received: '',
      success: '',
      failure: '',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };

    this.handleDueChange = this
      .handleDueChange
      .bind(this);

    this.handleReceivedChange = this
      .handleReceivedChange
      .bind(this);

    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleDueChange(event) {
    this.setState({due: event.target.value});
  }

  handleReceivedChange(event) {
    this.setState({received: event.target.value});
  }

  handleCalculate(event) {

  }

  handleSubmit(event) {
    console.log('This is how much is due:' + this.state.due);
    console.log('This is how much was received:' + this.state.received);

    var cheddar = parseFloat(this.state.received) - parseFloat(this.state.due);
    const twenties = Math.floor(cheddar * 100 / 2000);
    const tens = Math.floor(cheddar * 100 % 2000 / 1000);
    const fives = Math.floor(cheddar * 100 % 2000 % 1000 / 500)
    const ones = Math.floor(cheddar * 100 % 2000 % 1000 % 500 / 100);
    const quarters = Math.floor(cheddar * 100 % 2000 % 1000 % 500 % 100 / 25);
    const dimes = Math.floor(cheddar * 100 % 2000 % 1000 % 500 % 100 % 25 / 10);
    const nickels = Math.floor(cheddar * 100 % 2000 % 1000 % 500 % 100 % 25 % 10 / 5);
    const pennies = Math.floor(cheddar * 100 % 2000 % 1000 % 500 % 100 % 25 % 10 % 5);

    console.log(twenties)
    this.setState({cheddar: cheddar});
    this.setState({twenties: twenties});
    this.setState({tens: tens});
    this.setState({fives: fives});
    this.setState({ones: ones});
    this.setState({quarters: quarters});
    this.setState({dimes: dimes});
    this.setState({nickels: nickels});
    this.setState({pennies: pennies});

    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Change Calculator</h1>
        </div>
        <div className="row">

          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Enter Information</div>
              <div className="panel-body">

                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="usr">How much is due?</label>
                    <input
                      name="amountDue"
                      type="text"
                      className="form-control"
                      value={this.state.due}
                      onChange={this.handleDueChange}/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="pwd">How much was received?</label>
                    <input
                      name="amountReceived"
                      type="text"
                      className="form-control"
                      value={this.state.received}
                      onChange={this.handleReceivedChange}/>
                  </div>
                </form>

                <div className="form-group">
                  <button
                    onClick={this.handleSubmit}
                    type="submit"
                    value="Submit"
                    className="btn btn-primary btn-block">Calculate</button>
                </div>

              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">

                <div className="alert alert-success" value={this.state.success}>
                  The total change due is ${this.state.cheddar}
                </div>
                <div className="alert alert-warning" value={this.state.failure}>
                  You have insufficient funds
                </div>

              </div>
              <div className="panel-body">

                <div className="col-md-3 well well-lg">
                  <h1 className="text-center">Twenties</h1>
                  <p>{this.state.twenties}</p>
                </div>
                <div className="col-md-3 well well-lg">
                  <h1 className="text-center">Tens</h1>
                  <p>{this.state.tens}</p>
                </div>
                <div className="col-md-3 well well-lg">
                  <h1 className="text-center">Fives</h1>
                  <p>{this.state.fives}</p>
                </div>
                <div className="col-md-3 well well-lg">
                  <h1 className="text-center">Ones</h1>
                  <p>{this.state.ones}</p>
                </div>

                <div className="col-md-3 well well-lg">
                  <h1 className="text-center">Quarters</h1>
                  <p>{this.state.quarters}</p>
                </div>
                <div className="col-md-3 well well-lg">
                  <h1 className="text-center">Dimes</h1>
                  <p>{this.state.dimes}</p>
                </div>
                <div className="col-md-3 well well-lg">
                  <h1 className="text-center">Nickels</h1>
                  <p>{this.state.nickels}</p>
                </div>
                <div className="col-md-3 well well-lg">
                  <h1 className="text-center">Pennies</h1>
                  <p>{this.state.pennies}</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default App;