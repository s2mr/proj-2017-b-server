-- up
create table parts(
    id int auto_increment,
    name varchar(255) not null,
    created_at timestamp not null default now() on update now(),
    updated_at timestamp not null default now(),
    primary key(id)
);
    
-- down