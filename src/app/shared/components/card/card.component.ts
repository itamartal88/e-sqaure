import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookData } from '../../models/DTOs/Books.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() book: BookData;
  @Output() onClick: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public click(): void {
    this.onClick.emit();
  }
}
