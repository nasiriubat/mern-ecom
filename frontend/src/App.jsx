import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import { SignUp } from "./components/SignUp";
import {NotFoundPage} from "./components/NotFoundPage";
import {ProductDetails} from "./components/ProductDetails"
import AddProductPage from "./components/AddProductPage";
import Login from "./components/Login";

{/* 

          Game Plan:
          1. First Create a Dynamic Route
          2. Based on the ID on the url we need fetch the product data
          3. based on the Route we need to show a product details page (Componet)
*/}

function App() {

  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/products/:id" element={<ProductDetails />}/>
          <Route path="/addProduct" element={<AddProductPage />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
