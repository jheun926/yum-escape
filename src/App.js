import React from "react";
import InitPage from "./init";
import QuizPage from "./quiz";

import { useSelector, useDispatch } from "react-redux";

import Q01Page from "./quiz/01";
import Q02Page from "./quiz/02";
import Q03Page from "./quiz/03";
import Q04Page from "./quiz/04";
import Q05Page from "./quiz/05";
import Q06Page from "./quiz/06";
import Q07Page from "./quiz/07";
import Q08Page from "./quiz/08";
import Q09Page from "./quiz/09";
import Q10Page from "./quiz/10";
import FinishPage from "./finish";
import { Switch, Route, useHistory } from "react-router-dom";
import { Button } from "antd";

function App() {
    const history = useHistory();
    const page = useSelector((state) => state.score.page);

    return (
        <div>
            <div id='header'>
                <div id='header-area'>
                    <img src='/logo.png' />
                </div>
            </div>
            <div id='body'>
                <Switch>
                    <>
                        {page === 0 && (
                            <div>
                                <Route exact={true} path='/'>
                                    <InitPage />
                                </Route>
                                <Route exact={true} path='/quiz'>
                                    <QuizPage />
                                </Route>
                            </div>
                        )}
                        {page > 0 && page <= 3 && (
                            <div>
                                <Route exact={true} path='/quiz/01'>
                                    <Q01Page />
                                </Route>
                                <Route exact={true} path='/quiz/02'>
                                    <Q02Page />
                                </Route>
                                <Route exact={true} path='/quiz/03'>
                                    <Q03Page />
                                </Route>
                            </div>
                        )}
                        {page === 4 && (
                            <div>
                                <Route exact={true} path='/finish'>
                                    <FinishPage />
                                </Route>
                            </div>
                        )}
                    </>
                </Switch>
            </div>

            <div id='footer'></div>
        </div>
    );
}

export default App;
