export default class BaseComponent {
	container: HTMLElement;
	constructor(element: string, id: string) {
		this.container = document.createElement(element);
		this.container.id = id;
	}

	render() {
		const app = document.querySelector("#app");
		app?.append(this.container);
	}
}
