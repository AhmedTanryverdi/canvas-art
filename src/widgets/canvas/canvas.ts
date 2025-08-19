import UIComponent from "@/shared/components/ui-component";
import { CanvasEditor } from "./CanvasEditor";
import { CanvasSize } from "@/shared/utils/constants";

export class Canvas extends UIComponent {
	private __drawer: CanvasEditor;
	constructor(id: string, blockType = "canvas") {
		super(id, blockType);

		if (this._container instanceof HTMLCanvasElement) {
			this._container.tabIndex = 0;
			this._container.width = CanvasSize.CANVAS_WIDTH;
			this._container.height = CanvasSize.CANVAS_HEIGHT;
			this.__drawer = new CanvasEditor(this._container);
			this._container.focus();
			this.addContent();
		} else throw new Error("can't created context!");
	}

	addContent(): void {
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
