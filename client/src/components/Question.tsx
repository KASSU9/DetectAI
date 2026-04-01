import { useState } from "react";

interface QuestionProps {
	id: number;
	question: string;
	choices: string[];
	correctAnswerId: number;
	length: number;
	onNextQuestion: (index: number) => void;
}

function Question({
	id,
	question,
	choices,
	correctAnswerId,
	length,
	onNextQuestion,
}: QuestionProps) {
	const [currentSelectedIndex, setSelectedIndex] = useState(-1);
	const [isAnswerChecked, setIsAnswerChecked] = useState(false);

	const getChoiceClassName = (index: number) => {
		if (!isAnswerChecked) {
			return currentSelectedIndex === index
				? "list-group-item active"
				: "list-group-item";
		}

		if (index === correctAnswerId) {
			return "list-group-item list-group-item-success";
		}

		if (index === currentSelectedIndex) {
			return "list-group-item list-group-item-danger";
		}

		return "list-group-item";
	};

	return (
		<div className="card">
			<div className="card-header">
				<h2>
					Questions number {id + 1} of {length}
				</h2>
			</div>
			<div className="card-body">
				<h3 className="card-text">{question}</h3>
				<ul className="list-group">
					{choices.map((choice, index) => (
						<li
							key={choice}
							className={getChoiceClassName(index)}
							onClick={() =>
								!isAnswerChecked && setSelectedIndex(index)
							}
						>
							{choice}
						</li>
					))}
				</ul>
			</div>
			<div className="card-footer d-flex gap-2">
				<button
					type="button"
					className="btn btn-secondary"
					onClick={() => setIsAnswerChecked(true)}
				>
					Check answer
				</button>
				<button
					type="button"
					className={
						isAnswerChecked
							? "btn btn-secondary"
							: "btn btn-secondary disabled"
					}
					onClick={() => {
						(onNextQuestion(currentSelectedIndex),
							setIsAnswerChecked(false),
							setSelectedIndex(-1));
					}}
				>
					Next question
				</button>
			</div>
		</div>
	);
}

export default Question;
