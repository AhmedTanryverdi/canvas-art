import "./styles.scss";
import UIComponent from "@/shared/components/ui-component";
import { ToolsBlock } from "@/shared/components/tools-block";
import { Thickness } from "@/shared/components/thickness";

export class LeftToolsBar extends UIComponent {
	constructor(id: string, elementType = "aside") {
		super(id, elementType);
		this.addContent();
	}

	addContent(): void {
		const toolsBlock = new ToolsBlock("tools-block");
		this._container.append(toolsBlock.getElement());

		const thicknessBlock = new Thickness("thickness");
		this._container.append(thicknessBlock.getElement());
	}
}
