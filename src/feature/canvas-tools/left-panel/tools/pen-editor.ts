import { CanvasPenSettings } from "@/shared/utils/constants";
import { IContinuousDrawing } from "@/shared/utils/types";

export class PenEditor implements IContinuousDrawing {
	private __ctx: CanvasRenderingContext2D;
	private __color: string;
	constructor(ctx: CanvasRenderingContext2D) {
		this.__ctx = ctx;
		this.__color = CanvasPenSettings.COLOR;
		this.__ctx.lineCap = CanvasPenSettings.LINE_CAP;
		this.__ctx.lineJoin = CanvasPenSettings.LINE_JOIN;
		this.__ctx.strokeStyle = this.__color;
		this.__ctx.lineWidth = CanvasPenSettings.THICKNESS;
	}

	setThickness(value: string) {
		this.__ctx.lineWidth = parseInt(value);
	}

	startDrawing(e: MouseEvent) {
		if (!this.__ctx) return;
		this.__ctx.beginPath();
		this.__ctx.moveTo(e.offsetX, e.offsetY);
	}

	stopDrawing(e: MouseEvent) {
		this.__ctx.closePath();
	}

	drawing(e: MouseEvent) {
		if (!this.__ctx) return;
		this.__ctx?.lineTo(e.offsetX, e.offsetY);
		this.__ctx?.stroke();
	}
}
