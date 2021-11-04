import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { check, next } from "./../store/modules/score";

function QuizPage() {
    const history = useHistory();
    const answer = useSelector((state) => state.score.answer);
    const page = useSelector((state) => state.score.page);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>당신의 이름은 무엇인가요?</h1>
            <h2>이미지 자리</h2>
            <div>
                <input />
                <Button
                    size='large'
                    onClick={function () {
                        history.push("/quiz/01");
                        dispatch(next());
                    }}
                >
                    시작하기
                </Button>
            </div>
        </div>
    );
}

export default QuizPage;
