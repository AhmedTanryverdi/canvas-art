import { CanvasPenSettings } from "@/shared/utils/constants";
import { IToolsDraw, IToolsStart, IToolsStop } from "@/shared/utils/types";

export class PenEditor implements IToolsStart, IToolsStop, IToolsDraw {
	private ctx: CanvasRenderingContext2D;
	thickness: number;
	color: string;
	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx;
		this.thickness = CanvasPenSettings.THICKNESS;
		this.color = CanvasPenSettings.COLOR;
		this.ctx.lineCap = CanvasPenSettings.LINE_CAP;
		this.ctx.lineJoin = CanvasPenSettings.LINE_JOIN;
		this.ctx.strokeStyle = this.color;
		this.ctx.lineWidth = this.thickness;
	}

	startDraw(e: MouseEvent) {
		if (!this.ctx) return;
		this.ctx.beginPath();
		this.ctx.moveTo(e.offsetX, e.offsetY);
	}

	stopDraw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
	}

	draw(e: MouseEvent) {
		if (!this.ctx) return;

		this.ctx?.lineTo(e.offsetX, e.offsetY);
		this.ctx?.stroke();
	}
}
