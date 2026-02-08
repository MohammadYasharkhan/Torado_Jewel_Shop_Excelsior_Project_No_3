import { ProductRepository } from "../repositories/productRepository.js";

class ProductService{
    static async getAllProducts()
    {
        const productEntries = await ProductRepository.getAll();
        return productEntries;
    }

    static async insertMutipleProducts(products)
    {
        const productEntries = await ProductRepository.addAll(products);
        return productEntries;
    }
}

export { ProductService };