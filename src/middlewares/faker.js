const faker = require("faker");

const CantidadUsuarios = 5

function randomData() {
	const fakerData = [];
	for (let i = 0; i < CantidadUsuarios; i++) {
		const fakerItem = {
			name: faker.name.firstName(),
			price: faker.commerce.price(0, 500, 0, '$'),
			img: faker.image.abstract()
		}
		fakerData.push(fakerItem);
	}
	return fakerData;
}


module.exports = randomData;