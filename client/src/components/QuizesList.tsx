import { Link } from "react-router-dom";

interface Quiz {
	id: number;
	title: string;
	difficulty: string;
}

interface QuizzesProps {
	quizes: Quiz[];
}

function QuizesList(props: QuizzesProps) {
	return (
		<div>
			<ul className="list-group">
				{props.quizes.map((quiz) => (
					<li
						className="list-group-item d-flex align-items-center gap-2"
						key={quiz.id}
					>
						<h3 className="mb-0">{quiz.title}</h3>
						<Link
							to={`/quizes/${quiz.id}`}
							className="btn btn-primary"
						>
							Start Quiz
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default QuizesList;
