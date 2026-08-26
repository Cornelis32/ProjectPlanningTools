import { Component, inject, input, InputSignal } from '@angular/core';
import {
    CdkDrag,
    CdkDragDrop,
    CdkDropList,
    CdkDropListGroup,
    moveItemInArray,
    transferArrayItem
} from '@angular/cdk/drag-drop';

import { TaskboardService, Board, Card } from './taskboard.service';

@Component({
    selector: 'tasklist',
    template: `
        <div class="example-container">
            <h2>{{ title() }}</h2>
            <div
                cdkDropList
                [cdkDropListData]=cards()
                class="task-list"
                (cdkDropListDropped)="drop($event)"
            >
                @for (card of cards(); track card) {
                    <div class="card-item" cdkDrag>
                        {{card.title}}
                    </div>
                }
            </div>
        </div>
    `,
    styleUrl: "./taskboard.css",
    imports: [CdkDropList, CdkDrag]
})
export class TaskListComponent {
    title: InputSignal<string | undefined> = input<string>();
    cards: InputSignal<Card[]> = input<Card[]>([]);
    drop(event: CdkDragDrop<Card[]>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
          );
        }
      }
}

@Component({
  selector: 'taskboard',
  template: `
    <div cdkDropListGroup class="board-container">
    @for (board of boards; track board) {
        <tasklist [title]=board.title [cards]=board.cards></tasklist>
    }
    </div>
  `,
  styles: `
    .board-container {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        align-items: flex-start;
        padding: 16px;
        gap: 16px;
    }
  `,
  imports: [TaskListComponent, CdkDropListGroup],
})
export class TaskboardComponent {
    service: TaskboardService = inject(TaskboardService);
    boards: Board[] = this.service.getBoards();
}
