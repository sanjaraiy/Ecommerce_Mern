import React from 'react'
import ProductDetails from '../features/product-list/components/ProductDetails'
import NavBar from '../features/navbar/NavBar'

function ProductDetailPage() {
  return (
   <div>
        <NavBar>
          <ProductDetails></ProductDetails>
        </NavBar>
   </div>
  )
}

export default ProductDetailPage