interface ProgressbarProps {
	current: number;
	total: number;
}

function Progressbar({ current, total }: ProgressbarProps) {
	return (
		<div
			className="progress"
			role="progressbar"
			aria-label="Example with label"
			aria-valuenow={current}
			aria-valuemin={0}
			aria-valuemax={total}
		>
			<div
				className="progress-bar"
				style={{ width: `${(current / total) * 100}%` }}
			>
				{((current / total) * 100).toFixed(0)}%
			</div>
		</div>
	);
}

export default Progressbar;
