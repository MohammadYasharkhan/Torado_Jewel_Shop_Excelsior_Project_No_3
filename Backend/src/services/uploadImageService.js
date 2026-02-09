import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class UploadImageService
{
    static async uploadImage(fileObject)
    {
        if(fileObject)
            {
                const uploadsDir = path.join(__dirname, '..', 'uploads');
                if (!fs.existsSync(uploadsDir)) {
                    fs.mkdirSync(uploadsDir, { recursive: true });
                }
                
                const uniqueName = Date.now() + '-' + fileObject.originalname;
                const filepath=path.join(uploadsDir,uniqueName);
                
                console.log(uniqueName);
                fs.writeFileSync(filepath,fileObject.buffer);
                
                return  `/uploads/${uniqueName}`;
            }
        }
}

export {UploadImageService};