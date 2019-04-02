import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          {
            this.props.views.map((view) => {
              return <Route exact key={view.path} path={view.path} component={view.component}/>;
            })
          }
        </Switch>
      </main>
    );
  }
}

export default Main;
