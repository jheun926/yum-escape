// 액션 타입(문자열)

const CHECK_CORRECT = "score/CHECK_CORRECT";
const NEXT = "score/NEXT";

export function check() {
  return {
    type: CHECK_CORRECT,
  };
}

export function next() {
  return {
    type: NEXT,
  };
}

const initialState = {
  stage: 0,
  quizs: [
    {
      q: "첫번재 문제",
      a: "첫번째 정답",
    },
  ],
};
