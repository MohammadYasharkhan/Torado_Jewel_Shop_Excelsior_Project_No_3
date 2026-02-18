import { ValidationError } from "../errorHandler/errorHandler.js";
import { addUser, loginSuccess, ResponseHandler, getAlldataS } from "../responceHandler/userResponseHandler.js";
import { ProductService } from "../services/productService.js";
import { UploadImageService } from "../services/uploadImageService.js";

const getAllProductsController = async (req, res, next) => {
    try {
        const getProducts = await ProductService.getAllProducts();
        const responseObj = new getAlldataS(getProducts);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
}

const insertMultipleProductsController = async (req, res, next) => {
    try {
        let products = JSON.parse(req.body.products);
        const files = req.files;

        if (products.length !== files.length) {
            throw new ValidationError("Products and images count mismatch");
        }

        for (let i = 0; i < products.length; i++) {
            let p = products[i];

            p.sale_price =
                p.sale_price === undefined || p.sale_price === ""
                    ? null
                    : Number(p.sale_price);

            p.is_sale_available =
                p.is_sale_available === undefined
                    ? false
                    : Boolean(p.is_sale_available);

            p.price = Number(p.price);
            p.stock = Number(p.stock);

            const imagePath = await UploadImageService.uploadImage(files[i]);
            p.image = imagePath;
        }


        const insertProducts = await ProductService.insertMutipleProducts(products);
        const responseObj = new addUser(insertProducts);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
}

export {  getAllProductsController, insertMultipleProductsController };