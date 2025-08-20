import { UIComponent } from "@/shared/utils/types";

export class Aside extends UIComponent {
	create(): HTMLElement | null {
		return document.createElement("aside");
	}
}
