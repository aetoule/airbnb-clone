select images.img_url from images
inner join home on images.home_id = home.homeid
where home.homeid = $1