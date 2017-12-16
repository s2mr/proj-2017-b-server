-- up
create table parts 
    id int primary key,
    name varchar(255) not null,
    created_at datetime,
    updated_at datetime
    
-- down