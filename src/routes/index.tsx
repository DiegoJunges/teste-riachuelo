import { BrowserRouter, Route, Switch } from "react-router-dom";
import Books from "../pages/Books";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Books} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
