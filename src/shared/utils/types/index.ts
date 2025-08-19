export interface IToolsStart {
	startDraw(e: MouseEvent): void;
}

export interface IToolsStop {
	stopDraw(ctx: CanvasRenderingContext2D): void;
}

export interface IToolsDraw {
	draw(e: MouseEvent | KeyboardEvent): void;
}
