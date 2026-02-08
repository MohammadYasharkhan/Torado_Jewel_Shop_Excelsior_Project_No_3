
class UploadImageService
{
    static async  uploadImage(fileObject)
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