import { questionData } from "../data/questions";
import Question from "../components/Question";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface Quiz {
	id: number;
	title: string;
	difficulty: string;
}

interface Questions {
	id: number;
	question: string;
	choices: string[];
	correctIndex: number;
}

interface QuestionData {
	quiz: Quiz;
	questions: Questions[];
}

function QuizPage() {
	const questions: QuestionData[] = questionData.map((question) => ({
		quiz: question.quiz,
		questions: question.questions,
	}));

	const params = useParams<{ id: string }>();

	const quizId = parseInt(params.id || "0", 10); // TODO: handle invalid id

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	const handleNextQuestion = () => {
		setCurrentQuestionIndex((currentIndex) =>
			Math.min(currentIndex + 1, questions[quizId].questions.length - 1),
		);
	};

	return (
		<>
			<div>
				<h1>{questions[quizId].quiz.title}</h1>
			</div>
			<div>
				<Question
					id={questions[quizId].questions[currentQuestionIndex].id}
					question={
						questions[quizId].questions[currentQuestionIndex]
							.question
					}
					choices={
						questions[quizId].questions[currentQuestionIndex]
							.choices
					}
					correctAnswerId={
						questions[quizId].questions[currentQuestionIndex]
							.correctIndex
					}
					length={questions[quizId].questions.length}
					onNextQuestion={handleNextQuestion}
				/>
			</div>
		</>
	);
}

export default QuizPage;
