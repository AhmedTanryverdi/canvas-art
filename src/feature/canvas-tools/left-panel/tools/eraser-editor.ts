import { ERASER_THICKNESS_DEFAULT } from "@/shared/utils/constants";
import { IContinuousDrawing } from "@/shared/utils/types";

export class EraserEditor implements IContinuousDrawing {
	private __ctx: CanvasRenderingContext2D;
	private __eraserThickness: number;
	private __isDrawing: boolean;

	constructor(ctx: CanvasRenderingContext2D) {
		this.__ctx = ctx;
		this.__eraserThickness = ERASER_THICKNESS_DEFAULT;
		this.__isDrawing = false;
	}

	setThickness(value: string) {
		this.__eraserThickness = parseInt(value);
		this.__ctx.lineWidth = this.__eraserThickness;
	}

	startDrawing(e: MouseEvent) {
		this.__isDrawing = true;
	}

	stopDrawing(): void {
		this.__isDrawing = false;
		this.__ctx.globalCompositeOperation = "source-over";
	}

	drawing(e: MouseEvent) {
		if (!this.__ctx || !this.__isDrawing) return;

		this.__ctx.globalCompositeOperation = "destination-out";

		const x = e.offsetX;
		const y = e.offsetY;

		this.__ctx.beginPath();
		this.__ctx.arc(x, y, this.__eraserThickness / 2, 0, Math.PI * 2);
		this.__ctx.fill();
		this.__ctx.closePath();
	}
}
