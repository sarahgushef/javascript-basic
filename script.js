// how to access object and array

let myProfile = {
    name: 'sarah',
    age: 24,
    hobbies: ['mancing', 'berkebun', 'memasak', { type: ['hello'] }],
    socialMedia: {
        twitter: 'https://www.twitter.com',
        youtube: 'https://www.youtube.com',
    },
};

console.log(myProfile.socialMedia.twitter);
console.log(myProfile.name);

console.log(myProfile.hobbies[3].type[0]);

let fruits = ['mangga', 'jambu', 'rambutan'];

console.log(fruits[2]);
