console.log('javascrip is running');

//defining an object literal
const game = {
    title: 'Guess the number!',
    biggestNum: 100,

}

//get values
game.title //This would get the value "Guess the number"
//if we want to log to the console
console.log(game.title)
console.log(game['title'])

//set values
//set existing keys on the object to new values
game.biggestNum = 50;

//add keys to the objects
game.lowestNum = 10;
game['guessedNumber'] = 6;

console.log(game)

const jobPosting = {
    job: 'MicroBioligist - Night Shift (Crown Point, In)',
    compensation: 'DOE',
    employmentType: 'full-time',
    jobBlurb: 'text describing the job'
}

//Model an instagram post as an object!
// const instagram = {
//     name: 'Bob',
//     age: 25,
//     city: 'San Jose',
//     pictures:  { 'pict1', 'pict2', 'pict3'},
//     comments: ['comment1', 'comment2', 'comment3']
// }

const instaPost = {
    userName: 'alexhonnold',
    isVerified: true,
    pictures: ['pic 1', 'pic 2', 'pic 3'],
    likeCount: 41621,
    caption: '@james_lucas took some pictures of a typical sport climbing day from this month ',
    comments: [{ userName: 'pipenhon', comment: 'why you use a rope' },
               { userName: 'the northFaceClimb', comment: '13 a warm up' },
               { userName: 'collingill17', comment: 'Alex delete last pic' },
    ]
}
console.log(instaPost.pictures[2]);
instaPost.caption = 'Set a new caption value';
console.log(instaPost.comments[1].comment);
instaPost.isVerified = !instaPost.isVerified;
console.log()
instaPost.comments.forEach(function(comment){
    console.log(comment.userName)
})

