export class SingleEditor {
	private static __instance: SingleEditor | null = null;
	private __currentTool: string = "pen";
	private __thicknessTool: string = "5";
	private constructor() {}

	public static getInstance(): SingleEditor {
		if (!SingleEditor.__instance) {
			SingleEditor.__instance = new SingleEditor();
		}
		return SingleEditor.__instance;
	}

	public setCurrentTool(tool: string): void {
		this.__currentTool = tool;
	}

	public getCurrentTool(): string {
		return this.__currentTool;
	}

	public setThicknessTool(value: string) {
		this.__thicknessTool = value;
	}

	getThicknessTool() {
		return this.__thicknessTool;
	}
}
