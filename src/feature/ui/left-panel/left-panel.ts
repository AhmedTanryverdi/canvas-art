import "./styles.scss";
import { Aside } from "@/shared/ui/aside/aside";
import { ToolsBar } from "@/shared/ui/tools-bar/tools-bar";
import { RangeInput } from "@/shared/ui/range-input/range-input";
import { ShapesBar } from "@/shared/ui/shapes-bar/shapes-bar";

export class LeftPanel extends Aside {
	create(): HTMLElement | null {
		this._container = super.create();

		if (!this._container) return null;
		this._container.id = "left-panel";

		const toolsBar = new ToolsBar().create();
		if (!toolsBar) return null;
		this._container?.append(toolsBar);

		const toolThickness = new RangeInput().create();
		if (!toolThickness) return null;
		this._container?.append(toolThickness);

		const shapesBar = new ShapesBar().create();
		if (!shapesBar) return null;
		this._container?.append(shapesBar);

		return this._container;
	}
}
