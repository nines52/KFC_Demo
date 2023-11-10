import React from "react";
import ReactDOMClient from "react-dom/client";
import { WwwKfcComAuBy } from "./screens/WwwKfcComAuBy";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<WwwKfcComAuBy />);
