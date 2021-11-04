import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

function Q04Page() {
    const history = useHistory();

    return (
        <div>
            <h1>Q4 문제자리</h1>
            <h2>Q4 이미지 자리</h2>
            <div>
                <input />
                <Button
                    size='large'
                    onClick={function () {
                        history.push("/quiz/05");
                    }}
                >
                    시작하기
                </Button>
            </div>
        </div>
    );
}

export default Q04Page;
