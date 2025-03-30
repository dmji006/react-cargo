-- Create the database
CREATE DATABASE IF NOT EXISTS react_cargo_db;
USE react_cargo_db;

-- Users table
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    mobile_number VARCHAR(15) UNIQUE NOT NULL,
    drivers_license_number VARCHAR(20) UNIQUE NOT NULL,
    address TEXT NOT NULL,
    password VARCHAR(255) NOT NULL,
    drivers_license_front_image VARCHAR(255) NOT NULL,
    drivers_license_back_image VARCHAR(255) NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Create indexes for better performance
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_user_mobile ON users(mobile_number);
