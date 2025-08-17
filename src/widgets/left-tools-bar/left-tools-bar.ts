import "./styles.scss";
import UIComponent from "@/shared/components/ui-component";
import { ToolsBlock } from "@/shared/components/tools-block";

export class LeftToolsBar extends UIComponent {
	constructor(id: string, elementType = "aside") {
		super(id, elementType);
		this.addContent();
	}

	addContent(): void {
		const toolsBlock = new ToolsBlock("tools-block");
		this.container.append(toolsBlock.getElement());
	}
}
