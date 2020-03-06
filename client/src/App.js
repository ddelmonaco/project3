import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import _ from "lodash";
// import Books from "./pages/Books";
import Nav from "./components/Nav";
import Music from "./pages/Music"
import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login"
import Home from "./pages/Home"
import { fireAuth } from "./fireApi";
import withAuthProtection from "./withAuthProtection";


const Wrapper = props => (
  <div style={{ maxWidth: 400, padding: 16, margin: "auto" }} {...props} />
);
const ProtectedProfile = withAuthProtection("/login")(Music);


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      me: null
    };
  }
  componentDidMount() {
    fireAuth.onAuthStateChanged(me => {
      console.log(me)
      this.setState({ me });
    });
  }
  handleSignIn = history => (email, password) => {
    return fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      return history.push("/music");
    });
  };
   render() {
    const { me } = this.state;
    const email = _.get(me, "email");
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Music} />
            <Route
            path="/login"
            exact
            render={({ history }) => (
              <div>
                
                <Login onSubmit={this.handleSignIn(history)} />
                </div>
            )}
          />
            {/* <Route exact path="/books" component={ProtectedProfile} /> */}
            <Route
            path="/music"
            exact
            render={props => (
              <div>
                {/* <Link to="/">Home</Link> */}
                <ProtectedProfile {...props} me={me} displayName={email} />
              </div>
            )}
          />
            <Route exact path="/music/:id" component={Detail} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
   }
  
};
export default App;




