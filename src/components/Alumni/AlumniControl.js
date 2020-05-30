import Four from './Alumni_4th'
import Three from './Alumni_3rd'
import React from 'react';

class AlumniControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.alumni4Click.bind(this);
    this.handleLogoutClick = this.alumni3Click.bind(this);
    this.state = { alumniClicked: 4 };
  }

  alumni4Click() {
    this.setState({ alumniClicked: 4 });
  }

  alumni3Click() {
    this.setState({ alumniClicked: 3 });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
