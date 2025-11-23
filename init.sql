
CREATE TYPE room_status AS ENUM ('available', 'occupied', 'maintenance');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'failed');
CREATE TYPE payment_method AS ENUM ('cash', 'transfer', 'ewallet', 'qris');

CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,          
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password_hash TEXT NOT NULL,       
    role VARCHAR(20) NOT NULL DEFAULT 'user', 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE guest (
    guest_id VARCHAR(50) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20)
);

CREATE TABLE guest_house (
    guest_house_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    description TEXT,
    manager_id VARCHAR(50)
);

CREATE TABLE room_category (
    category_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE room (
    room_id VARCHAR(50) PRIMARY KEY,
    guest_house_id VARCHAR(50) NOT NULL,
    category_id VARCHAR(50) NOT NULL,
    room_number VARCHAR(20) NOT NULL,
    status room_status DEFAULT 'available',
    FOREIGN KEY (guest_house_id) REFERENCES guest_house(guest_house_id),
    FOREIGN KEY (category_id) REFERENCES room_category(category_id)
);

CREATE TABLE booking (
    booking_id VARCHAR(50) PRIMARY KEY,
    guest_id VARCHAR(50) NOT NULL,
    room_id VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    total_price NUMERIC(12,2) NOT NULL,
    FOREIGN KEY (guest_id) REFERENCES guest(guest_id),
    FOREIGN KEY (room_id) REFERENCES room(room_id)
);

CREATE TABLE transaction (
    transaction_id VARCHAR(50) PRIMARY KEY,
    booking_id VARCHAR(50) UNIQUE NOT NULL,
    status payment_status DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (booking_id) REFERENCES booking(booking_id)
);

CREATE TABLE payment (
    payment_id VARCHAR(50) PRIMARY KEY,
    transaction_id VARCHAR(50) NOT NULL,
    method payment_method NOT NULL,
    amount NUMERIC(12,2) NOT NULL,
    paid_at TIMESTAMP,
    FOREIGN KEY (transaction_id) REFERENCES transaction(transaction_id)
);

CREATE TABLE facility (
    facility_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE guest_house_facility (
    gh_facility_id VARCHAR(50) PRIMARY KEY,
    guest_house_id VARCHAR(50) NOT NULL,
    facility_id VARCHAR(50) NOT NULL,
    FOREIGN KEY (guest_house_id) REFERENCES guest_house(guest_house_id),
    FOREIGN KEY (facility_id) REFERENCES facility(facility_id)
);

CREATE TABLE guest_house_images (
    id VARCHAR(30) PRIMARY KEY,
    guest_house_id VARCHAR(30) NOT NULL,
    image_url TEXT NOT NULL,
    is_cover BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (guest_house_id) REFERENCES guest_houses(id)
);

CREATE TABLE room_images (
    id VARCHAR(30) PRIMARY KEY,
    room_id VARCHAR(30) NOT NULL,
    image_url TEXT NOT NULL,
    is_cover BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (room_id) REFERENCES rooms(id)
);

CREATE INDEX idx_booking_dates ON booking(start_date, end_date);
CREATE INDEX idx_booking_guest ON booking(guest_id);
CREATE INDEX idx_booking_room ON booking(room_id);
CREATE INDEX idx_transaction_booking ON transaction(booking_id);
CREATE INDEX idx_payment_transaction ON payment(transaction_id);
CREATE INDEX idx_guest_email ON guest(email);
CREATE INDEX idx_room_gh ON room(guest_house_id);
CREATE INDEX idx_room_category ON room(category_id);
CREATE INDEX idx_room_status ON room(status);
CREATE INDEX idx_gh_facility_gh ON guest_house_facility(guest_house_id);
CREATE INDEX idx_gh_facility_fac ON guest_house_facility(facility_id);

INSERT INTO guest_house VALUES
('GH-001', 'Guest House A', 'Jl. Mawar No. 123', 'Guest house pertama yayasan', 'MGR-001'),
('GH-002', 'Guest House B', 'Jl. Melati No. 456', 'Guest house kedua yayasan', 'MGR-001');

INSERT INTO room_category VALUES
('RC-QUEEN', 'Queen Bed', 'Queen bed room'),
('RC-DOUBLE', 'Double Bed', 'Double bed room');

INSERT INTO facility VALUES
('F-PARKING', 'Parking Area'),
('F-SECURITY', '24 Hour Security'),
('F-FOOD', 'Food Court'),
('F-HALL', 'Hall'),
('F-MEETING', 'Meeting Room'),
('F-POOL', 'Swimming Pool');

INSERT INTO guest_house_facility VALUES
('GHF-001', 'GH-001', 'F-PARKING'),
('GHF-002', 'GH-001', 'F-SECURITY'),
('GHF-003', 'GH-001', 'F-FOOD'),
('GHF-004', 'GH-001', 'F-HALL'),
('GHF-005', 'GH-001', 'F-MEETING'),
('GHF-006', 'GH-001', 'F-POOL'),
('GHF-007', 'GH-002', 'F-PARKING'),
('GHF-008', 'GH-002', 'F-SECURITY'),
('GHF-009', 'GH-002', 'F-FOOD'),
('GHF-010', 'GH-002', 'F-HALL'),
('GHF-011', 'GH-002', 'F-MEETING'),
('GHF-012', 'GH-002', 'F-POOL');

DO $$
DECLARE i INT := 1;
BEGIN
  WHILE i <= 20 LOOP
    INSERT INTO room VALUES (
        CONCAT('RM-A-', LPAD(i::text, 3, '0')),
        'GH-001',
        CASE WHEN i % 2 = 0 THEN 'RC-QUEEN' ELSE 'RC-DOUBLE' END,
        CONCAT('A-', i),
        'available'
    );
    i := i + 1;
  END LOOP;
END $$;

DO $$
DECLARE i INT := 1;
BEGIN
  WHILE i <= 21 LOOP
    INSERT INTO room VALUES (
        CONCAT('RM-B-', LPAD(i::text, 3, '0')),
        'GH-002',
        CASE WHEN i % 2 = 0 THEN 'RC-QUEEN' ELSE 'RC-DOUBLE' END,
        CONCAT('B-', i),
        'available'
    );
    i := i + 1;
  END LOOP;
END $$;

INSERT INTO guest VALUES
('G-001', 'Budi Santoso', 'budi@example.com', '08123456789'),
('G-002', 'Siti Aminah', 'siti@example.com', '082122334455');
