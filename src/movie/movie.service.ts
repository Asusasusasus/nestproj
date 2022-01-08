import { Controller, Post } from '@nestjs/common';
import { Movie } from './movie.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMovieDto, DeleteMovieDto, ShowMovieInfoDto, ActorNameDto, SortMoviesByValue } from './movie.dto';
import { Op } from 'sequelize';

@Controller('movie')
export class MovieService {
  constructor (@InjectModel (Movie) private movieRepository: typeof Movie) {}
    
  async createMovie (dto: CreateMovieDto) {
    const newMovie = await this.movieRepository.create(dto);
    return newMovie; //+
  }

  async deleteMovie (dto: DeleteMovieDto) {
    const {movieName} = dto;  // now nest style but...
    const deletedMovie = await this.movieRepository.destroy({ where: { movieName } });
    //console.log('destroyed')
    return deletedMovie; // ok
  }

  async showMovieInfo (dto: ShowMovieInfoDto) { 
    const {movieName} = dto;   
    const selectedMovieInfo = await this.movieRepository.findAll({ where: { movieName } });
   // selectedMovieInfo.shift(); //!!!!!!!!!!!!!!!!!!!!!!
    return selectedMovieInfo; // almost OK
  }

  async sortMoviesByValue (dto: SortMoviesByValue) {
    const column =  dto.sortColumn ||'id';
    const sortOrder = dto.sortOrder || 'ASC'; // ref
    const sortedMovies = await this.movieRepository.findAll({ 
        order: [[`${column}`, `${sortOrder}`]]
      });
    return sortedMovies; //+
  }

   async showFilmsWhereActorsPresents (dto: ActorNameDto) {
    const { actorName } = dto // for 1 later will change to many ?
    const newMovie = await this.movieRepository.findAll({ where: {
        actors: {
          [Op.contains]: [actorName],
        } 
      }
    }); 
    return newMovie
 } 
}
