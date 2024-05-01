import { Header } from "./components/header.js";
import { Menu } from "./components/menu.js";
import { Content } from "./components/content.js";
import { Footer } from "./components/footer.js";

customElements.define("wc-header", Header);
customElements.define("wc-menu", Menu);
customElements.define("wc-content", Content);
customElements.define("wc-footer", Footer);