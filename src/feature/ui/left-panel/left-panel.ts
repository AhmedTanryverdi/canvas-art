import "./styles.scss";
import { Aside } from "@/shared/ui/aside/aside";
import { ToolsBar } from "@/shared/ui/tools-bar/tools-bar";
import { RangeInput } from "@/shared/ui/range-input/range-input";

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

		return this._container;
	}
}
