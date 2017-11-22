export class Menu {
	//properties of Menu class (key/value)
	display: string;
	href: string;
	tooltip: string;

	constructor(display: string, href: string, tooltip: string) {
		//when referring to classes inside a function you must use this.____
		this.display = display;
		this.href = href;
		this.tooltip = tooltip;
	}
}