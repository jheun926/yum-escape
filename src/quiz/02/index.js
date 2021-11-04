import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { check, next } from "./../../store/modules/score";

function Q02Page() {
    const history = useHistory();
    const dispatch = useDispatch();
    const answer = useSelector((state) => state.score.answer);
    const page = useSelector((state) => state.score.page);

    return (
        <div>
            <h1>Q2 문제자리</h1>
            <h2>Q2 이미지 자리</h2>
            <div>
                <input />
                <Button
                    size='large'
                    onClick={function () {
                        history.push("/quiz/03");
                        dispatch(next());
                    }}
                >
                    시작하기
                </Button>
            </div>
        </div>
    );
}

export default Q02Page;
