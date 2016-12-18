import React from "react";
import ReactDom from "react-dom";

import MainPanel from "./components/MainPanel";

const app = document.getElementById("app");
ReactDom.render(<MainPanel />, app);