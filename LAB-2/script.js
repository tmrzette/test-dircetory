let name = "tyler marzette";
let names = name.toUpperCase();

console.log('Name: '+ name.toUpperCase());

let career = "Full Stack Engineer";

console.log('Career: '+ career);

let description = "Innovative Leader";

console.log('Description: '+ description);

console.log('My Interests:');
console.log('* Cavaliers Basketball');
console.log('* Pokemon Go');
console.log('* Goku (Our Savior)');
console.log('* Hate for Donald J. Trump');

console.log('My Previous Experience: ');
let displayPosition = function(title,location, description){
    console.log(`* ${title} at ${location}`)
    console.log("-"+ description)
}

displayPosition("Football Player", "University of Memphis Memphis, TN", "Right Offensive Tackle");
displayPosition("Security Guard", "McDowell Security of Birmingham, AL", "Bouncer, Overseer, Large Crowd Manganment");
displayPosition("Intern Broadcaster", "Birmingham City Schools NBC in Birmingham, AL", "Broadcaster and Camera Man");

console.log('My Skills: ');
let displaySkill = function(skill, iscool) {
    if (iscool === true){
        console.log("* Check It:", skill)
    } else {
        console.log("*", skill)
    }
}

displaySkill("Outdoorsman/Hiker", true);
displaySkill("Novice Typist");
displaySkill("Certified Lifeguard", true);
displaySkill("Traveler");
displaySkill("Novice Coder");
displaySkill("Armed Guard License");
displaySkill("Blogger", true);