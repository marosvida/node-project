INSERT INTO public."LearningPackages"(
	title, description, category, "targetAudience", "difficultyLevel", "createdAt", "updatedAt")
	VALUES 
	('Food', 'Package containing food words', 'Home', 'Beginner', 1, NOW(), NOW()),
	('Colors', 'Package containing color words', 'General', 'Beginner', 1, NOW(), NOW()),
	('Animals', 'Package containing animal words', 'General', 'Beginner', 1, NOW(), NOW()),
	('Verbs', 'Package containing basic verbs', 'General', 'Beginner', 1, NOW(), NOW());

INSERT INTO public."LearningFacts"(
	"wordFrench", "wordEnglish", "learningPackageId", disabled, "createdAt", "updatedAt")
	VALUES 
	('Pain', 'Bread', 1, false, NOW(), NOW()),
	('Lait', 'Milk', 1, false, NOW(), NOW()),
	('Croissant', 'Croissant', 1, false, NOW(), NOW()),
	('Rogue', 'Red', 2, false, NOW(), NOW()),
	('Bleue', 'Blue', 2, false, NOW(), NOW()),
	('Verte', 'Green', 2, false, NOW(), NOW()),
	('Jaune', 'Yellow', 2, false, NOW(), NOW()),
	('Noire', 'Black', 2, false, NOW(), NOW()),
	('Blanche', 'White', 2, false, NOW(), NOW()),
	('Chienne', 'Dog', 3, false, NOW(), NOW()),
	('Chatte', 'Cat', 3, false, NOW(), NOW()),
	('Tigre', 'Tiger', 3, false, NOW(), NOW()),
	('être', ' to be', 4, false, NOW(), NOW()),
	('avoir', 'to have', 4, false, NOW(), NOW()),
	('parler', 'to speak', 3, false, NOW(), NOW());