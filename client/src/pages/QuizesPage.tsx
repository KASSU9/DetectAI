import { questionData } from "../data/questions";
import QuizesList from "../components/QuizesList";

interface Quiz {
	id: number;
	title: string;
	difficulty: string;
}

interface QuizData {
	quiz: Quiz;
}

function QuizesPage() {
	const questions: QuizData[] = questionData.map((question) => ({
		quiz: question.quiz,
	}));

	return (
		<>
			<h1>Quizes</h1>
			<h2>Easy quizes</h2>
			<QuizesList
				quizes={questions
					.filter((q) => q.quiz.difficulty === "easy")
					.map((q) => q.quiz)}
			/>
			<h2>Medium quizes</h2>
			<QuizesList
				quizes={questions
					.filter((q) => q.quiz.difficulty === "normal")
					.map((q) => q.quiz)}
			/>
			<h2>Hard quizes</h2>
			<QuizesList
				quizes={questions
					.filter((q) => q.quiz.difficulty === "hard")
					.map((q) => q.quiz)}
			/>
		</>
	);
}

export default QuizesPage;
