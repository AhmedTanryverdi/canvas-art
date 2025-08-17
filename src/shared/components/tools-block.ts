import UIComponent from "./ui-component";
import eraserSvg from "@/shared/icons/eraser.svg";
import penSvg from "@/shared/icons/pen.svg";
import textSvg from "@/shared/icons/text.svg";

const TOOLITEMS = ["eraser", "pen", "text"];

export class ToolsBlock extends UIComponent {
	constructor(id: string, blockType: string = "div") {
		super(id, blockType);
		this.addContent();
	}

	addContent(): void {
		TOOLITEMS.forEach((element) => {
			const img = document.createElement("img");
			img.classList.add("tool-icon");
			switch (element) {
				case "eraser":
					img.src = eraserSvg;
					break;
				case "pen":
					img.src = penSvg;
					break;
				case "text":
					img.src = textSvg;
			}
			img.alt = element;
			this.container.append(img);
		});
	}
}
