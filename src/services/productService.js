import axios from 'axios';

class ProductService {
  static getAlls() {
    return axios.get('http://localhost:8081/api/products');
  }
}

export default ProductService;
