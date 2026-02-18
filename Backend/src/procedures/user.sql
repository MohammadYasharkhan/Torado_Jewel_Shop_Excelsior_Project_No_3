CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                ON UPDATE CURRENT_TIMESTAMP
);

DROP PROCEDURE IF EXISTS user_create;

CREATE PROCEDURE user_create(
    IN p_name VARCHAR(100),
    IN p_email VARCHAR(255),
    IN p_password VARCHAR(255)
)
BEGIN 
    INSERT INTO users(name,email,password) VALUES (p_name,p_email,p_password);
    SELECT * FROM users WHERE id = LAST_INSERT_ID();
END;


DROP PROCEDURE IF EXISTS user_find_by_email;

CREATE PROCEDURE user_find_by_email(
    IN p_email VARCHAR(255)
)
BEGIN 
    SELECT * FROM users WHERE email=p_email;
END;


DROP PROCEDURE IF EXISTS user_find_by_id;

CREATE PROCEDURE user_find_by_id(
    IN p_id INT
)
BEGIN 
    SELECT * FROM users WHERE id=p_id;
END;



DROP PROCEDURE IF EXISTS update_password_by_id;

CREATE PROCEDURE update_password_by_id(
    IN p_id INT,
    IN p_password VARCHAR(255)
)
BEGIN 
    IF EXISTS (SELECT 1 FROM users WHERE id = p_id) THEN
        UPDATE users 
        SET password = p_password 
        WHERE id = p_id;

        SELECT TRUE AS is_updated;
    ELSE
        SELECT FALSE AS is_updated;
    END IF;
END;