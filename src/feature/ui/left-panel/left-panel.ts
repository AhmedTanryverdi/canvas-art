import "./styles.scss";
import { Aside } from "@/shared/ui";
import { ToolsBar } from "@/shared/ui";
import { RangeInput } from "@/shared/ui";

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
