import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { PostsService } from "../posts.service";
import { ToastrService } from 'ngx-toastr';

import { Post } from "../post.model";

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(public postsService: PostsService,
    private tostr: ToastrService,private router:Router ) { }

  ngOnInit() {
  }

  onEdit(post: Post) {
    this.postsService.setValue(post) 
    this.router.navigate(['/edit',post.$key]) 
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.postsService.deletePost(key);
      this.tostr.warning("Deleted Successfully", "Post Deleted");
    }
    this.router.navigate(['/'])
  }

}
