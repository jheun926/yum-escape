import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

function InitPage() {
    const history = useHistory();

    return (
        <div>
            <h1>시작 페이지</h1>
            <Button
                size="large"
                onClick={function () {
                    history.push("/quiz");
                }}
            >
                시작하기
            </Button>
        </div>
    );
}

export default InitPage;
