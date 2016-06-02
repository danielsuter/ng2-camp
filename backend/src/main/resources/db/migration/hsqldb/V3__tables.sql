DROP TABLE hotel
IF EXISTS;


CREATE TABLE camp (
  id               BIGINT GENERATED BY DEFAULT AS IDENTITY (
  START WITH 1 ),
  "from"           DATE,
  name             VARCHAR(255),
  number_of_people INTEGER,
  status           VARCHAR(255),
  team             VARCHAR(255),
  "to"             DATE,
  PRIMARY KEY (id)
);

CREATE TABLE camp_offer_requests (
  camp_id           BIGINT NOT NULL,
  offer_requests_id BIGINT NOT NULL
);

CREATE TABLE camp_offers (
  camp_id   BIGINT NOT NULL,
  offers_id BIGINT NOT NULL
);

CREATE TABLE hotel (
  id                BIGINT GENERATED BY DEFAULT AS IDENTITY (
  START WITH 1 ),
  city              VARCHAR(255),
  contact_email     VARCHAR(255),
  country_code      VARCHAR(255),
  description       VARCHAR(255),
  holiday_check_url VARCHAR(255),
  name              VARCHAR(255),
  rooms             INTEGER,
  street            VARCHAR(255),
  street_number     VARCHAR(255),
  trip_advisor_url  VARCHAR(255),
  website           VARCHAR(255),
  zip_code          VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE hotel_offers (
  hotel_id  BIGINT NOT NULL,
  offers_id BIGINT NOT NULL
);

CREATE TABLE mail_template (
  id       BIGINT GENERATED BY DEFAULT AS IDENTITY (
  START WITH 1 ),
  language VARCHAR(255),
  text     VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE offer (
  id                BIGINT GENERATED BY DEFAULT AS IDENTITY (
  START WITH 1 ),
  cost_per_person   DOUBLE,
  currency          VARCHAR(255),
  description       VARCHAR(255),
  double_rooms      INTEGER,
  expiration_date   DATE,
  "from"            DATE,
  number_of_people  INTEGER,
  offer_date        DATE,
  requesting_person VARCHAR(255),
  single_rooms      INTEGER,
  "to"              DATE,
  hotel_id          BIGINT,
  PRIMARY KEY (id)
);

CREATE TABLE offer_request (
  id                 BIGINT GENERATED BY DEFAULT AS IDENTITY (
  START WITH 1 ),
  date               TIMESTAMP,
  last_status_change DATE,
  status             VARCHAR(255),
  hotel_id           BIGINT,
  PRIMARY KEY (id)
);

CREATE TABLE rating (
  id              BIGINT GENERATED BY DEFAULT AS IDENTITY (
  START WITH 1 ),
  date            DATE,
  description     VARCHAR(255),
  person          VARCHAR(255),
  rating_from1to5 INTEGER,
  hotel_id        BIGINT,
  PRIMARY KEY (id)
);

ALTER TABLE camp_offer_requests
  ADD CONSTRAINT UK_2yn7b27it2b93w9y756y0g7y7 UNIQUE (offer_requests_id);

ALTER TABLE camp_offers
  ADD CONSTRAINT UK_o5krel5d0ingi0jtij2gyct23 UNIQUE (offers_id);

ALTER TABLE hotel_offers
  ADD CONSTRAINT UK_jq8c8kaurrm3g4fryiqpgpl0s UNIQUE (offers_id);

ALTER TABLE camp_offer_requests
  ADD CONSTRAINT FK_2yn7b27it2b93w9y756y0g7y7
FOREIGN KEY (offer_requests_id)
REFERENCES offer_request;

ALTER TABLE camp_offer_requests
  ADD CONSTRAINT FK_1jrfhen8y0oqmgspi5aotbfsb
FOREIGN KEY (camp_id)
REFERENCES camp;

ALTER TABLE camp_offers
  ADD CONSTRAINT FK_o5krel5d0ingi0jtij2gyct23
FOREIGN KEY (offers_id)
REFERENCES offer;

ALTER TABLE camp_offers
  ADD CONSTRAINT FK_pyh5sfk6d9qpkqnegg1gfj83t
FOREIGN KEY (camp_id)
REFERENCES camp;

ALTER TABLE hotel_offers
  ADD CONSTRAINT FK_jq8c8kaurrm3g4fryiqpgpl0s
FOREIGN KEY (offers_id)
REFERENCES offer;

ALTER TABLE hotel_offers
  ADD CONSTRAINT FK_qlnlnl66170wfie02qlbipi13
FOREIGN KEY (hotel_id)
REFERENCES hotel;

ALTER TABLE offer
  ADD CONSTRAINT FK_7w0lpk0dph8bfchqetb2x2qna
FOREIGN KEY (hotel_id)
REFERENCES hotel;

ALTER TABLE offer_request
  ADD CONSTRAINT FK_gka6ghev5hyp1qs1exgrr1c9n
FOREIGN KEY (hotel_id)
REFERENCES hotel;

ALTER TABLE rating
  ADD CONSTRAINT FK_ns8b94vlj2d1ply4qa5dblcbm
FOREIGN KEY (hotel_id)
REFERENCES hotel;