"use strict";

import "./styles.scss";
import { Canvas } from "./widgets";
import { LeftToolsBar } from "./widgets";
import { RightToolsBar } from "./widgets";

document.addEventListener("DOMContentLoaded", function () {
	const canvas = new Canvas("canvas");
	const leftToolsBar = new LeftToolsBar("left-tools-bar");
	const rightToolsBar = new RightToolsBar("right-tools-bar");

	leftToolsBar.render();
	canvas.render();
	rightToolsBar.render();
});
