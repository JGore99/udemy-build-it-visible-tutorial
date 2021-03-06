class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.handleButtonStatement = this.handleButtonStatement.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      }
    })
    console.log(this.state.visibility);
  }
  handleButtonStatement() {
    return this.state.visibility ? "Hide Details" : "Show Details"
  }
  handleStatement
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.handleButtonStatement()}</button> {/*SEE COMMENTS*/}
        {this.state.visibility && (
          <p>"Hey. These are some details you can see!"</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

/*const renderContent = () => {
  const content = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>{!wasClicked ? "Show Details" : "Hide Details"}</button>
      {wasClicked && (
          <p>"Hey. These are some details you can see!"</p>
          )}
    </div>
  );

  ReactDOM.render(content, appRoot);
};

let wasClicked = false;

function toggleDetails() {
  if (wasClicked) {
    wasClicked = false;
    console.log(wasClicked)
  } else {
    wasClicked = true;
    console.log(wasClicked)
  }
  renderContent();
}

const appRoot = document.getElementById("app");

renderContent(); */
