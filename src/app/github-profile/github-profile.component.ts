import { Router,ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router:Router,private route : ActivatedRoute ) { }
   proId;
   proName;
  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    })
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      let id=+params.get('id');
      let name=params.get('username');
this.proId=id;
this.proName=name;
      console.log(id);
    })
  }


  // let proId=this.id;
}
