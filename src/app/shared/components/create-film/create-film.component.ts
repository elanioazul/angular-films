import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.scss']
})
export class CreateFilmComponent implements OnInit {

  film: any;

  constructor(
    private filmService: FilmService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.film = this.filmService.getFilm(params['id']);
      }
    });

  }

  onSave(film) {
    if (film) {
      if (film.id) {
        this.filmService.updateFilm(film);
      } else {
        this.filmService.addFilm(film);
      }
    }
    this.router.navigate(['/film']);
  }

}
