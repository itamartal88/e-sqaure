

export interface BooksResponseDTO {
    kind: string;
    totalItems: number;
    items: BookData[];
}

export interface BookData {
    id: string;
    volumeInfo: {
        title: string;
        subtitle: string;
        imageLinks: {
            smallThumbnail: string; 
            thumbnail: string;
        },
        authors: string[];
        categories: string[];
    }
}