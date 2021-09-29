import InitPage from "./init";
import QuizPage from "./quiz";
import FinishPage from "./finish";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { Button } from "antd";

function App() {
    const history = useHistory();
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="/logo.png" />
                </div>
            </div>
            <div id="body">
                <Switch>
                    <Route exact={true} path="/">
                        <InitPage />
                    </Route>
                    <Route exact={true} path="/quiz">
                        <QuizPage />
                    </Route>
                    <Route exact={true} path="/finish">
                        <FinishPage />
                    </Route>
                </Switch>
            </div>

            <div id="footer"></div>
        </div>
    );
}

export default App;
