import { faker } from '@faker-js/faker'


export let items: Item[] = []
for (let i = 0; i < 10; i++) {
    items.push({
        id: i + 1,
        name: faker.person.firstName(),
        popularity: faker.number.int(),
        photoUrl: faker.image.url()
    })

}
// export const items: Item[] = [
//     {
//         id: 1,
//         name: faker.person.firstName(),
//         popularity: faker.number.int(),
//         photoUrl: faker.image.url()
//     },
//     {
//         id: 2,
//         name: faker.person.firstName(),
//         popularity: faker.number.int(),
//         photoUrl: faker.image.url()
//     },
//     {
//         id: 3,
//         name: faker.person.firstName(),
//         popularity: faker.number.int(),
//         photoUrl: faker.image.url()
//     },
//     {
//         id: 4,
//         name: faker.person.firstName(),
//         popularity: faker.number.int(),
//         photoUrl: faker.image.url()
//     },
//     {
//         id: 5,
//         name: faker.person.firstName(),
//         popularity: faker.number.int(),
//         photoUrl: faker.image.url()
//     },
//     {
//         id: 6,
//         name: faker.person.firstName(),
//         popularity: faker.number.int(),
//         photoUrl: faker.image.url()
//     },
// ]