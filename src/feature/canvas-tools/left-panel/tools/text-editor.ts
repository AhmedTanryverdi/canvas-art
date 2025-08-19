import { CanvasInputSettings } from "@/shared/utils/constants";
import { IToolsDraw, IToolsStart } from "@/shared/utils/types";

export class TextEditor implements IToolsDraw, IToolsStart {
	ctx: CanvasRenderingContext2D;
	textContent: string;
	xPosition: number;
	yPosition: number;

	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx;
		this.textContent = "";
		this.xPosition = 0;
		this.yPosition = 0;
	}

	setPosition(x: number, y: number) {
		[this.xPosition, this.yPosition] = [x, y];
	}

	startDraw(e: MouseEvent): void {
		this.setPosition(e.offsetX, e.offsetY);
	}

	draw(event: KeyboardEvent): void {
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
		this.ctx.font = CanvasInputSettings.FONT;
		this.ctx.textBaseline = CanvasInputSettings.BASELINE;
		this.ctx.fillText(this.textContent, this.xPosition, this.yPosition);
	}
}
