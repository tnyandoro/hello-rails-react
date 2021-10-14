const GET_GREETINGS = 'GET_GREETINGS';

function getGreetings() {
  console.log('getGreetings() Action!!')
  return {
    type: GET_GREETINGS,
  };
};

class HelloWorld extends React.Component {
  render () {
    const { greetings } = this.props;
    const greetingsList = greetings.map((greeting, index) => {
      return <li key={index}>{greeting}</li>
    });

    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button class="getGreetingsBtn" onClick={() => this.props.getGreetings()}>Get Greetings</button>
        <br />
        <ul>{greetingsList}</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greeting: (state) => state.greeting,
});

const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
