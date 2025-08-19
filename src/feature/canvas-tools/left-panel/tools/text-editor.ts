import { CanvasInputSettings } from "@/shared/utils/constants";
import { IToolsDraw, IToolsStart } from "@/shared/utils/types";

export class TextEditor implements IToolsDraw, IToolsStart {
	private __ctx: CanvasRenderingContext2D;
	private __textContent: string;
	private __xPosition: number;
	private __yPosition: number;

	constructor(ctx: CanvasRenderingContext2D) {
		this.__ctx = ctx;
		this.__textContent = "";
		this.__xPosition = 0;
		this.__yPosition = 0;
	}

	setPosition(x: number, y: number) {
		[this.__xPosition, this.__yPosition] = [x, y];
	}

	startDraw(e: MouseEvent): void {
		this.setPosition(e.offsetX, e.offsetY);
	}

	draw(event: KeyboardEvent): void {
		if (!this.__ctx || !event.key) return;
		event.preventDefault();

		const lastCharIndex = this.__textContent.length - 1;
		if (event.key === "Backspace") {
			if (lastCharIndex >= 0) {
				// Измеряем ширину последнего символа
				const metrics = this.__ctx.measureText(
					this.__textContent[lastCharIndex]
				);

				// Определяем позицию начала символа относительно общей позиции строки
				const xPosOfLastSymbol =
					this.__xPosition +
					this.__ctx.measureText(
						this.__textContent.substring(0, lastCharIndex)
					).width;

				this.__textContent = this.__textContent.slice(0, -1);

				// Чистка места последнего символа
				this.__ctx.clearRect(
					xPosOfLastSymbol,
					this.__yPosition,
					metrics.width,
					40
				);
			}
		} else if (event.key.length === 1) {
			this.__textContent += event.key;
		} else if (event.key === "Enter") {
			this.__yPosition += 40;
			this.__textContent = "";
		}

		// Прорисовываем текст на холсте
		this.__ctx.font = CanvasInputSettings.FONT;
		this.__ctx.textBaseline = CanvasInputSettings.BASELINE;
		this.__ctx.fillText(this.__textContent, this.__xPosition, this.__yPosition);
	}
}
