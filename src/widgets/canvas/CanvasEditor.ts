export class CanvasEditor {
	canvas: any;
	ctx: any;
	editor: string;
	isDrawing: boolean;

	constructor(canvas: any) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.editor = "pen";
		this.isDrawing = false;

		this.ctx.lineCap = "round";
		this.ctx.lineJoin = "round";
		this.ctx.strokeStyle = "#000"; // Цвет линии
		this.ctx.lineWidth = 5;

		console.log(this.canvas.width, this.canvas.height);
	}

	startDraw(e: MouseEvent) {
		this.isDrawing = true;
		this.ctx.beginPath();
		this.ctx.moveTo(e.offsetX, e.offsetY);
	}

	stopDraw() {
		this.isDrawing = false;
		this.ctx.beginPath();
	}

	drawLine(e: MouseEvent) {
		if (!this.isDrawing) return;

		this.ctx.lineTo(e.offsetX, e.offsetY);
		this.ctx.stroke();
	}
}
