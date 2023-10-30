use EXPRESSdb;
CREATE TABLE UserTable(
    userid INT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50)
);
INSERT INTO UserTable (userid, firstName, lastName)
VALUES (100, 'Jaganath', 'Reddy');
INSERT INTO UserTable (userid, firstName, lastName)
VALUES (101, 'Hitesh', 'M');
INSERT INTO UserTable (userid, firstName, lastName)
VALUES (102, 'Sathwik', 'Kumar');

select * from UserTable;