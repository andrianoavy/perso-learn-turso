create table example_users (
    uid text primary key,
    email text
);
create table example_scores (
    uid text,
    level integer,
    score integer,
    primary key (uid, level)
);

insert into example_users values ('uid1', 'foo@bar.com');
insert into example_users values ('uid2', 'baz@bar.com');
insert into example_scores values ('uid1', 1, 100);
insert into example_scores values ('uid1', 2, 95);
