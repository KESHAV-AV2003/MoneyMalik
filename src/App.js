import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import RealNews from './components/RealNews';
import LoadingBar from 'react-top-loading-bar';
import Charts from './components/Charts';
import Patterns from './components/Patterns';
import 'animate.css';
<script src="http://localhost:3000"></script>




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      progress: 10
    };
  }

  showAlert = (message, type) => {
    this.setState({
      alert: {
        msg: message,
        type: type
      }
    });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 1500);
  };

  pageSize = 15;

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <NoteState>
          <Router>
            <Navbar />
            <Alert alert={this.state.alert} />
            <div className='container'>
              <Routes>
                <Route exact path='/home' element={<RealNews setProgress={this.setProgress} pageSize={this.pageSize} country='in' category='General' />} />
                <Route exact path='/entertainment' element={<RealNews setProgress={this.setProgress} pageSize={this.pageSize} country='in' category='Entertainment' />} />
                <Route exact path='/health' element={<RealNews setProgress={this.setProgress} pageSize={this.pageSize} country='in' category='Health' />} />
                <Route exact path='/sports' element={<RealNews setProgress={this.setProgress} pageSize={this.pageSize} country='in' category='Sports' />} />
                <Route exact path='/science' element={<RealNews setProgress={this.setProgress} pageSize={this.pageSize} country='in' category='Science' />} />
                <Route exact path='/technology' element={<RealNews setProgress={this.setProgress} pageSize={this.pageSize} country='in' category='Technology' />} />
                <Route exact path='/charts' element={<Charts showAlert={this.showAlert} />} />
                <Route path="/" element={<Login showAlert={this.showAlert} />} />
                <Route exact path='/signup' element={<Signup showAlert={this.showAlert} />} />
                <Route exact path='/pattern' element={<Patterns setProgress={this.setProgress} showAlert={this.showAlert} />} />

              </Routes>
            </div>
          </Router>
        </NoteState>
        <LoadingBar
          color='#f11946'
          transitionTime={3000}
          loaderSpeed={2000}
          height={4}
          progress={this.state.progress}
        />
      </>
    );
  }
}
