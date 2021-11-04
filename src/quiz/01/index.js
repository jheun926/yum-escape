import { Popover, Button } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { check, next } from "./../../store/modules/score";

function Q01Page() {
    const history = useHistory();
    const dispatch = useDispatch();
    const answer = useSelector((state) => state.score.answer);
    const page = useSelector((state) => state.score.page);

    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h1>Q1 문제자리</h1>
            <h2>Q1 이미지 자리</h2>
            <div>
                <input onChange={onChange} value={text} />
                <Button
                    size='large'
                    onClick={() => {
                        console.log(text);
                        if (text === "answer1") {
                            history.push("/quiz/02");
                            dispatch(next());
                        } else {
                            alert("정답이 아닙니다.");
                        }
                    }}
                >
                    시작하기
                </Button>
            </div>
        </div>
    );
}

export default Q01Page;
