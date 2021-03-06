import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">

          <ContactForm />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));