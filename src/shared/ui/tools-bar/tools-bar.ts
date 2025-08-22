import "./styles.scss";
import { eraserSvg } from "@/shared/icons";
import { penSvg } from "@/shared/icons";
import { textSvg } from "@/shared/icons";
import { Div } from "@/shared/ui";
import { TOOLITEMS } from "@/shared/utils/constants";
import { SingleEditor } from "@/shared/utils/lib";

export class ToolsBar extends Div {
	create(): HTMLElement | null {
		this._container = super.create();
		if (!this._container) return null;
		this._container.id = "tools-bar";

		TOOLITEMS.forEach((element) => {
			const img = document.createElement("img");
			img.addEventListener("click", () => {
				const editor = SingleEditor.getInstance();
				editor.setCurrentTool(element);
			});

			img.classList.add("tool-icon");
			img.classList.add("icon");
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
			this._container!.append(frame);
		});
		return this._container;
	}
}
