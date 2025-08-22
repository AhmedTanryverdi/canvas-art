import { PenEditor } from "@/feature/canvas-tools";
import { EraserEditor } from "@/feature/canvas-tools";
import { TextEditor } from "@/feature/canvas-tools";
import { IDrawing, IContinuousDrawing } from "@/shared/utils/types";
import { SingleEditor } from "@/shared/utils/lib/single-editor";
import { Circle } from "../left-panel/figure/circle";

export class CanvasEditor {
	private __canvas: HTMLCanvasElement;
	private __ctx: CanvasRenderingContext2D | null;
	private __currentTool: (IDrawing | IContinuousDrawing) | null;
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
		if (!(this.__currentTool && "startDrawing" in this.__currentTool))
			return;

		this.__isDrawing = true;
		const editor = SingleEditor.getInstance();
		const currentToolName = editor.getCurrentTool();

		let tool: any;

		switch (currentToolName) {
			case "pen":
				tool = new PenEditor(this.__ctx);
				tool.setThickness(editor.getThicknessTool());
				break;
			case "eraser":
				tool = new EraserEditor(this.__ctx);
				tool.setThickness(editor.getThicknessTool());
				break;
			case "text":
				tool = new TextEditor(this.__ctx);
				tool.setThickness(editor.getThicknessTool());
				break;
			case "circle":
				tool = new Circle(this.__canvas);
				break;
			default:
				console.error(`Invalid tool name ${currentToolName}`);
				return;
		}

		this.__currentTool = tool;
		if (!(this.__currentTool && "startDrawing" in this.__currentTool))
			return;

		this.__currentTool?.startDrawing.bind(this.__currentTool)(e);
	}

	stopDraw(e?: MouseEvent) {
		this.__isDrawing = false;

		if (!this.__ctx || !this.__currentTool) return;

		if ("stopDrawing" in this.__currentTool) {
			this.__currentTool?.stopDrawing.bind(this.__currentTool)(e!);
		}
	}

	drawLine(e: MouseEvent) {
		if (!this.__isDrawing || !this.__currentTool) return;

		if (
			"drawing" in this.__currentTool &&
			!(this.__currentTool instanceof TextEditor)
		)
			this.__currentTool?.drawing.bind(this.__currentTool)(e);
	}

	renderText(e: KeyboardEvent) {
		if (this.__currentTool && "drawing" in this.__currentTool)
			this.__currentTool?.drawing(e);
	}
}
