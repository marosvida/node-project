export interface LearningFact {
    id: number;
    learningPackageId: number; // Foreign key to LearningPackage
    wordFrench: string;
    wordEnglish: string;
    imageUrl?: string;
    disabled: boolean;
}

export interface LearningPackage {
    id: number;
    title: string;
    description: string;
    category: string;
    targetAudience: string;
    difficultyLevel: number;
    learningFacts: LearningFact[];
}

export interface UserPackageLearning {
    id: number;
    user: User; // Foreign key to User
    startDate: Date;
    expectedEndDate: Date;
    minutesPerDayObjective: number;
    learningPackage: LearningPackage; // Foreign key to LearningPackage
}

export interface UserLearningFact {
    id: number;
    user: User; // Foreign key to User
    timesReviewed: number;
    confidenceLevel: number;
    lastReviewedDate: Date;
    learningFact: LearningFact; // Foreign key to LearningFact
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    userPackageLearnings: UserPackageLearning[];
    userLearningFacts: UserLearningFact[];
}