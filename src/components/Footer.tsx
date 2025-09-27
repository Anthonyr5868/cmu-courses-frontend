import type { ReactElement } from "react";
import { MessageTextSquare02 } from "@scottylabs/corgi";

export default function Footer(): ReactElement {
	return (
		<footer className="w-full bg-bg-brandNeutral-secondary-enabled text-fg-brandNeutral-primary pl-0 pr-6 py-6 border-t border-stroke-brandNeutral-1">
			<div className="w-full flex flex-col md:flex-row items-start justify-between gap-4 pl-[40px]">
				<div className="flex flex-col items-start text-left text-fg-brandNeutral-secondary space-y-1 w-full md:w-auto">
					<div className="text-sm font-normal">Designed, developed and maintained with ❤️ by ScottyLabs.</div>
					<div className="text-sm font-normal">Want to help us make CMU Courses better? Join us at ScottyLabs or make a pull request on our GitHub repository.</div>
				</div>

				<div className="w-full md:w-auto flex md:items-center md:justify-end">
					<a
						className="mt-3 md:mt-0 inline-flex items-center px-3 py-1 bg-transparent rounded-full border border-stroke-brandNeutral-1 hover:opacity-90 transition"
					>
						<MessageTextSquare02 className="mr-2 h-5 w-5 text-fg-brandNeutral-primary bg-transparent" aria-hidden />
						<span className="text-fg-brandNeutral-primary font-semibold">Feedback</span>
					</a>
				</div>
			</div>
		</footer>
	);
}

