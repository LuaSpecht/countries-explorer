export interface Country {
    name: {
        commom:string;
        official: string;
    };
    population: number;
    region: string;
    capital?: string[];
    flags: {
        svg: string;
        alt?: string;
    };
    borders?: string[]; 
}
