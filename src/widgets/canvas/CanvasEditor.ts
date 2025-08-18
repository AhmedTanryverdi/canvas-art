import SingleEditor from "@/shared/lib/SingleEditor";

export class CanvasEditor {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D | null;
	isDrawing: boolean;
	textContent: string;
	xPosition: number;
	yPosition: number;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.isDrawing = false;
		this.textContent = "";
		this.xPosition = 10;
		this.yPosition = 50;
	}

	renderText(event: KeyboardEvent) {
		if (!this.ctx || !event.key) return;
		event.preventDefault();

		const lastCharIndex = this.textContent.length - 1;
		if (event.key === "Backspace") {
			if (lastCharIndex >= 0) {
				// Измеряем ширину последнего символа
				const metrics = this.ctx.measureText(
					this.textContent[lastCharIndex]
				);

				// Определяем позицию начала символа относительно общей позиции строки
				const xPosOfLastSymbol =
					this.xPosition +
					this.ctx.measureText(
						this.textContent.substring(0, lastCharIndex)
					).width;

				this.textContent = this.textContent.slice(0, -1);

				// Чистка места последнего символа
				this.ctx.clearRect(
					xPosOfLastSymbol,
					this.yPosition,
					metrics.width,
					40
				);
			}
		} else if (event.key.length === 1) {
			this.textContent += event.key;
		} else if (event.key === "Enter") {
			this.yPosition += 40;
			this.textContent = "";
		}

		// Прорисовываем текст на холсте
		this.ctx.font = "30px Arial";
		this.ctx.textBaseline = "top";
		this.ctx.fillText(this.textContent, this.xPosition, this.yPosition);
	}

	startDraw(e: MouseEvent) {
		this.isDrawing = true;

		const editor = SingleEditor.getInstance().getCurrentTool();
		switch (editor) {
			case "pen":
				setPenStart(e, this.ctx);
				break;
			case "eraser":
				this.ctx && setEraserStart(e, this.ctx);
			case "text":
				[this.xPosition, this.yPosition] = [e.offsetX, e.offsetY];
				this.textContent = "";
		}
	}

	stopDraw() {
		this.isDrawing = false;
		const editor = SingleEditor.getInstance().getCurrentTool();
		switch (editor) {
			case "pen":
				this.ctx?.beginPath();
				break;
			case "eraser":
				if (this.isDrawing) this.isDrawing = false;
		}
	}

	drawLine(e: MouseEvent) {
		if (!this.isDrawing) return;

		const editor = SingleEditor.getInstance().getCurrentTool();
		switch (editor) {
			case "pen":
				this.ctx?.lineTo(e.offsetX, e.offsetY);
				this.ctx?.stroke();
				break;
			case "eraser":
				this.ctx && drawEraser(e, this.ctx);
		}
	}
}

function setPenStart(e: MouseEvent, ctx: any) {
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.strokeStyle = "#000";
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.moveTo(e.offsetX, e.offsetY);
}

function setEraserStart(e: MouseEvent, ctx: CanvasRenderingContext2D) {
	drawEraser(e, ctx);
}

function drawEraser(e: MouseEvent, ctx: CanvasRenderingContext2D) {
	ctx.globalCompositeOperation = "destination-out";

	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 20 / 2, 0, Math.PI * 2);
	ctx.fill();
	ctx.globalCompositeOperation = "source-over";
}
