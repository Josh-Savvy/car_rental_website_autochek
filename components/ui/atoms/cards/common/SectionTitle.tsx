import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const SectionTitle = ({
	classes,
	subtitle,
	title,
	animate = false,
}: {
	classes?: { title?: string; subtitle?: string; container?: string };
	title?: string;
	subtitle?: string;
	animate?: boolean;
}) => {
	return animate ? (
		<AnimationOnScroll animateIn={"animate__fadeInUp"} animateOnce>
			<div
				className={classNames(
					"container mx-auto px-5",
					classes?.container,
				)}>
				<h1
					className={classNames(
						"text-center text-2xl my-5 text-[#111]",
						classes?.title,
					)}
					style={{
						fontFamily: `Lucida Sans`,
					}}>
					{title}
				</h1>
				<p className={classNames("text-center", classes?.subtitle)}>
					{subtitle}
				</p>
			</div>
		</AnimationOnScroll>
	) : (
		<div
			className={classNames(
				"container mx-auto px-5",
				classes?.container,
			)}>
			<h1
				className={classNames(
					"text-center text-2xl my-5 text-[#111]",
					classes?.title,
				)}
				style={{
					fontFamily: `Lucida Sans`,
				}}>
				{title}
			</h1>
			<p className={classNames("text-center", classes?.subtitle)}>
				{subtitle}
			</p>
		</div>
	);
};

export default SectionTitle;
