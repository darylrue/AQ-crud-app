CREATE TABLE client (
  company_id int IDENTITY,
  company_name varchar(50) NOT NULL,
  website_uri varchar(255),
  phone varchar(50) NOT NULL,
  phys_street varchar(50) NOT NULL,
  phys_city varchar(50) NOT NULL,
  phys_state varchar(2) NOT NULL,
  phys_zip_code varchar(5) NOT NULL,
  mail_street varchar(50) NOT NULL,
  mail_city varchar(50) NOT NULL,
  mail_state varchar(2) NOT NULL,
  mail_zip_code varchar(5) NOT NULL
);

CREATE TABLE person (
  person_id int IDENTITY,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  email_address varchar(50) NOT NULL,
  street_address varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  state varchar(2) NOT NULL,
  zip_code varchar(5) NOT NULL,
  client varchar(50),
  foreign key (client) references client(company_id)
);


