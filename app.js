
import { Navigation } from "./Components/Navigation.js";
import { Home } from "./Components/Home/Home.js";
import { Card } from "./Components/Home/Card.js";
import { Quote } from "./Components/Home/Quote.js";
import { OtherCard } from "./Components/Home/OtherCard.js";
import { Footer } from "./Components/Footer.js";
import { Info } from "./Components/About/Info.js";
import { Service } from "./Components/Service/Service.js";
import { Values } from "./Components/About/Values.js";
import { Product } from "./Components/Product/Product.js";
import { Button } from "./Components/Product/Button.js";
import { Blog } from "./Components/Blog/Blog.js";


customElements.define('navigation-bar', Navigation);
customElements.define('home-content', Home);
customElements.define('card-content', Card);
customElements.define('quote-content', Quote);
customElements.define('other-card', OtherCard);
customElements.define('footer-component', Footer);
customElements.define('info-component', Info);
customElements.define('service-component', Service);
customElements.define('values-component', Values);
customElements.define('product-component', Product)
customElements.define('button-component', Button)
customElements.define('blog-component', Blog)


