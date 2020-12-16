import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  HomePage,
  NotificationsPage,
  BookingsPage,
  HistoryPage,
  NotFoundPage,
} from "./pages";

import MainLayout from "./layouts/MainLayout";

import "./App.css";

function AppRoute({ component: Page, layout, path, ...rest }) {
  return (
    <Route
      {...rest}
      path={path}
      render={(props) => {
        return (
          <MainLayout path={path}>
            <Page {...props} />
          </MainLayout>
        );
      }}
    />
  );
}
function App() {
  return (
    <Router>
      <Switch>
        <AppRoute path={["/", "/home"]} component={HomePage} exact />
        <AppRoute path="/bookings" component={BookingsPage} />
        <AppRoute path="/history" component={HistoryPage} />
        <AppRoute path="/notifications" component={NotificationsPage} />
        <AppRoute component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
