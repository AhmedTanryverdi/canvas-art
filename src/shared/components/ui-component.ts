export default abstract class UIComponent {
	container: HTMLElement;
	constructor(id: string, elementType: string) {
		this.container = document.createElement(elementType);
		this.container.id = id;
	}

	render(element: string = "#app") {
		const block = document.querySelector(element);
		block?.append(this.container);
	}

	getElement() {
		return this.container;
	}

	abstract addContent(): void;
}
