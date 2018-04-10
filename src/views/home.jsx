import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Simple React Template</h1>
          <p className="lead">
            A simple react template/scaffold; built with webpack along with libraries like
            jquery, lodash, axios and many more- just ready to be used.
          </p>
          <hr className="my-4"/>
          <p>It uses bootstrap for default component styling and font awesome for icons.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
