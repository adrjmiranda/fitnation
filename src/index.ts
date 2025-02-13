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
