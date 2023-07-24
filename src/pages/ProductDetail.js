import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();
  return (
    <div>
      ProductDetails
      <p>{params.productId}</p>
      {/* //identifier we defined in routes */}
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
}

export default ProductDetailPage;
