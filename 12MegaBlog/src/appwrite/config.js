import conf from "../conf/conf";
import { Client, ID,Storage,Query, TablesDB,Permission,Role } from "appwrite";
export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases=new TablesDB(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: { title,
                    content,
                    featuredImage,
                    status,
                    userId
                 }
            })
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data:{
                    title,
                    content,
                    featuredImage,
                    status
                }

            })
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
            })
            return true;
        } catch (error) {
            console.log("Delete Post Error",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
            })
        } catch (error) {
            console.log("Get post error",error)
        }
    }

    async getPosts(queries=[Query.equal('status','true')]){
        try {
            return await this.databases.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries:queries
            })
        } catch (error) {
            console.log("List all posts error",error)
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                [Permission.read(Role.any())]
            );
            
        } catch (error) {
            console.log("Upload error",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId,
            })
            return true;
        } catch (error) {
            console.log("Delete error",error)
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFileView({
                bucketId: conf.appwriteBucketId,
                fileId: fileId,
        })
    }


}

const service=new Service()
export default service