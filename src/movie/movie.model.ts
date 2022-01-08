import { Column, Table, DataType, Model } from 'sequelize-typescript';

interface MovieCreationAttrs {
    movieName: string,
    year: number,
    format: string,
    actors: Array<string>
} 

@Table({ tableName: 'movies' })  
export class Movie extends Model<MovieCreationAttrs> {
  @Column({
    type:DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number; 
      
  @Column({
    type:DataType.STRING,
    unique: true,
  })
  movieName: string;
      
  @Column({
    type:DataType.NUMBER,
  })
  year: number; 

  @Column({
    type:DataType.STRING,
    validate: {
      equals: 'DVD' || 'VHS',
    }
  })
  format: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  actors: Array<string>;
}