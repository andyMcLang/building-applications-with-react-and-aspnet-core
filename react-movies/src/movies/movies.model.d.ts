export interface movieDTO {
    id: number;
    title: string;
    poster: string;
}

export interface landingPageDTO {
    ohjelmistossaNyt?: movieDTO[];
    tulossaLeffat?: movieDTO[];
}