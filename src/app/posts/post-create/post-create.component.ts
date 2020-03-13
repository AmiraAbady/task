import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms"; 
import { Router } from '@angular/router'; 
import { PostsService } from "../posts.service";
import { ToastrService } from 'ngx-toastr';

import { Post } from "../post.model";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
   
  constructor(
    public postsService: PostsService,
    private tostr: ToastrService ,
    private router:Router
  ) {}

  ngOnInit() {   
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    } 
     
    if (form.value.$key == null)
    this.postsService.addPost(form.value);
     
  else
    this.postsService.updatePost(form.value);
    this.resetForm(form); 
    this.tostr.success('Submitted Succcessfully', 'Post Created');
    this.router.navigate(['/'])
   
  }

  resetForm(form?: NgForm) {
    if (form != null)
    form.reset();
    this.postsService.selectedPost = {
      $key: null,
      title: '',
      content: ''  
    }
  }
}
