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
