import { Byte } from '@angular/compiler/src/util';
import { fileservice } from './../services/file.service';
import { StarsService } from './../services/stars.service.star';
import { stars } from './../modele/stars.modele';
import { ProfilesService } from './../services/profiles.service';
import { Publication } from './../modele/publication.modele';
import { TokenStorageService } from './../services/TokenStorage.service';
import { Router } from '@angular/router';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import {  HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  currentUser ?: any ;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentprofile ?:any;
  
  motdepasse ?: any ;
  username ?: any;
  newPost = new Publication();
  Posts ?: Publication[];
  Stars ?:stars[];
  selectedFile  ?: any ;

  postid ?: any  ;

  constructor(private  router : Router ,private postService :PostService 
    ,private profileservice :  ProfilesService , private tokenStorageservice : TokenStorageService
    ,private starsService : StarsService , private fileservice : fileservice ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageservice.getToken();

    if (this.tokenStorageservice.getToken()) {
      this.isLoggedIn = true;
     //this.roles = this.tokenStorageservice.getUser().roles;
    }

  this.currentUser = this.tokenStorageservice.getUser();
  this.motdepasse=this.currentUser.password;
  this.username=this.currentUser.username;
  
  this.profileservice.getProfileByMail(this.username).subscribe(p => {
    this.currentprofile= p} );
  
  this.postService.getPosts().subscribe(ps => {
        this.Posts=ps;
        console.log("this posts "+this.currentprofile)
       }
       )
       
this.starsService.getAllStars().subscribe(s => {
  console.log("star id : "+ s  )
           this.Stars=s;
           console.log("star id : "+ s  )}

    // console.log("nom"+this.currentprofile.nom);
  )
}
public onFileChanged(event : any ) {
  this.selectedFile = event.target.files[0];
}


  addPost(){
     // console.log("new "+this.newPost.posts?.forEach(c => console.log(c)));
    console.log(this.currentprofile);
///    console.log(this.newPost.post.push(this.newpostlist));
  console.log("post added" + this.newPost.post);
    
    this.postService.createPost(this.newPost,this.username)
    .subscribe(
       (p) => { 
      
      this.postid = p.id
      const uploadImageData : FormData = new FormData();

      uploadImageData.append(this.selectedFile.name , this.selectedFile);
      //console.log("upload "+this.selectedFile.Byte)
      console.log("postid"+ this.postid);

      this.fileservice.createfile(uploadImageData ,this.postid).subscribe(()=>
        {console.log("file added ")}
      ); }
    );

    window.location.reload();  
    console.log("postid"+ this.postid);
   
      console.log(this.selectedFile);
      
    
  }
   
   

  getAllPost(){
          this.postService.getPosts().subscribe(
      
            ()=> {console.log("All posts ")}
          );
  }

  createStars ( id : Number){
    this.starsService.createStars(id).subscribe(
 
      ()=>{ console.log("star added"+id );}
      );

     window.location.reload();  
      
    }

    
      
   
  }
