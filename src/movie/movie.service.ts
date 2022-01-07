import { Controller, Post } from '@nestjs/common';
import { Movie } from './movie.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMovieDto, DeleteMovieDto, ShowMovieInfoDto } from './movie.dto';

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
    return selectedMovieInfo;
  }

  async sortMoviesByAlphabet () {
    const sortedMovies = await this.movieRepository.findAll({ 
        order: ['movieName']
    });
    return sortedMovies; //+
  }

   async findMovieByTitle (movieName: string) {
    const newMovie = await this.movieRepository.findAll({ where: { movieName } });
    return newMovie[1];
  }

  /* async showFilmsList (actorName: string) {
    const newMovie = await this.movieRepository.findAll({ where: {
        actors: {
          [Op.contains]: [actorName],
        } 
      }
    }); */
    //return newMovie
  //} 
}

