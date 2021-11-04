import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

function Q09Page() {
    const history = useHistory();

    return (
        <div>
            <h1>Q9 문제자리</h1>
            <h2>Q9 이미지 자리</h2>
            <div>
                <input />
                <Button
                    size='large'
                    onClick={function () {
                        history.push("/quiz/10");
                    }}
                >
                    시작하기
                </Button>
            </div>
        </div>
    );
}

export default Q09Page;
