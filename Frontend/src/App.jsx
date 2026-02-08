import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage/HomePage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import Navbar from './components/Navbar/Navbar';
import ResetPasswordPage from './pages/AuthenticationPage/ResetPasswordPage';
import Footer from './components/Footer/Footer';
import WishlistPage from './pages/WishListPage/WishListPage';
import ShopPage from './pages/ShopPages/ShopPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ShopWithLeftSideBar from './pages/ShopPages/ShopWithLeftSideBar';
import ShopWithRightSideBar from './pages/ShopPages/ShopWithRightSideBar';
import ShopWithBanner from './pages/ShopPages/ShopWithBanner';
import ShopTwoColumn from './pages/ShopPages/ShopTwoColumn';
import ShopThreeColumn from './pages/ShopPages/ShopThreeColumn';
import ShopFourColumn from './pages/ShopPages/ShopFourColumn';
import ShopFiveColumn from './pages/ShopPages/ShopFiveColumn';
import ShopListView from './pages/ShopPages/ShopListView';
import ShopWithoutSideBar from './pages/ShopPages/ShopWithoutSideBar';
import ProductDefaultPage from './pages/ProductPage/ProductDefaultPage';
import TermsAndConditionPage from './pages/TermsAndConditionPage/TermsAndConditionPage';
import ProductPreOrderPage from './pages/ProductPage/ProductPreOrderPage';
import ProductGalleryThumbnails from './pages/ProductPage/ProductGalleryThumbnails';
import ContactUsPage from './pages/ContactUsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ErrorPage from './pages/ErrorPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProductBottomThumbnails from './pages/ProductPage/ProductBottomThumbnails';
import ProductRightThumbnails from './pages/ProductPage/ProductRightThumbnails';
import ProductLeftThumbnails from './pages/ProductPage/ProductLeftThumbnails';
import ProductDrawer from './pages/ProductPage/ProductDrawer';
import ProductCountDown from './pages/ProductPage/ProductCountDown';
import FindAStore from './pages/ShopPages/FindAStorePage';
import TrackMyOrder from './pages/ShopPages/TrackMyOrder';
import CheckOutPage from './pages/ShopPages/CheckOutPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import GalleryPage from './pages/GalleryPage';
import FaqPage from './pages/FaqPage';
import StandardBlog from './pages/BlogPages/StandardBlog';
import GridBlog from './pages/BlogPages/GridBlog';
import BlogLeftSideBar from './pages/BlogPages/BlogLeftSideBar';
import BlogRightSideBar from './pages/BlogPages/BlogRightSideBar';
import BlogListView from './pages/BlogPages/BlogListView';
import BlogGridMix from './pages/BlogPages/BlogGridMix';
import BlogSinglePostDefault from './pages/BlogPages/BlogSinglePostDefault';
import BlogSinglePostWithLeftSideBar from './pages/BlogPages/BlogSinglePostWithLeftSideBar';
import BlogSinglePostWithRightSideBar from './pages/BlogPages/BlogSinglePostWithRightSideBar';
import CartPage from './pages/CartPage/CartPage';
import NewsLetterVerifyPage from './pages/NewsLetterVerifyPage';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/signup' element={<AuthenticationPage></AuthenticationPage>}></Route>
        <Route path='/resetpassword' element={<ResetPasswordPage></ResetPasswordPage>}></Route>
        <Route path='/wishlist' element={<WishlistPage></WishlistPage>}></Route>
        <Route path='/cartPage' element={<CartPage></CartPage>}></Route>
        <Route path='/shop' element={<ShopPage></ShopPage>}></Route>
        <Route path='/shopWithLeftSideBar' element={<ShopWithLeftSideBar></ShopWithLeftSideBar>}></Route>
        <Route path='/shopWithRightSideBar' element={<ShopWithRightSideBar></ShopWithRightSideBar>}></Route>
        <Route path='/shopWithBanner' element={<ShopWithBanner></ShopWithBanner>}></Route>
        <Route path='/shopTwoColumn' element={<ShopTwoColumn></ShopTwoColumn>}></Route>
        <Route path='/shopThreeColumn' element={<ShopThreeColumn></ShopThreeColumn>}></Route>
        <Route path='/shopFourColumn' element={<ShopFourColumn></ShopFourColumn>}></Route>
        <Route path='/shopFiveColumn' element={<ShopFiveColumn></ShopFiveColumn>}></Route>
        <Route path='/shopWithoutSideBar' element={<ShopWithoutSideBar></ShopWithoutSideBar>}></Route>
        <Route path='/shopListView' element={<ShopListView></ShopListView>}></Route>
        <Route path='/category' element={<CategoryPage></CategoryPage>}></Route>
        <Route path='/termsAndConditions' element={<TermsAndConditionPage></TermsAndConditionPage>}></Route>
        <Route path='/productDefault' element={<ProductDefaultPage></ProductDefaultPage>}></Route>
        <Route path='/productPreOrder' element={<ProductPreOrderPage></ProductPreOrderPage>}></Route>
        <Route path='/productGalleryThumbnails' element={<ProductGalleryThumbnails></ProductGalleryThumbnails>}></Route>
        <Route path='/productBottomThumbnails' element={<ProductBottomThumbnails></ProductBottomThumbnails>}></Route>
        <Route path='/productRightThumbnails' element={<ProductRightThumbnails></ProductRightThumbnails>}></Route>
        <Route path='/productLeftThumbnails' element={<ProductLeftThumbnails></ProductLeftThumbnails>}></Route>
        <Route path='/productDrawer' element={<ProductDrawer></ProductDrawer>}></Route>
        <Route path='/productCountDown' element={<ProductCountDown></ProductCountDown>}></Route>
        <Route path='/aboutUs' element={<AboutUsPage></AboutUsPage>}></Route>
        <Route path='/gallery' element={<GalleryPage></GalleryPage>}></Route>
        <Route path='/faqPage' element={<FaqPage></FaqPage>}></Route>
        <Route path='/standardBlog' element={<StandardBlog></StandardBlog>}></Route>
        <Route path='/blogGrid' element={<GridBlog></GridBlog>}></Route>
        <Route path='/blogGridMix' element={<BlogGridMix></BlogGridMix>}></Route>
        <Route path='/blogWithLeftSideBar' element={<BlogLeftSideBar></BlogLeftSideBar>}></Route>
        <Route path='/blogWithRightSideBar' element={<BlogRightSideBar></BlogRightSideBar>}></Route>
        <Route path='/blogListView' element={<BlogListView></BlogListView>}></Route>
        <Route path='/blogSinglePost' element={<BlogSinglePostDefault></BlogSinglePostDefault>}></Route>
        <Route path='/blogSinglePostLeftSideBar' element={<BlogSinglePostWithLeftSideBar></BlogSinglePostWithLeftSideBar>}></Route>
        <Route path='/blogSinglePostRightSideBar' element={<BlogSinglePostWithRightSideBar></BlogSinglePostWithRightSideBar>}></Route>
        <Route path='/findStore' element={<FindAStore></FindAStore>}></Route>
        <Route path='/trackMyOrder' element={<TrackMyOrder></TrackMyOrder>}></Route>
        <Route path='/checkOut' element={<CheckOutPage></CheckOutPage>}></Route>
        <Route path='/contactUs' element={<ContactUsPage></ContactUsPage>}></Route>
        <Route path='/refundPolicy' element={<RefundPolicyPage></RefundPolicyPage>}></Route>
        <Route path='/error404' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/privacyPolicy' element={<PrivacyPolicyPage></PrivacyPolicyPage>}></Route>

        <Route path='/newsletter/verify' element={<NewsLetterVerifyPage></NewsLetterVerifyPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
