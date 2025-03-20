const Home = () => import(
  /* webpackChunkName: "sf-home" */
  "./Home-CWbAAXSk.js"
);
const PageNotFound = () => import(
  /* webpackChunkName: "sf-page-not-found" */
  "./PageNotFound-DN9NvWPv.js"
);
const Category = () => import(
  /* webpackChunkName: "sf-category-page" */
  "./Category-BCclQ0S9.js"
);
const Login = () => import(
  /* webpackChunkName: "sf-login" */
  "./Login-OFSPjf9X.js"
);
const ForgotPassword = () => import(
  /* webpackChunkName: "sf-forgot-password" */
  "./ForgotPassword-CDVQUVCk.js"
);
const ResetPassword = () => import(
  /* webpackChunkName: "sf-forgot-password" */
  "./ResetPassword-BG4Bgfds.js"
);
const CreateAccount = () => import(
  /* webpackChunkName: "sf-create-account" */
  "./CreateAccount-BX24fsK_.js"
);
const Account = () => import(
  /* webpackChunkName: "sf-create-account" */
  "./Account-DNiHDNUM.js"
);
const CmsPage = () => import(
  /* webpackChunkName: "sf-cms-page" */
  "./StaticPage-DDlzli0T.js"
);
const Product = () => import(
  /* webpackChunkName: "sf-product" */
  "./Product-DryFEeJs.js"
);
const Cart = () => import(
  /* webpackChunkName: "sf-cart" */
  "./Cart-CyY7Ft6R.js"
);
const Checkout = () => import(
  /* webpackChunkName: "sf-checkout" */
  "./Checkout-D9yse52l.js"
);
const PaymentSuccess = () => import(
  /* webpackChunkName: "sf-payment-success" */
  "./PaymentSuccess-BB7VZS7U.js"
);
const PaymentCancel = () => import(
  /* webpackChunkName: "sf-payment-cancel" */
  "./PaymentCancel-B8tx04uk.js"
);
const OurShop = () => import(
  /* webpackChunkName: "sf-our-shop" */
  "./OurShop-DasKNyne.js"
);
const Brands = () => import(
  /* webpackChunkName: "sf-our-shop" */
  "./Brands-D5HKRsfD.js"
);
const Brand = () => import(
  /* webpackChunkName: "sf-our-shop" */
  "./Brand-ZRKR2BMC.js"
);
const Search = () => import(
  /* webpackChunkName: "sf-our-shop" */
  "./Search-XV1kCrTl.js"
);
const Faq = () => import(
  /* webpackChunkName: "sf-our-shop" */
  "./Faq-DEgq69nr.js"
);
const Contact = () => import(
  /* webpackChunkName: "sf-our-shop" */
  "./Contact-CFWgLEdO.js"
);
const Blogs = () => import(
  /* webpackChunkName: "sf-our-shop" */
  "./Blogs-CJhKMrEQ.js"
);
const Blog = () => import(
  /* webpackChunkName: "sf-our-shop" */
  "./Blog-ail3gLgu.js"
);
const routes = [
  { name: "home", path: "/", component: Home },
  { name: "error", path: "/error", component: PageNotFound },
  { name: "login", path: "/login", component: Login },
  {
    name: "forgot-password",
    path: "/forgot-password",
    component: ForgotPassword
  },
  {
    name: "reset-password",
    path: "/customer/account/createPassword",
    component: ResetPassword
  },
  { name: "create-account", path: "/create-account", component: CreateAccount },
  { name: "account", path: "/account", component: Account },
  { name: "product-SimpleProduct", path: "/product", component: Product },
  { name: "cms-page", path: "/cms-page", component: CmsPage },
  { name: "cart", path: "/checkout/cart", component: Cart },
  { name: "checkout", path: "/checkout", component: Checkout },
  { name: "ourshop", path: "/winkel/:code", component: OurShop },
  { name: "search", path: "/search", component: Search },
  // { name: "sale", path: "/sale", component: Sale },
  { name: "brands", path: "/merken", component: Brands },
  { name: "blogs", path: "/blog", component: Blogs },
  { name: "blog", path: "/blog/:code", component: Blog },
  { name: "brand", path: "/merken/:code", component: Brand },
  {
    name: "onpagesuccess",
    path: "/checkout/onepage/success",
    component: PaymentSuccess
  },
  {
    name: "onpagecancel",
    path: "/checkout/onepage/cancel",
    component: PaymentCancel
  },
  {
    name: "multisafepaysuccess",
    path: "/multisafepay/connect/success",
    component: PaymentSuccess
  },
  {
    name: "multisafepaycancel",
    path: "/multisafepay/connect/cancel",
    component: PaymentCancel
  },
  { name: "category-page", path: "/category-page", component: Category },
  {
    name: "product-ConfigurableProduct",
    path: "/productconfig",
    component: Product
  },
  {
    name: "product-BundleProduct",
    path: "/productbundle",
    component: Product
  },
  {
    name: "product-page",
    path: "/product",
    component: Product
  },
  {
    name: "product-LookProduct",
    path: "/productlook",
    component: Product
  },
  {
    name: "faq",
    path: "/faq",
    component: Faq
  },
  { name: "page-not-found", path: "/page-not-found", component: PageNotFound },
  {
    name: "contact",
    path: "/contact",
    component: Contact
  }
];
export {
  routes as default
};
//# sourceMappingURL=index-Bs-WhAa1.js.map
