import {Component, OnInit, ElementRef, OnDestroy, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy, OnChanges {

  @Output() closeModal = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }

  onCloseModal() {
    this.closeModal.emit();
  }

}
