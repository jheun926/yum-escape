import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

function Q08Page() {
    const history = useHistory();

    return (
        <div>
            <h1>Q8 문제자리</h1>
            <h2>Q8 이미지 자리</h2>
            <div>
                <input />
                <Button
                    size='large'
                    onClick={function () {
                        history.push("/quiz/09");
                    }}
                >
                    시작하기
                </Button>
            </div>
        </div>
    );
}

export default Q08Page;
