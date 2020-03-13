import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router'; 
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  
  posts: Post[];
   
   

  constructor(public postsService: PostsService,private router:Router,
    private tostr: ToastrService ) {}

  ngOnInit() {
    var x = this.postsService.getPosts();
    x.snapshotChanges().subscribe(item => {
      this.posts = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.posts.push(y as Post);
      });
    });
  }

  // onEdit(post: Post) {
  //   this.postsService.setValue(post) 
  //   this.router.navigate(['/edit',post.$key]) 
  // }

  // onDelete(key: string) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     this.postsService.deletePost(key);
  //     this.tostr.warning("Deleted Successfully", "Post Deleted");
  //   }
  // }

  singlePost(post: Post){ 
    this.postsService.fetchValue(post) 
    this.router.navigate(['/show',post.$key]) 
 

  }
   
}
