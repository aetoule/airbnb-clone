-- select * from images
-- inner join home on images.home_id = home.homeid
select * from home
left join images on images.home_id = home.homeid
where home.city = $1 