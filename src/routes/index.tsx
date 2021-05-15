import { BrowserRouter, Route, Switch } from "react-router-dom";
import Books from "../pages/Books";
import Details from "../pages/Details";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Books} />
        <Route exact path='/details/:id' component={Details} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
