import "./styles.scss";
import { CanvasBoard, LeftPanel } from "@/feature/ui";
import { Div } from "@/shared/ui";
import { BASE_COMPONENTS } from "@/shared/utils/constants";

export class App extends Div {
	create(): HTMLElement | null {
		this._container = document.getElementById("app");
		if (!this._container) {
			this._container = document.createElement("div");
			if (!this._container) return null;
			this._container.id = "app";
		}
		this.render();

		return this._container;
	}

	render(): void {
		if (!this._container) return;
		BASE_COMPONENTS.forEach((id) => {
			switch (id) {
				case "left-panel":
					const leftPanel = new LeftPanel().create();
					if (!leftPanel) return null;
					this._container?.append(leftPanel);
					break;

				case "canvas-board":
					const canvasBoard = new CanvasBoard().create();
					if (!canvasBoard) return null;
					this._container?.append(canvasBoard);
					break;
			}
		});
	}
}
