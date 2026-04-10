import { Link } from "react-router-dom";

interface QuizCompletedProps {
	score: number;
	total: number;
}

function QuizCompleted({ score, total }: QuizCompletedProps) {
	return (
		<>
			<div className="modal fade show d-block" tabIndex={-1}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Quiz completed</h5>
					</div>
					<div className="modal-body">
						<p>
							You finished the quiz with a score of {score}/
							{total}.
						</p>
					</div>
					<div className="modal-footer">
						<Link to={"/"} className="btn btn-primary">
							Accept and close
						</Link>
					</div>
				</div>
			</div>
			</div>
			<div className="modal-backdrop fade show"></div>
		</>
	);
}

export default QuizCompleted;
