export default abstract class UIComponent {
	protected _container: HTMLElement;
	constructor(id: string, elementType: string) {
		this._container = document.createElement(elementType);
		this._container.id = id;
	}

	render(parent: string = "#app") {
		const parentElement = document.querySelector(parent);
		parentElement?.append(this._container);
	}

	getElement() {
		return this._container;
	}

	abstract addContent(): void;
}
