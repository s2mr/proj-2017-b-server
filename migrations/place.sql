-- up
create table place(
    id int auto_increment not null,
    name varchar(255) not null,
    created_at timestamp not null default now() on update now(),
    updated_at timestamp not null default now(),
    primary key(id)
);
    
-- down