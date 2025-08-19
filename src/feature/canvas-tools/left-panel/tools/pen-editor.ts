import { CanvasPenSettings } from "@/shared/utils/constants";
import { IToolsDraw, IToolsStart, IToolsStop } from "@/shared/utils/types";

export class PenEditor implements IToolsStart, IToolsStop, IToolsDraw {
	private __ctx: CanvasRenderingContext2D;
	private __thickness: number;
	private __color: string;
	constructor(ctx: CanvasRenderingContext2D) {
		this.__ctx = ctx;
		this.__thickness = CanvasPenSettings.THICKNESS;
		this.__color = CanvasPenSettings.COLOR;
		this.__ctx.lineCap = CanvasPenSettings.LINE_CAP;
		this.__ctx.lineJoin = CanvasPenSettings.LINE_JOIN;
		this.__ctx.strokeStyle = this.__color;
		this.__ctx.lineWidth = this.__thickness;
	}

	startDraw(e: MouseEvent) {
		if (!this.__ctx) return;
		this.__ctx.beginPath();
		this.__ctx.moveTo(e.offsetX, e.offsetY);
	}

	stopDraw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
	}

	draw(e: MouseEvent) {
		if (!this.__ctx) return;

		this.__ctx?.lineTo(e.offsetX, e.offsetY);
		this.__ctx?.stroke();
	}
}
