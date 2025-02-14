// General
const getCSSVariableValue = (variable: string): string => {
	const rootStyles: CSSStyleDeclaration = getComputedStyle(
		document.documentElement
	);

	return rootStyles.getPropertyValue(variable).trim();
};

/**
 * Toggle Menu
 */
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;
const navbarLinks = document.querySelectorAll(
	'.navbar-link'
) as NodeListOf<HTMLAnchorElement>;
const navbarContent = document.querySelector(
	'.navbar-content'
) as HTMLDivElement;

const toggleMenuButton = document.querySelector(
	'#toggle-menu'
) as HTMLButtonElement;

const showNavbar: string = 'show';

const changeToggleMenuButtonIcons = (): void => {
	const icons = document.querySelectorAll(
		'#toggle-menu i'
	) as NodeListOf<HTMLElement>;

	icons.length && icons.forEach((icon) => icon.classList.toggle('hidden'));
};

const changeMenuView = (): void => {
	changeToggleMenuButtonIcons();
	navbarMenu?.classList.toggle('hidden');
	navbarContent?.classList.toggle('change-color');
};

if (toggleMenuButton && navbarLinks.length) {
	toggleMenuButton.addEventListener('click', () => {
		changeMenuView();
	});

	navbarLinks.forEach((link) =>
		link.addEventListener('click', () => {
			changeMenuView();
		})
	);
}

/**
 * Banner Animation
 */
const bannerItems = document.querySelectorAll(
	'.banner-item'
) as NodeListOf<HTMLDivElement>;
const bannerTexts = document.querySelectorAll(
	'.banner-text'
) as NodeListOf<HTMLDivElement>;

const bannerItemsNumber: number = bannerItems?.length ?? 0;

const bannerAnimationTime: string = getCSSVariableValue(
	'--banner-animation-time'
);

const bannerTime = parseFloat(bannerAnimationTime.replace('s', '')) * 1000;
const fadeBannerDelay = 200;

let active = 0;

const classFadeBanner = 'fade-banner';
const classFadeBannerText = 'fade-banner-text';

const clearFadeBanner = (): void => {
	bannerItems?.forEach((item) => item.classList.remove(classFadeBanner));
	bannerTexts?.forEach((text) => text.classList.remove(classFadeBannerText));
};

bannerItems[active]?.classList.add(classFadeBanner);
bannerTexts[active]?.classList.add(classFadeBannerText);
const bannerInterval = setInterval(() => {
	const next: number = active + 1;
	active = next >= bannerItemsNumber ? 0 : next;

	clearFadeBanner();

	setTimeout(() => {
		bannerItems[active]?.classList.add(classFadeBanner);
		bannerTexts[active]?.classList.add(classFadeBannerText);
	}, fadeBannerDelay);
}, bannerTime);

window.addEventListener('beforeunload', () => {
	clearInterval(bannerInterval);
});

/**
 * Testimonials Animation and Align Configuration
 */
const testimonialsBox = document.querySelector(
	'.testimonial-items'
) as HTMLDivElement;
let testimonialItems = document.querySelectorAll(
	'.testimonial-item'
) as NodeListOf<HTMLDivElement>;
const testimonialItemsNumber = testimonialItems.length;

const highlightClass = 'highlight';
const lessHighlightClass = 'less-highlight';
const slideTime = 10000;

const updateTestimonialItems = (): void => {
	testimonialItems = document.querySelectorAll(
		'.testimonial-item'
	) as NodeListOf<HTMLDivElement>;
};

const correctPositioningOfTestimonialCards = (): void => {
	const middleIndex = Math.floor(testimonialItemsNumber / 2);
	const testimonialCardWidth = testimonialItems[middleIndex]?.offsetWidth ?? 0;

	if (testimonialItemsNumber % 2 === 0) {
		testimonialsBox.style.left = `calc(${2 * testimonialCardWidth}px + 100px)`;
	} else {
		testimonialsBox.style.left = `calc(${3 * testimonialCardWidth}px - 75px)`;
	}
};

const runTestimonialSlides = (): void => {
	putTheFirstAtTheEnd();
	updateTestimonialItems();
	removeHighlightClasses();

	const middleIndex = Math.floor(testimonialItemsNumber / 2);
	const prevIndex = middleIndex - 1;
	const nextIndex = middleIndex + 1;

	if (testimonialItems[prevIndex])
		testimonialItems[prevIndex].classList.add(lessHighlightClass);
	if (testimonialItems[middleIndex])
		testimonialItems[middleIndex].classList.add(highlightClass);
	if (testimonialItems[nextIndex])
		testimonialItems[nextIndex].classList.add(lessHighlightClass);

	const testimonialCardWidth = testimonialItems[middleIndex]?.offsetWidth ?? 0;
	testimonialsBox.style.left = `-calc(${testimonialCardWidth}px + 25px)`;
};

const putTheFirstAtTheEnd = (): void => {
	const firstTestimonial = testimonialItems[0];
	testimonialsBox.appendChild(firstTestimonial);
};

const removeHighlightClasses = (): void => {
	testimonialItems.forEach((testimonial) => {
		testimonial.classList.remove(highlightClass, lessHighlightClass);
	});
};

const handleResize = (): void => {
	correctPositioningOfTestimonialCards();
};

if (testimonialsBox && testimonialItemsNumber > 0) {
	correctPositioningOfTestimonialCards();
	runTestimonialSlides();

	const testimonialSlideInterval = setInterval(runTestimonialSlides, slideTime);

	window.addEventListener('beforeunload', () => {
		clearInterval(testimonialSlideInterval);
	});

	window.addEventListener('resize', handleResize);
}
