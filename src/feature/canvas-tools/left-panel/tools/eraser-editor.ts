import { ERASER_THICKNESS_DEFAULT } from "@/shared/utils/constants";
import { IToolsDraw, IToolsStart } from "@/shared/utils/types";

export class EraserEditor implements IToolsStart, IToolsDraw {
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

	startDraw(e: MouseEvent) {
		this.draw(e);
	}

	draw(e: MouseEvent) {
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
		this.__ctx.globalCompositeOperation = "source-over";
	}
}
