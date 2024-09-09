import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        <hr />
        <MyComponent />
        <hr />
        <MyComponent />
      </header>
    </div>
  );
}

function MyComponent() {
  return (
    <div className="linkedin-profile">
      <p>
        My LinkedIn Profile Picture
      </p>
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQFViJ35mZimpg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725744084057?e=1731542400&v=beta&t=EAyznTTm8tONhvKFfjkr4GF4NgUaBALaEYM6bgww-_Q"
        alt="LinkedIn Profile"
      />
    </div>
  )
}

export default App; 
