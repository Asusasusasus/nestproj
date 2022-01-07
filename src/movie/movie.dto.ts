export class CreateMovieDto {
    readonly movieName: string;
    readonly year: number;
    readonly format: string;
    readonly actors: Array<string>
};

export class DeleteMovieDto {
    readonly movieName: string;
    readonly year?: number;
    readonly format?: string;
    readonly actors?: Array<string>
}

export class ShowMovieInfoDto {
    readonly movieName: string;
}

export class ActorNameDto {
    readonly actorName: string;
}


