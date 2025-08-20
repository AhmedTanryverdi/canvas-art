import { RangeInputSettings } from "@/shared/utils/constants";
import { Input } from "@/shared/ui";
import { SingleEditor } from "@/shared/utils/lib";


export class RangeInput extends Input {
	create(): HTMLElement | null {
		this._container = super.create();
		if (this._container instanceof HTMLInputElement) {
			this._container.type = RangeInputSettings.TYPE;
			this._container.min = RangeInputSettings.MIN;
			this._container.max = RangeInputSettings.MAX;
			this._container.value = RangeInputSettings.VALUE;

			this._container.addEventListener("change", () => {
				SingleEditor.getInstance().setThicknessTool(
					//@ts-ignore
					this._container?.value
				);
			});
		}
		return this._container;
	}

	setValue(value: string) {
		if (this._container instanceof HTMLInputElement) {
			this._container.value = value;
		}
	}
}
