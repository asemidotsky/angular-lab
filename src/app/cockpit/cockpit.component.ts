import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: string) {

    this.serverCreated.emit({
      serverName: serverName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverName: string) {
    this.blueprintCreated.emit({
      serverName: serverName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
