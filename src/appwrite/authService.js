import { Account, Client, ID } from "appwrite";
import { projectId, projectUrl } from "../config/config";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client.setEndpoint(projectUrl).setProject(projectId)
        this.account = new Account(this.client)
    }

    async createUser({email,password,name}){
        try {
            return await this.account.create(ID.unique(),email,password,name)
        } catch (error) {
            console.log(error)
        }
    }

    async loginUser({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            console.log(error)
        }
    }

    getUser(){
        try {
            return this.account.getSession("current")
        } catch (error) {
            console.log(error)
        }
    }
    
    async getUserInfo(){
        try {
            return this.account.get()
        } catch (error) {
            console.log(error)
        }
    }
    
    async logoutUser(){
        try {
            return this.account.deleteSession("current").then(()=> console.log("Succesfully Logout"))
        } catch (error) {
            console.log(error)
        }
    }

    async verifyUser(){
        try {
            return this.account.createVerification("http://localhost:5173/verify-user")
        } catch (error) {
            console.log(error)
        }
    }

    async updateVerification(userid, secret){
        try {
            return this.account.updateVerification(userid, secret)
        } catch (error) {
            console.log(error)
        }
    }
    
    googleLogin(){
        try {
            return this.account.createOAuth2Session('google', 'http://localhost:5173', 'http://localhost:5173/login')
        } catch (error) {
            console.log(error)
        }
    }

    githubLogin(){
        try {
            return this.account.createOAuth2Session('github', 'http://localhost:5173', 'http://localhost:5173/login')
        } catch (error) {
            console.log(error)
        }
    }
}

const authService = new AuthService();

export default authService