import { Injectable } from "@angular/core";

export class Card {
    title: string;
    constructor(title: string) {
        this.title = title
    }
}

export class Board {
    title: string;
    cards: Card[];
    constructor(title: string, cards: Card[]) {
        this.title = title;
        this.cards = cards
    }
}

@Injectable({
    providedIn: 'root'
})
export class TaskboardService {
    boardData: Board[] = [
        new Board(
            "board 1",
            [
            new Card("Define project requirements"),
            new Card("Setup development environment"),
            new Card("Initialize repository")
        ]),
        new Board(
            "board 2",
            [
            new Card("Draft initial architecture"),
            new Card("Select technology stack"),
            new Card("Perform security audit")
        ]),
        new Board(
            "board 3",
            [
            new Card("Implement authentication flow"),
            new Card("Create user dashboard"),
            new Card("Refactor legacy components")
        ])
    ];

    getBoards(): Board[] { 
        return this.boardData 
    };
}
