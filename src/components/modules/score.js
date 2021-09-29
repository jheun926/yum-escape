// 액션 타입(문자열)

const NEXT = "score/NEXT";

export function next() {
    return {
        type: NEXT,
    };
}

const initialState = {
    score: 0,
    quizs: [
        {
            q: "첫번재 문제",
            a: "첫번째 정답",
        },
        {
            q: "두번째 문제",
            a: "두번째 정답",
        },
    ],
};

export default function score(state = initialState, action) {
    switch (action.type) {
        case NEXT:
            return {
                ...state,
                score: state.score + 1,
            };
        default:
            return state;
    }
}
