import { circleSvg } from "@/shared/icons";
import { diamondSvg } from "@/shared/icons";
import { triangleSvg } from "@/shared/icons";
import { squareSvg } from "@/shared/icons";
import { Div } from "../div/div";
import { SingleEditor } from "@/shared/utils/lib";

const SHAPES = ["circle", "diamond", "triangle", "square"];

export class ShapesBar extends Div {
	create(): HTMLElement | null {
		this._container = super.create();
		this.addShapes();
		return this._container;
	}

	addShapes() {
		if (!this._container) return;

		SHAPES.forEach((shape) => {
			const img = document.createElement("img");
			img?.addEventListener("click", () => {
				const editor = SingleEditor.getInstance();
				editor.setCurrentTool(shape);
			});

			img.classList.add("shape-icon");
			img.classList.add("icon");
			img.alt = shape;
			switch (shape) {
				case "circle":
					img.src = circleSvg;
					break;

				case "diamond":
					img.src = diamondSvg;
					break;

				case "triangle":
					img.src = triangleSvg;
					break;

				case "square":
					img.src = squareSvg;
					break;
			}

			const frame = document.createElement("div");
			frame.classList.add("frame");
			frame.append(img);
			this._container!.append(frame);
		});
	}
}
