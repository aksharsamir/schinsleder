const Home = () => import("./Home-C6lsAb82.js");
const PageNotFound = () => import("./PageNotFound-DN9NvWPv.js");
const Category = () => import("./Category-eF0T-C1T.js");
const Login = () => import("./Login-0So1aRqh.js");
const ForgotPassword = () => import("./ForgotPassword-7SKF7D7x.js");
const ResetPassword = () => import("./ResetPassword-DQj-6KRj.js");
const CreateAccount = () => import("./CreateAccount-CZBe1I3v.js");
const Account = () => import("./Account-DDbWKHjY.js");
const CmsPage = () => import("./StaticPage-DDlzli0T.js");
const Product = () => import("./Product-C6g6klwP.js");
const Cart = () => import("./Cart-rHIXsIGB.js");
const Checkout = () => import("./Checkout-BnwRlJ2n.js");
const PaymentSuccess = () => import("./PaymentSuccess-CvXHBDpt.js");
const PaymentCancel = () => import("./PaymentCancel-B8tx04uk.js");
const OurShop = () => import("./OurShop-DasKNyne.js");
const Brands = () => import("./Brands-D5HKRsfD.js");
const Search = () => import("./Search-BSic8pUO.js");
const Faq = () => import("./Faq-DEgq69nr.js");
const Contact = () => import("./Contact-tahcCxKq.js");
const Blogs = () => import("./Blogs-Te7VaWAe.js");
const Blog = () => import("./Blog-BiuwsH57.js");
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
  { name: "brands", path: "/merk", component: Brands },
  { name: "blogs", path: "/blog", component: Blogs },
  { name: "blog", path: "/blog/:code", component: Blog },
  // { name: "brand", path: "/merken/:code", component: Brand },
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
//# sourceMappingURL=index-DtMRXCGM.js.map
