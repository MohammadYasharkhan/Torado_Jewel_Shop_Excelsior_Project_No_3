CREATE TABLE IF NOT EXISTS newsletter_subscriptions
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    user_id INT NULL,
    is_registered BOOLEAN NOT NULL DEFAULT FALSE,
    is_verified BOOLEAN NOT NULL DEFAULT FALSE,
    subscribed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at TIMESTAMP NULL,
    CONSTRAINT uq_newsletter_email UNIQUE (email),
    CONSTRAINT fk_newsletter_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE SET NULL
);

DROP PROCEDURE IF EXISTS newsletter_subscriptions_create; 

CREATE PROCEDURE newsletter_subscriptions_create(
    IN p_email VARCHAR(255) 
) 
BEGIN 
    DECLARE v_user_id INT DEFAULT NULL; 
    SELECT id into v_user_id FROM users WHERE email=p_email LIMIT 1; 
    INSERT INTO newsletter_subscriptions(email,user_id,is_registered) VALUES(p_email,v_user_id,IF(v_user_id IS NOT NULL,TRUE,FALSE)); 
    SELECT id 
    FROM newsletter_subscriptions
    WHERE id = LAST_INSERT_ID();
END;


DROP PROCEDURE IF EXISTS newsletter_subscriptions_exists_by_email;

CREATE PROCEDURE newsletter_subscriptions_exists_by_email(
    IN p_email VARCHAR(255)
)
BEGIN
    SELECT EXISTS (
        SELECT 1
        FROM newsletter_subscriptions
        WHERE email = p_email
    ) AS is_subscribed;
END;


DROP PROCEDURE IF EXISTS newsletter_subscriptions_exists_by_id;

CREATE PROCEDURE newsletter_subscriptions_exists_by_id(
    IN p_id INT
)
BEGIN
    SELECT 
        EXISTS (
            SELECT 1 
            FROM newsletter_subscriptions 
            WHERE id = p_id
        ) AS is_exists;
END;

DROP PROCEDURE IF EXISTS newsletter_subscriptions_verify;

CREATE PROCEDURE newsletter_subscriptions_verify(
    IN p_id INT
)
BEGIN
    UPDATE newsletter_subscriptions SET is_verified=TRUE WHERE id=p_id AND is_verified=FALSE;
    SELECT ROW_COUNT() AS affected_rows;
END;


DROP PROCEDURE IF EXISTS newsletter_subscriptions_verify_check;

CREATE PROCEDURE newsletter_subscriptions_verify_check(
    IN p_id INT 
)
BEGIN 
    SELECT is_verified from newsletter_subscriptions WHERE id=p_id;
END;