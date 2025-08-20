import { UIComponent } from "@/shared/utils/types";

export class Input extends UIComponent {
	create(): HTMLElement | null {
		return document.createElement("input");
	}
}
