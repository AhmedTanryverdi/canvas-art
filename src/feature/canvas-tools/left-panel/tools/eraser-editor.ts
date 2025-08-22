import { ERASER_THICKNESS_DEFAULT } from "@/shared/utils/constants";
import { IContinuousDrawing } from "@/shared/utils/types";

export class EraserEditor implements IContinuousDrawing {
	private __ctx: CanvasRenderingContext2D;
	private __eraserThickness: number;
	constructor(ctx: CanvasRenderingContext2D) {
		this.__ctx = ctx;
		this.__eraserThickness = ERASER_THICKNESS_DEFAULT;
	}

	setThickness(value: string) {
		this.__eraserThickness = parseInt(value);
		this.__ctx.lineWidth = this.__eraserThickness;
	}

	startDrawing(e: MouseEvent) {
		this.drawing(e);
	}

	stopDrawing(e: MouseEvent): void {
		this.__ctx.globalCompositeOperation = "source-over";
	}

	drawing(e: MouseEvent) {
		if (!this.__ctx) return;

		this.__ctx.globalCompositeOperation = "destination-out";

		this.__ctx.arc(
			e.offsetX,
			e.offsetY,
			this.__eraserThickness,
			0,
			Math.PI * 2
		);
		this.__ctx.fill();
		this.__ctx.beginPath();
	}
}
