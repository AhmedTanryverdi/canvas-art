import { ThicknessToolSettings } from "../utils/constants";
import SingleEditor from "../utils/lib/SingleEditor";
import UIComponent from "./ui-component";

export class Thickness extends UIComponent {
	constructor(id: string, elementType: string = "input") {
		super(id, elementType);
		if (this._container instanceof HTMLInputElement) {
			this._container.type = ThicknessToolSettings.TYPE;
			this._container.min = ThicknessToolSettings.MIN;
			this._container.max = ThicknessToolSettings.MAX;
			this._container.value = ThicknessToolSettings.VALUE;
			this.addContent();
		}
	}

	setThickness(value: string): void {
		if (this._container instanceof HTMLInputElement) {
			this._container.value = value;
		}
	}

	addContent() {
		this._container.addEventListener("change", () => {
			if (this._container instanceof HTMLInputElement) {
				SingleEditor.getInstance().setThicknessTool(
					this._container.value
				);
			}
		});
	}
}
