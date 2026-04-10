interface ProgressbarProps {
	current: number;
	total: number;
}

function Progressbar({ current, total }: ProgressbarProps) {
	const percentage = total > 0 ? (current / total) * 100 : 0;
	const percentageLabel = `${percentage.toFixed(0)}%`;

	return (
		<div
			className="progress position-relative"
			role="progressbar"
			aria-label="Example with label"
			aria-valuenow={current}
			aria-valuemin={0}
			aria-valuemax={total}
		>
			<div
				className="progress-bar"
				style={{ width: `${percentage}%` }}
			></div>
			<span className="position-absolute top-50 start-50 translate-middle text-dark">
				{percentageLabel}
			</span>
		</div>
	);
}

export default Progressbar;
