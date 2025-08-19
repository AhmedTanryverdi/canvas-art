import UIComponent from "@/shared/components/ui-component";
import { CanvasEditor } from "./CanvasEditor";
import { CanvasSize } from "@/shared/utils/constants";

export class Canvas extends UIComponent {
	drawer: CanvasEditor;
	constructor(id: string, blockType = "canvas") {
		super(id, blockType);

		if (this.container instanceof HTMLCanvasElement) {
			this.container.tabIndex = 0;
			this.container.width = CanvasSize.CANVAS_WIDTH;
			this.container.height = CanvasSize.CANVAS_HEIGHT;
			this.drawer = new CanvasEditor(this.container);
			this.container.focus();
			this.addContent();
		} else throw new Error("can't created context!");
	}

	addContent(): void {
		this.container.addEventListener(
			"mousedown",
			this.drawer.startDraw.bind(this.drawer)
		);

		this.container.addEventListener(
			"mouseup",
			this.drawer.stopDraw.bind(this.drawer)
		);

		this.container.addEventListener(
			"mousemove",
			this.drawer.drawLine.bind(this.drawer)
		);

		this.container.addEventListener(
			"keydown",
			this.drawer.renderText.bind(this.drawer),
			false
		);
	}
}
