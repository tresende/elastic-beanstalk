create table item (id int auto_increment primary key, event varchar(255), timestamp datetime);
insert into item (event, timestamp) values ('teste', now());