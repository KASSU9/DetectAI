import Question from "../components/Question";
import { useState } from "react";

interface QuestionProps {
	id: number;
	question: string;
	choices: string[];
	correctAnswerId: number;
}

function GamePage() {
	const questions: QuestionProps[] = [
		{
			id: 0,
			question: "Question 1",
			choices: ["Choice 1", "Choice 2", "Choice 3"],
			correctAnswerId: 2,
		},
		{
			id: 1,
			question: "Question 2",
			choices: ["Choice 1", "Choice 2", "Choice 3"],
			correctAnswerId: 1,
		},
		{
			id: 2,
			question: "Question 3",
			choices: ["Choice 1", "Choice 2", "Choice 3"],
			correctAnswerId: 0,
		},
	];

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	const handleNextQuestion = () => {
		setCurrentQuestionIndex((currentIndex) =>
			Math.min(currentIndex + 1, questions.length - 1),
		);
	};

	return (
		<Question
			id={questions[currentQuestionIndex].id}
			question={questions[currentQuestionIndex].question}
			choices={questions[currentQuestionIndex].choices}
			correctAnswerId={questions[currentQuestionIndex].correctAnswerId}
			length={questions.length}
			onNextQuestion={handleNextQuestion}
		/>
	);
}

export default GamePage;
