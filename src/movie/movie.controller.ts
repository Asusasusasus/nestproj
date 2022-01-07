import { Controller, Post, Body, Delete, Get } from '@nestjs/common';
import { CreateMovieDto, DeleteMovieDto, ShowMovieInfoDto } from './movie.dto';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private usersService: MovieService) {}

  @Post()
  create(@Body() movieDto: CreateMovieDto) {
    return this.usersService.createMovie(movieDto);
  }
  //delete movie
  @Delete()
  remove(@Body() movieDto: DeleteMovieDto) {
    return this.usersService.deleteMovie(movieDto);
  }  
  // show info
  @Get('/showinfo')
  get(@Body() movieDto: ShowMovieInfoDto) {
    return this.usersService.showMovieInfo(movieDto);
  }  
  // show sorted list
  @Get('/showSorted')
  show() {
    return this.usersService.sortMoviesByAlphabet();
  }
  // find where name = body.name
   /* @Get()
  delete(@Body() ) {
    return this.usersService.ShowUsers();
  } */
  // find where actors[n] = req.body
  /* @Get('/filmsWhereActorExist')
  showFilmsList(@Body() ) {
    return this.usersService.showFilmsList();
  }   */
}

