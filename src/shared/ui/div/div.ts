import { UIComponent } from "@/shared/utils/types";

export class Div extends UIComponent {
	create(): HTMLElement | null {
		return document.createElement("div");
	}
}
