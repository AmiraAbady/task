import { Injectable } from "@angular/core"; 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

  

import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
 

  postList: AngularFireList<any>;
  selectedPost: Post = new Post();
  fetchedPost: Post = new Post();



  constructor(private firebase :AngularFireDatabase ) {}

  getPosts(){ 
    this.postList = this.firebase.list('posts'); 
    return this.postList;
  }

  addPost(post : Post)
  {
    this.postList = this.firebase.list('posts');
    this.postList.push({
      title: post.title,
      content: post.content  
    });
  }


  updatePost(post : Post){
    this.postList.update(post.$key,
      {
        title: post.title,
        content: post.content
      });
  }


  deletePost($key : string){
    this.postList.remove($key);
  }

  setValue(value:Post){ 
    this.selectedPost=value;
  }

  fetchValue(value:Post){ 
    this.fetchedPost=value;
  }
   
}
