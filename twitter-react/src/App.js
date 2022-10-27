import TweetsPage from "./components/tweets/TweetsPage.js";
import Button from './components/common/Button.js'
import NewTweetPage from "./components/tweets/NewTweetPage.js";
import LoginPage from "./components/auth/LoginPage.js";

import './App.css'

function App() {
  return (
    <div className="app">
      {/*<TweetsPage />
      <NewTweetPage />*/}
      <LoginPage />

    </div>
  );
}

export default App;
