import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  providers: [MovieService],
  imports: [SequelizeModule.forFeature([Movie])],
  controllers: [MovieController]
})
export class MovieModule {}
