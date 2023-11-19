import { Client, Databases, ID } from "appwrite";
import { collectionId, databaseId, projectId, projectUrl } from "../config/config";

export class DbService{
    client = new Client();
    databases;

    constructor(){
        this.client.setEndpoint(projectUrl).setProject(projectId)
        this.databases = new Databases(this.client)
    }

    async createBlog({title,content,featuredImage,status="active",userId}){
        try {
            return await this.databases.createDocument(databaseId,collectionId,ID.unique(), {title,content,featuredImage, status,userId})
        } catch (error) {
            console.log(error)
        }
    }

    async updateBlog(){
        try {
            return await this.databases.updateDocument(databaseId,collectionId,)            
        } catch (error) {
            console.log(error)
        }
    }

    async getDocument(blogId){
        try {
            return await this.databases.getDocument(databaseId,collectionId,blogId)
        } catch (error) {
            console.log(error)
        }
    }

    async getDocuments(){
        try {
            return await this.databases.listDocuments(databaseId,collectionId)
        } catch (error) {
            throw error
        }
    }
}

const dbService = new DbService();
export default dbService