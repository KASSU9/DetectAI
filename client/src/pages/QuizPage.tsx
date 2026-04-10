import { questionData } from "../data/questions";
import PlayableQuiz from "../components/PlayableQuiz";
import { useState } from "react";
import { useParams } from "react-router-dom";
import QuizCompleted from "../components/QuizCompleted";

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
	const selectedQuiz = questions[quizId];

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [isQuizCompleted, setIsQuizCompleted] = useState(false);

	const handleNextQuestion = (selectedIndex: number) => {
		const currentQuestion = selectedQuiz.questions[currentQuestionIndex];

		if (selectedIndex === currentQuestion.correctIndex) {
			setScore((prevScore) => prevScore + 1);
		}

		if (currentQuestionIndex + 1 >= selectedQuiz.questions.length) {
			setIsQuizCompleted(true);
			return;
		}

		setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
	};

	return (
		<>
			<div>
				<h1>{selectedQuiz.quiz.title}</h1>
			</div>
			<div>
				{isQuizCompleted && (
					<QuizCompleted
						score={score}
						total={selectedQuiz.questions.length}
					/>
				)}
				<PlayableQuiz
					id={selectedQuiz.questions[currentQuestionIndex].id}
					question={
						selectedQuiz.questions[currentQuestionIndex].question
					}
					choices={
						selectedQuiz.questions[currentQuestionIndex].choices
					}
					correctAnswerId={
						selectedQuiz.questions[currentQuestionIndex]
							.correctIndex
					}
					length={selectedQuiz.questions.length}
					onNextQuestion={handleNextQuestion}
				/>
			</div>
		</>
	);
}

export default QuizPage;
