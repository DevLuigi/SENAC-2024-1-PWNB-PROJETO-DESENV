import { Header } from "./components/header.js";
import { Menu } from "./components/menu.js";
import { Content } from "./components/content.js";
import { Footer } from "./components/footer.js";
import { LabelInput } from "./components/input.js";

customElements.define("wc-header", Header);
customElements.define("wc-menu", Menu);
customElements.define("wc-content", Content);
customElements.define("wc-footer", Footer);
customElements.define("wc-input", LabelInput);