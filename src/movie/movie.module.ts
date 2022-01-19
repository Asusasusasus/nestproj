import { Module, MiddlewareConsumer } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MovieMiddleware } from './movie.middleware';

@Module({
  providers: [MovieService],
  imports: [SequelizeModule.forFeature([Movie])],
  controllers: [MovieController]
})
export class MovieModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MovieMiddleware)
      .forRoutes(MovieController);
  }
}
