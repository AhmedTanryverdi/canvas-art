export interface IDrawing {
	startDrawing(e: MouseEvent): void;
	drawing(e: MouseEvent | KeyboardEvent): void;
}

export interface IContinuousDrawing extends IDrawing {
	stopDrawing(e: MouseEvent): void;
}

export interface UI {
	create(): HTMLElement | null;
}

export abstract class UIComponent implements UI {
	protected _container: HTMLElement | null = null;

	abstract create(): HTMLElement | null;
}
