import InitPage from "./init";
import QuizPage from "./quiz";
import { Switch, Route, Link, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <span>Header</span>
        </div>
      </div>
      <div id="body"></div>
      <InitPage />
      <QuizPage />
      <div id="footer"></div>
    </div>
  );
}

export default App;
