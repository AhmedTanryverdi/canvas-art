export enum CanvasSize {
	CANVAS_WIDTH = 1150,
	CANVAS_HEIGHT = window.innerHeight * 0.8,
}

export enum CanvasInputSettings {
	FONT = "30px Arial",
	BASELINE = "top",
}

export enum CanvasPenSettings {
	THICKNESS = 5,
	COLOR = "#000",
	LINE_CAP = "round",
	LINE_JOIN = "round",
}

export enum RangeInputSettings {
	TYPE = "range",
	MIN = "1",
	MAX = "30",
	VALUE = "5",
}

export const ERASER_THICKNESS_DEFAULT = 20;

export const TOOLITEMS = ["eraser", "pen", "text"];

export const BASE_COMPONENTS = ["left-panel", "canvas-board"];
