import { BrowserRouter, Switch, Route } from "react-router-dom";
import InitialPage from "../pages/InitialPage";
import Matrix from "../pages/Matrix";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InitialPage} />
        <Route path="/matrix" component={Matrix} />
      </Switch>
    </BrowserRouter>
  );
}
