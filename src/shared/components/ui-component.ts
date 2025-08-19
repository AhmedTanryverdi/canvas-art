export default abstract class UIComponent {
	container: HTMLElement;
	constructor(id: string, elementType: string) {
		this.container = document.createElement(elementType);
		this.container.id = id;
	}

	render(parent: string = "#app") {
		const parentElement = document.querySelector(parent);
		parentElement?.append(this.container);
	}

	getElement() {
		return this.container;
	}

	abstract addContent(): void;
}
