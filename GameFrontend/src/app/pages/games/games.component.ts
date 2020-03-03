import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: any;
  @ViewChild('search',{static: true}) search: any;
  content = '';

  constructor(private gameService:GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(games => {
      this.games = games;
    });
  }
}

