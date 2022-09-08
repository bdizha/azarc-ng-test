import {faker} from '@faker-js/faker';
import fs from 'fs'

const database = {staff: [], offices: []};

const offices = [
  'Los Angeles',
  'Cape Town',
  'London',
]

offices.forEach((location, index) => {
  database.offices.push({
    id: index + 1,
    name: location
  });
})

for (let i = 1; i <= 25; i++) {
  database.staff.push({
    id: i,
    name: faker.name.fullName(),
    picture: faker.image.avatar(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    building: faker.address.buildingNumber(),
    streetAddress: faker.address.streetAddress(),
    postcode: faker.address.zipCode(),
    city: faker.address.city(),
    country: faker.address.country(),
    jobTitle: faker.name.jobTitle(),
    gender: faker.name.sex(),
    officeId: 1,
  });
}

const json = JSON.stringify(database);
fs.writeFile('api/database.json', json, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("database.json created");
});
