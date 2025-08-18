import UIComponent from "./ui-component";
import eraserSvg from "@/shared/icons/eraser.svg";
import penSvg from "@/shared/icons/pen.svg";
import textSvg from "@/shared/icons/text.svg";
import SingleEditor from "../lib/SingleEditor";

const TOOLITEMS = ["eraser", "pen", "text"];

export class ToolsBlock extends UIComponent {
	constructor(id: string, blockType: string = "div") {
		super(id, blockType);
		this.addContent();
	}

	addContent(): void {
		TOOLITEMS.forEach((element) => {
			const img = document.createElement("img");
			img.addEventListener("click", () => {
				const editor = SingleEditor.getInstance();
				editor.setCurrentTool(element);
			});
			
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
			const frame = document.createElement("div");
			frame.classList.add("frame");
			frame.append(img);
			this.container.append(frame);
		});
	}
}
