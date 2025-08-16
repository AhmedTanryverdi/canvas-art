"use strict";

import "./styles.scss";
import Canvas from "./widgets/canvas";
import LeftToolsBar from "./widgets/left-tools-bar";
import RightToolsBar from "./widgets/right-tools-bar";

document.addEventListener("DOMContentLoaded", function () {
	const canvas = new Canvas("canvas");
	const leftToolsBar = new LeftToolsBar("left-tools-bar");
	const rightToolsBar = new RightToolsBar("right-tools-bar");

	leftToolsBar.render();
	canvas.render();
	rightToolsBar.render();
});
