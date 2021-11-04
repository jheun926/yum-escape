import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

function Q10Page() {
    const history = useHistory();

    return (
        <div>
            <h1>Q10 문제자리</h1>
            <h2>Q10 이미지 자리</h2>
            <div>
                <input />
                <Button
                    size='large'
                    onClick={function () {
                        history.push("/finish");
                    }}
                >
                    시작하기
                </Button>
            </div>
        </div>
    );
}

export default Q10Page;
