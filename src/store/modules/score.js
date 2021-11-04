// 액션 타입(문자열)

const NEXT = "score/NEXT";
const CHECK_CORRECT = "score/CHECK_CORRECT";

export function next() {
    return {
        type: NEXT,
    };
}

export function check({ isCorrect }) {
    return {
        type: CHECK_CORRECT,
        payload: { isCorrect },
    };
}

const initialState = {
    page: 0,
    answer: ["answer1", "answer2", "answer3", "answer4", "answer5", "answer6", "answer7", "answer8", "answer9", "answer10"],
};

export default function score(state = initialState, action) {
    switch (action.type) {
        case NEXT:
            return {
                ...state,
                page: state.page + 1,
            };
        default:
            return state;
    }
}
