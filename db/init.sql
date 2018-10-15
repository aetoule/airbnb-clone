drop table if exists home;

create table home(
homeid serial primary key,
home_name text,
price integer,
max_guests integer,
describe_main text, 
describe_space text,
describe_guest_access text,
describe_interaction_with_guests text,
describe_other_things_to_note text,
address text,
city text
);

insert into home 
(home_name, price, max_guests, describe_main, describe_space, describe_guest_access, describe_interaction_with_guests, describe_other_things_to_note, address, city)
values
('homename', 54, 3, 'main description', 'description about space', 'guest access', 'interaction with guests', 'other things to note', '2343 Blah Street', 'Phoenix');

select * from home;




