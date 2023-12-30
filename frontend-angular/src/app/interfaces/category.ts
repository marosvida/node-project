import { Word } from "./words";

export interface Category {
    id: number;
    title: string;
    description: string;
    category: string;
    targetAudience: string;
    difficultyLevel: number | string;
    words?: Word[];
}