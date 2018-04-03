import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterContentInit,
  SimpleChanges,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };

  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngInit called!');
    console.log('Text Content of paragraph: ' + this.contentParagraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges called!`);
    console.log(changes);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.contentParagraph.nativeElement.textContent);
  }
}
