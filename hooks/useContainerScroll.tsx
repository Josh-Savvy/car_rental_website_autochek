import React, { useEffect, useState } from "react";

interface UseContainerScrollProps {
	scrollType: "vertical" | "horizontal";
	containerRef: React.RefObject<HTMLElement>;
}
const useContainerScroll = (props?: UseContainerScrollProps) => {
	const { scrollType, containerRef } = props || {};
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);
	const [isEndOfScroll, setIsEndOfScroll] = useState<boolean>(false);

	useEffect(() => {
		const container = containerRef?.current;
		const handleScroll = () => {
			if (scrollType === "horizontal") {
				if (container) {
					setHasScrolled(container.scrollTop >= 200);
					setIsEndOfScroll(
						container.scrollTop + container.clientHeight >=
							container.scrollHeight,
					);
				}
			}
			if (scrollType === "vertical") {
				if (container) {
					setHasScrolled(container.scrollLeft >= 200);
					setIsEndOfScroll(
						container.scrollLeft + container.clientWidth >=
							container.scrollWidth,
					);
				}
			}
		};

		if (container) {
			container.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (container) {
				container.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);
	return { hasScrolled, isEndOfScroll };
};

export default useContainerScroll;
