import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() postDate: Date;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.loveIts ++;
  }

  onDontLoveIt() {
    this.loveIts --;
  }
}
