
    drop table if exists hotel cascade;

    drop sequence hibernate_sequence;

    create table hotel (
        id int8 not null,
        city varchar(255),
        country_code varchar(255),
        description varchar(255),
        holiday_check_url varchar(255),
        name varchar(255),
        rooms int4 not null,
        trip_advisor_url varchar(255),
        website varchar(255),
        zip_code varchar(255),
        primary key (id)
    );

    create sequence hibernate_sequence;
