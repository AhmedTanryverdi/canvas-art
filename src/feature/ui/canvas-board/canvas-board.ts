import "./styles.scss";
import { CanvasEditor } from "@/feature/canvas-tools";
import { Canvas } from "@/shared/ui/canvas/canvas";
import { CanvasSize } from "@/shared/utils/constants";

export class CanvasBoard extends Canvas {
	private __drawer: CanvasEditor | null = null;

	create(): HTMLElement | null {
		this._container = document.createElement("canvas");
		if (!this._container) return null;
		this._container.id = "canvas";

		if (this._container instanceof HTMLCanvasElement) {
			this.__drawer = new CanvasEditor(this._container);
			this.settings();
			this.listen();
		}

		return this._container;
	}

	settings() {
		if (this._container instanceof HTMLCanvasElement) {
			this._container.tabIndex = 0;
			this._container.width = CanvasSize.CANVAS_WIDTH;
			this._container.height = CanvasSize.CANVAS_HEIGHT;
			this.__drawer = new CanvasEditor(this._container);
			this._container.focus();
			this.listen();
		} else throw new Error("can't created context!");
	}

	listen(): void {
		if (!this._container || !this.__drawer) return;

		this._container.addEventListener(
			"mousedown",
			this.__drawer.startDraw.bind(this.__drawer)
		);

		this._container.addEventListener(
			"mouseup",
			this.__drawer.stopDraw.bind(this.__drawer)
		);

		this._container.addEventListener(
			"mousemove",
			this.__drawer.drawLine.bind(this.__drawer)
		);

		this._container.addEventListener(
			"keydown",
			this.__drawer.renderText.bind(this.__drawer),
			false
		);
	}
}
