import { PenEditor } from "@/feature/canvas-tools";
import { EraserEditor } from "@/feature/canvas-tools";
import { TextEditor } from "@/feature/canvas-tools";
import { IToolsDraw, IToolsStart, IToolsStop } from "@/shared/utils/types";
import { SingleEditor } from "@/shared/utils/lib/single-editor";

export class CanvasEditor {
	private __canvas: HTMLCanvasElement;
	private __ctx: CanvasRenderingContext2D | null;
	private __currentTool: (IToolsStart | IToolsStop | IToolsDraw) | null;
	private __isDrawing: boolean;

	constructor(canvas: HTMLCanvasElement) {
		this.__canvas = canvas;
		this.__ctx = this.__canvas.getContext("2d");
		if (!this.__ctx) throw new Error("context error!");
		this.__currentTool = new PenEditor(this.__ctx);
		this.__isDrawing = false;
	}

	startDraw(e: MouseEvent) {
		if (!this.__ctx) return;
		if (!(this.__currentTool && "startDraw" in this.__currentTool)) return;

		this.__isDrawing = true;
		const editor = SingleEditor.getInstance();
		const currentToolName = editor.getCurrentTool();

		let tool: any;

		switch (currentToolName) {
			case "pen":
				tool = new PenEditor(this.__ctx);
				tool.setThickness(editor.getThicknessTool());
				this.__currentTool?.startDraw(e);
				break;
			case "eraser":
				tool = new EraserEditor(this.__ctx);
				tool.setThickness(editor.getThicknessTool());
				break;
			case "text":
				tool = new TextEditor(this.__ctx);
				tool.setThickness(editor.getThicknessTool());
				tool.setPosition(e.offsetX, e.offsetY);
				break;
			default:
				console.error(`Invalid tool name ${currentToolName}`);
				return;
		}

		this.__currentTool = tool;
		if (!(this.__currentTool && "startDraw" in this.__currentTool)) return;

		this.__currentTool?.startDraw(e);
	}

	stopDraw() {
		this.__isDrawing = false;

		if (!this.__ctx || !this.__currentTool) return;
		if (!("stopDraw" in this.__currentTool)) return;

		this.__currentTool?.stopDraw(this.__ctx);
	}

	drawLine(e: MouseEvent) {
		if (!this.__isDrawing || !this.__currentTool) return;

		if ("draw" in this.__currentTool) this.__currentTool?.draw(e);
	}

	renderText(e: KeyboardEvent) {
		if (this.__currentTool && "draw" in this.__currentTool)
			this.__currentTool?.draw(e);
	}
}
