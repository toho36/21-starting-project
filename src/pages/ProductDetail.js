import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();
  return (
    <div>
      ProductDetails
      <p>{params.productId}</p>
      {/* //identifier we defined in routes */}
    </div>
  );
}

export default ProductDetailPage;
