import UIComponent from "@/shared/components/ui-component";

export class Canvas extends UIComponent {
	constructor(id: string, blockType = "canvas") {
		super(id, blockType);
	}

	addContent(): void {}
}
