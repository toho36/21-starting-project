import React from 'react';
import { Link } from 'react-router-dom';
function ProductsPage() {
  return (
    <>
      <h1>MY products list</h1>
      <p>
        Go to <Link to="/"> HomePage</Link>
      </p>
    </>
  );
}

export default ProductsPage;
