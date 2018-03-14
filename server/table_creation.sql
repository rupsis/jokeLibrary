CREATE TABLE jokes(
    id SERIAL primary key not null,
    content varchar not null
);

-- Adding some sample data to table
INSERT INTO jokes VALUES(1, 'What did one toilet say to the other toilet? You look flushed!');
INSERT INTO jokes VALUES(2, 'Why is there a gate around cemeteries? Because people are dying to get in!');
INSERT INTO jokes VALUES(3, 'Why wouldn’t the shrimp share his treasure? Because he was a little shellfish');
INSERT INTO jokes VALUES(4, 'What’s the difference between a guitar and a fish? You can’t tuna fish.');
INSERT INTO jokes VALUES(5, 'What did the digital clock say to the grandfather clock? Look grandpa, no hands');
-- jokes courtesy of https://buzzkenya.com/best-funny-corny-jokes/