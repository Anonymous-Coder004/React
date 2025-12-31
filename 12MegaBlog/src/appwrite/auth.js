import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;
    constructor(){ //now these clients are set up by default instead it will be set up after obj is created ..using constructer 
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
            const userAccount = await account.create({
                userId: ID.unique(), 
                email: email, 
                password: password,
                name
            });
            if(userAccount){ //means when account is created then make the user logged in by calling login fn
                //call login fn
                return this.login({email,password})
            }
            else return userAccount
        }
        catch(error){
            throw error
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession({
                email:email,
                password:password
            })
        } catch (error) {
            throw error
        }
    }
    async getCurrrentUser(){ //checks if user is logged in or not
        try {
            return await this.account.get()
        } catch (error) {
            console.log("get current user error",error)
        }
        return null;
    }
    async logout(){ //fn for loging out the current user
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService=new AuthService();
export default authService