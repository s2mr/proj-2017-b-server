-- up
create table location(
    id int not null auto_increment,
    part_id int not null,
    place_id int not null,
    created_at timestamp not null default now() on update now(),
    updated_at timestamp not null default now(),
    primary key(id),
    foreign key (part_id) references parts(id),
    foreign key (place_id) references places(id)
);
    
-- down