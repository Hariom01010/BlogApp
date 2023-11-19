import { Client, Storage, ID } from "appwrite";
import { bucketId, projectId, projectUrl } from "../config/config";

export class StorageService{
    client = new Client()
    storage;

    constructor(){
        this.client.setEndpoint(projectUrl).setProject(projectId)
        this.storage = new Storage(this.client)
    }

    async fileUpload(file){
        try {
            return await this.storage.createFile(bucketId, ID.unique(),file)
        } catch (error) {
            console.log(error)
        }
    }

   getFilePreview(id){
        try {
            return this.storage.getFilePreview(bucketId, id,500, 250); 
        } catch (error) {
            console.log(error)
        }
    }
   async getFile(id){
        try {
            return this.storage.getFile(bucketId, id); 
        } catch (error) {
            console.log(error)
        }
    }


}

const storageService = new StorageService()
export default storageService