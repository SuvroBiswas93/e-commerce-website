import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { CategoryDropdown } from './components/CategoryDropdown';
import { Footer } from './components/Footer';
import { SideNavbar } from './components/SideNavbar';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Grocery } from './pages/Grocery';
import { Mobile } from './pages/Mobile';
import { Furniture } from './pages/Furniture';
import { HomeAppliances } from './pages/HomeAppliances';
import { MensFashion } from './pages/fashion/MensFashion';
import { WomensFashion } from './pages/fashion/WomensFashion';
import { KidsFashion } from './pages/fashion/KidsFashion';
import { TShirts } from './pages/fashion/men/TShirts';
import { Shirts } from './pages/fashion/men/Shirts';
import { Pants } from './pages/fashion/men/Pants';
import { Suits } from './pages/fashion/men/Suits';
import { Dresses } from './pages/fashion/women/Dresses';
import { Tops } from './pages/fashion/women/Tops';
import { Skirts } from './pages/fashion/women/Skirts';
import { Boys } from './pages/fashion/kids/Boys';
import { Girls } from './pages/fashion/kids/Girls';
import { Infants } from './pages/fashion/kids/Infants';
import { Shoes } from './pages/fashion/kids/Shoes';
import { Accessories } from './pages/fashion/kids/Accessories';
import { Discounts } from './pages/Discounts';
import { ProductDetail } from './pages/ProductDetail';

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          {/* <CategoryDropdown /> */}
          <SideNavbar />
          <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/grocery" element={<Grocery />} />
              <Route path="/mobile" element={<Mobile />} />
              <Route path="/furniture" element={<Furniture />} />
              <Route path="/home-appliances" element={<HomeAppliances />} />
              <Route path="/fashion/men" element={<MensFashion />} />
              <Route path="/fashion/women" element={<WomensFashion />} />
              <Route path="/fashion/kids" element={<KidsFashion />} />
              <Route path="/fashion/men/t-shirts" element={<TShirts />} />
              <Route path="/fashion/men/shirts" element={<Shirts />} />
              <Route path="/fashion/men/pants" element={<Pants />} />
              <Route path="/fashion/men/suits" element={<Suits />} />
              <Route path="/fashion/women/dresses" element={<Dresses />} />
              <Route path="/fashion/women/tops" element={<Tops />} />
              <Route path="/fashion/women/skirts" element={<Skirts />} />
              <Route path="/fashion/kids/boys" element={<Boys />} />
              <Route path="/fashion/kids/girls" element={<Girls />} />
              <Route path="/fashion/kids/infants" element={<Infants />} />
              <Route path="/fashion/kids/shoes" element={<Shoes />} />
              <Route path="/fashion/kids/accessories" element={<Accessories />} />
              <Route path="/discounts" element={<Discounts />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
              borderRadius: '8px',
            },
          }} 
        />
      </Router>
    </QueryClientProvider>
  );
}

export default App;