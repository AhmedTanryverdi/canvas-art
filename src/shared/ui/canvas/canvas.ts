import { UIComponent } from "@/shared/utils/types";

export class Canvas extends UIComponent {
	create(): HTMLElement | null {
		return document.createElement("canvas");
	}
}
