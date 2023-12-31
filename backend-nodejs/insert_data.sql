INSERT INTO public."LearningPackages"(
	title, description, category, "targetAudience", "difficultyLevel", "createdAt", "updatedAt")
	VALUES 
	('Food', 'Package containing food words', 'Home', 'Beginner', 1, NOW(), NOW()),
	('Colors', 'Package containing color words', 'General', 'Beginner', 1, NOW(), NOW()),
	('Animals', 'Package containing animal words', 'General', 'Beginner', 1, NOW(), NOW()),
	('Verbs', 'Package containing basic verbs', 'General', 'Beginner', 1, NOW(), NOW());

INSERT INTO public."LearningFacts"(
	"wordFrench", "wordEnglish", "learningPackageId", "imageUrl", disabled, "createdAt", "updatedAt")
	VALUES 
	('Pain', 'Bread', 1, 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg', false, NOW(), NOW()),
	('Lait', 'Milk', 1, 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D', false, NOW(), NOW()),
	('Croissant', 'Croissant', 1, 'https://www.shutterstock.com/image-photo/one-croissant-closeup-isolated-on-600nw-2316898155.jpg', false, NOW(), NOW()),
	('Rogue', 'Red', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbQen5Rbaay33iLF1gOepa2XBx33qgHTMiKFVp5v0eQ&s', false, NOW(), NOW()),
	('Bleue', 'Blue', 2, 'https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGNvbG9yfGVufDB8fDB8fHww', false, NOW(), NOW()),
	('Verte', 'Green', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynudYC4v4RfK9EAgp-cHRzh3kVigCyJPbkWRtuocXQQ&s', false, NOW(), NOW()),
	('Jaune', 'Yellow', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJn7-3T--wC5aGSYbIMIZjt6MhgkvncKrhJ8aZE7AWAg&s', false, NOW(), NOW()),
	('Noire', 'Black', 2, 'https://img.freepik.com/free-photo/beautiful-young-slim-woman-doing-stretching-exercises-gym-against-white_155003-17254.jpg', false, NOW(), NOW()),
	('Blanche', 'White', 2, 'https://htmlcolorcodes.com/assets/images/colors/white-color-solid-background-1920x1080.png', false, NOW(), NOW()),
	('Chienne', 'Dog', 3, 'https://momlovesbest.com/wp-content/uploads/2023/05/dog-coloring-pages-2.webp', false, NOW(), NOW()),
	('Chatte', 'Cat', 3, 'https://i.pinimg.com/736x/19/c1/8e/19c18e4a217f4db1d318ecffa544d2e9.jpg', false, NOW(), NOW()),
	('Tigre', 'Tiger', 3, 'https://www.firstpalette.com/images/printable-mainpic/tiger.png', false, NOW(), NOW()),
	('être', ' to be', 4, 'https://cdn.pixabay.com/photo/2014/08/22/02/10/be-423796_1280.png', false, NOW(), NOW()),
	('avoir', 'to have', 4, 'https://media.pronunciationstudio.com/2013/08/Blog-have.png', false, NOW(), NOW()),
	('parler', 'to speak', 3, 'https://t3.ftcdn.net/jpg/02/95/54/38/360_F_295543870_X37PZjTJbzHCR5g45yFpbwzl7l2dqpUD.jpg', false, NOW(), NOW());