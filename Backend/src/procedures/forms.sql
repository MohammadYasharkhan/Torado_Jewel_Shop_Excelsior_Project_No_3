CREATE TABLE IF NOT EXISTS contactus(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    subject VARCHAR(50) NOT NULL,
    message VARCHAR(300) NOT NULL
);


DROP PROCEDURE IF EXISTS contactus_create;

CREATE PROCEDURE contactus_create(
    IN p_name VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_phone VARCHAR(15),
    IN p_subject VARCHAR(50),
    In p_message VARCHAR(300)
)
BEGIN 
    INSERT INTO contactus(name,email,phone,subject,message) VALUES(p_name,p_email,p_phone,p_subject,p_message);
    SELECT * from contactus WHERE id=LAST_INSERT_ID();
END;


CREATE TABLE IF NOT EXISTS comments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    website VARCHAR(50),
    email VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL
);


DROP PROCEDURE IF EXISTS comments_create;

CREATE PROCEDURE comments_create(
    IN p_name VARCHAR(255),
    IN p_phone VARCHAR(15),
    IN p_website VARCHAR(50),
    IN p_email VARCHAR(255),
    IN p_comment TEXT
)
BEGIN 
    INSERT INTO comments(name,phone,website,email,comment) VALUES(p_name,p_phone,p_website,p_email,p_comment);
    SELECT * FROM comments WHERE id=LAST_INSERT_ID();
END;


CREATE TABLE IF NOT EXISTS askquestion(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    message TEXT NOT NULL
);

DROP PROCEDURE IF EXISTS askquestion_create;

CREATE PROCEDURE askquestion_create(
    p_name VARCHAR(255),
    p_email VARCHAR(255),
    p_phone VARCHAR(15),
    p_message TEXT
)
BEGIN   
    INSERT INTO askquestion(name,email,phone,message) VALUES(p_name,p_email,p_phone,p_message);
    SELECT * FROM askquestion WHERE id=LAST_INSERT_ID();
END;