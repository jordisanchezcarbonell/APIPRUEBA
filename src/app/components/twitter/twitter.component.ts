import { Component, OnInit } from '@angular/core';
import { ApitwitterService}  from '../../service/apitwitter.service'
@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  constructor(private ApitwitterService:ApitwitterService) { }

  ngOnInit(): void {

    this.ApitwitterService.getPasajer().subscribe((data) => {
      console.log(data)
    })
  }

}
