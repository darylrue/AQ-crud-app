INSERT INTO client(
    company_name,
    website_uri,
    phone,
    phys_street,
    phys_city,
    phys_state,
    phys_zip_code,
    mail_street,
    mail_city,
    mail_state,
    mail_zip_code
) VALUES (
    'Fake Company 1',
    'www.we-do-stuff.com',
    '555-555-5555',
    '123 Company St.',
    'Asheville',
    'NC',
    '28801',
    '123 Company St.',
    'Asheville',
    'NC',
    '28801'
), (
    'Fake Company 2',
    'www.we-do-stuff-too.com',
    '555-555-5555',
    '123 Company St.',
    'Asheville',
    'NC',
    '28801',
    'PO Box 1234',
    'Asheville',
    'NC',
    '28801'
);

INSERT INTO person(
    first_name,
    last_name,
    email_address,
    street_address,
    city,
    state,
    zip_code,
    client
) VALUES (
    'John',
    'Smith',
    'fake1@email.com',
    '123 Any St.',
    'Asheville',
    'NC',
    '28801',
    1
), (
    'Jane',
    'Smith',
    'fake2@email.com',
    '123 Any St.',
    'Asheville',
    'NC',
    '28801',
    1
), (
    'Bob',
    'Smith',
    'fake3@email.com',
    '123 Any St.',
    'Asheville',
    'NC',
    '28801',
    null
);


