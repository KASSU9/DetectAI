import Question from "../components/Question";
import { useState } from "react";
import { questionData } from "../data/questions";

interface QuestionProps {
	id: number;
	question: string;
	choices: string[];
	correctAnswerId: number;
}

function GamePage() {
	const questions: QuestionProps[] = questionData.map((question) => ({
		id: question.id,
		question: question.question,
		choices: question.choices,
		correctAnswerId: question.correctIndex,
	}));

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
