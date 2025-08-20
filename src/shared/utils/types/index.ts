export interface IToolsStart {
	startDraw(e: MouseEvent): void;
}

export interface IToolsStop {
	stopDraw(ctx: CanvasRenderingContext2D): void;
}

export interface IToolsDraw {
	draw(e: MouseEvent | KeyboardEvent): void;
}

export interface UI {
	create(): HTMLElement | null;
}

export abstract class UIComponent implements UI {
	protected _container: HTMLElement | null = null;

	abstract create(): HTMLElement | null;
}
