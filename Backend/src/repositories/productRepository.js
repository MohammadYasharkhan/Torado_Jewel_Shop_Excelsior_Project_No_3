import { db_object } from "../configs/dbConfig.js";
import { RecordNotFoundError } from "../errorHandler/errorHandler.js";

class ProductRepository {
    static async getAll() {
        const [rows] = await db_object.query("CALL getAll_products()");
        const products = rows[0];

        if (!products || products.length === 0) {
            throw new RecordNotFoundError();
        }

        return products;
    }

    static async addAll(products) {
        const connection = await db_object.getConnection();

        try {
            await connection.beginTransaction();

            for (const product of products) {
                await connection.query(
                    'CALL add_single_products(?,?,?,?,?)',
                    [
                        product.name,
                        product.image,
                        product.price,
                        product.sale_price,
                        product.stock
                    ]
                );
            }

            await connection.commit();
            return { success: true };
        } catch (err) {
            await connection.rollback();
            throw err; // 👈 MUST rethrow
        } finally {
            connection.release();
        }
    }
}

export { ProductRepository };