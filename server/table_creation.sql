CREATE TABLE jokes(
    id SERIAL primary key not null,
    content varchar not null
);

-- Adding some sample data to table
INSERT INTO jokes(content) VALUES('What did one toilet say to the other toilet? You look flushed!');
INSERT INTO jokes(content) VALUES('Why is there a gate around cemeteries? Because people are dying to get in!');
INSERT INTO jokes(content) VALUES('Why wouldnt the shrimp share his treasure? Because he was a little shellfish');
INSERT INTO jokes(content) VALUES('Whats the difference between a guitar and a fish? You cant tuna fish.');
INSERT INTO jokes(content) VALUES('What did the digital clock say to the grandfather clock? Look grandpa, no hands');
-- jokes courtesy of https://buzzkenya.com/best-funny-corny-jokes/