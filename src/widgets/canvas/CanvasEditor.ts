import { PenEditor } from "@/feature/canvas-tools";
import { EraserEditor } from "@/feature/canvas-tools/left-panel/tools/eraser-editor";
import { TextEditor } from "@/feature/canvas-tools/left-panel/tools/text-editor";
import SingleEditor from "@/shared/utils/lib/SingleEditor";
import { IToolsDraw, IToolsStart, IToolsStop } from "@/shared/utils/types";

export class CanvasEditor {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D | null;
	currentTool: (IToolsStart | IToolsStop | IToolsDraw) | null;
	isDrawing: boolean;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		if (!this.ctx) throw new Error("context error!");
		this.currentTool = new PenEditor(this.ctx);
		this.isDrawing = false;
	}

	startDraw(e: MouseEvent) {
		if (!this.ctx) return;
		if (!(this.currentTool && "startDraw" in this.currentTool)) return;

		this.isDrawing = true;
		const currentToolName = SingleEditor.getInstance().getCurrentTool();
		let tool: any;

		switch (currentToolName) {
			case "pen":
				tool = new PenEditor(this.ctx);
				this.currentTool?.startDraw(e);
				break;
			case "eraser":
				tool = new EraserEditor(this.ctx);
				break;
			case "text":
				tool = new TextEditor(this.ctx);
				tool.setPosition(e.offsetX, e.offsetY);
				break;
			default:
				console.error(`Invalid tool name ${currentToolName}`);
				return;
		}

		this.currentTool = tool;
		if (!(this.currentTool && "startDraw" in this.currentTool)) return;

		this.currentTool?.startDraw(e);
	}

	stopDraw() {
		this.isDrawing = false;

		if (!this.ctx || !this.currentTool) return;
		if (!("stopDraw" in this.currentTool)) return;

		this.currentTool?.stopDraw(this.ctx);
	}

	drawLine(e: MouseEvent) {
		if (!this.isDrawing || !this.currentTool) return;

		if ("draw" in this.currentTool) this.currentTool?.draw(e);
	}

	renderText(e: KeyboardEvent) {
		if (this.currentTool && "draw" in this.currentTool)
			this.currentTool?.draw(e);
	}
}
