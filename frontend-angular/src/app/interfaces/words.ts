export interface Word {
    id: number,
    wordFrench: string,
    wordEnglish: string,
    learningPackageId: number,
    disabled: boolean,
    imageUrl?: string,
    createdAt: Date | string,
    updatedAt: Date | string,
}