drop table if exists home;
drop table if exists images;

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
city text,
host_id int,
FOREIGN KEY (host_id) REFERENCES users(user_id)
);

insert into home
(home_name, price, max_guests, describe_main, describe_space, describe_guest_access, describe_interaction_with_guests, describe_other_things_to_note, address, city, host_id)
values
('Modern Home in Uptown Phoenix', 73, 3, 
'A remodeled mid-century modern condo with character: fresh, comfortable with everything to make your stay pleasant. 2 real queen beds, quality towels, luxury linens. The entire condo is yours. Near many awesome local restaurants.

Central location near the airport (8.2 miles / 15 min.), downtown Phoenix, Scottsdale, Convention Center (8 miles / 15 min.), Sports parks: all easily and quickly accessible.

More information
Close to many hiking trails in the Phoenix Mountains and Camelback Mountain and restaurants.',
'This modern condo is completely remodeled offering all the amenities you may want or need for a comfortable stay - no matter how long with a central location near popular places like the airport, convention center, and sports arenas or hiking and lots of restaurants.

Watch Netflix and cable (Sling) via Roku - should be all logged in already, fast Wi-Fi internet, full kitchen + equipment (toaster oven - no microwave - the food is really better when it''s not nuked, washer and dryer. It''s all updated, yet the building retains many of it''s mid-century modern features: like the beautiful adobe brick wall, post and beam architecture and some of the well-done tile work.

With a comfortable queen bed in each bedroom, there is ample room for up to four people. Pretty much all that you''ll need is provided: towels, soaps, shampoo and even a hair dryer and clothes iron.

Tea and coffee for the french press are provided. The frig. has some basic condiments like ketchup, sriracha, mustard plus basic spices plus a bottled water and usually a few bottles of beer.

This is our second condo. Our other one has great reviews from guests. When preparing this one for you, we aimed to meet and exceed the comfort of the other condo. Our goal is to make that kind of place we would enjoy staying in and returning to.

The condo is about 950 square feet - third party measurement.

This is a small community of only four condos that share a large green yard with a sitting area in the middle where you can enjoy the weather, read a book, have coffee or just lounge around.

If you''re here in the winter it may be just in time to have an orange or tangelo from one of the citrus trees.

The entire place is yours. The condo is completely stocked so you can be the chef if you want, make coffee in the French press or just warm up that take out.

Access to the condo is through a lockbox. This is easy to use and allows you to get in whenever you arrive, but, if you want, we''ll be happy to meet you: it''s your choice.',
'You can use pretty much everything in the condo, it''s there to make your stay comfortable.

The kitchen has utensils, plates, cups, glasses and a set of pots and pans: get creative or just warm up food in the oven or toaster oven.

Extra linens and toiletries are in the hall closet. Anything in the frig. is there for your use.

The laundry is just outside in the grey laundry room by the front door - access it with the sa
me key as the entry doors.',
'Access to the condo is through a lockbox. This will allow you to get in no matter what time you''ll arrive. It''s easy to use and convenient, though we''re near by if you would like to meet. It''s your choice.',
'The sitting area in the middle of the two building is for common use. The citrus is usually good from early December until about April or May - you''re welcome to have some.

Third Sleeping Area - on couch in living room - if needed.

Sleeping arrangement in the living room. An additional person may sleep on the sofa. It is very comfortable for someone up to about 5 foot 9 inches tall. The large pillows come off and it''s like a twin bed (73 long by 33 wide).

FYI: We wash ALL bedding - ALL OF IT - every single time - even the comforter cover(s) - WITHOUT EXCEPTION. This is what we would expect and that is what we provide. I take pride in cleanliness - it is no. 1 on my list.',
'1327 W Woodland Ave
Phoenix, AZ 85007',
'Phoenix',1),
('Charming Coronado Guest House', 67, 2, 
'Welcome to Phoenix and the Charming Coronado Guest House. We are centrally located within minutes of Downtown Phoenix and only a short drive to Sky Harbor Airport.',
'The most 5 star reviews in Phoenix! No cleaning fees and no security deposit. Those are silly.
The guest house has a keypad for entry so no need for key exchange and check-in anytime after 2pm.

The Coronado Guest House is located behind our historic 1937 home and is located in the heart of the Coronado Historic Neighborhood. We are within walking distance to many great restaurants and downtown Phoenix is only a 5 minute drive away. Downtown Phoenix is home to numerous sporting venues such as Chase Field and US Airways Center, as well as the Phoenix Art Museum, Arizona Science Center, Heard Museum, and the Children''s Museum. Many great restaurants are within a 5 minute walk and we can recommend a few of our favorites for you. The 7th St. and Oak bus stop is only a 5 minute walk. We are also only a 10-15 minute walk to the Oak Metro Light Rail station which can take you to Downtown Phoenix, Phoenix Sky Harbor Airport, Tempe with its eclectic Mill Avenue and home to Arizona State University, and Mesa with it''s wonderful Mesa Center for the Arts.

Your private guest house has a queen bed. You have a 32 inch flatscreen TV with DirectTV satellite as well as 300 Mbps wireless internet throughout the entire backyard. The french doors open up to a gazebo perfect for outdoor dining and seating for 8. Lounge on the patio in the hammock. There are also screen doors that you can lock so you can leave the inside doors open at night and enjoy the cool air. The guest house has a full kitchen and bathroom. Laundry is available in our main house if needed. The guest house entrance is through our driveway gate and is separate from our main house.

We have 3 chickens that provide us with fresh eggs daily and you are welcome to as many eggs as you would like.

Yoga studios nearby:
SuTRA Midtown Yoga - 3 minute walk
Yoga Phoenix (Kundalini Yoga) - 30 second walk

Nearby Restaurants: (3-10 minute walk)
Main Ingredient
Humble Pie
Wy-Not Cafe
Nami & Green
America''s Taco Shop
Coronado Cafe
McAplines Soda Fountain
Rice Paper
Tuck Shop
Astor House

Day trips from Phoenix include:
Sedona - 2hrs. 
Jerome - 2 hrs. 
Tucson - 2 hrs.
Prescott - 2 hrs.

It''s hard to do the Grand Canyon as a day trip and really enjoy your time there. Instead fly into Phoenix and spend 1 or 2 nights here then spend a night in Flagstaff or at canyon itself. 4 1/2 hr drive from Phoenix.',
'Laundry facilities, backyard, fire pit, outside dining.',
'I''m usually always around as I work from home so chances are I''ll be here to show you around - unless I''m traveling the world. In that case just call me if you need anything.',
'Wow that''s a lot of yellow stars.',
'1036 E Monte Vista Rd Phoenix, Arizona',
'Phoenix',1),
('South Phoenix Casita with Saltwater Pool', 50, 2,
'Our casita is detached from our home and is located in a private gated community in the foothills of South Mountain, about 15 minutes from downtown phoenix. The casita has a private entrance with all of the comforts of a hotel room. There is a smart tv with netflix and HBO Go and basic cable. There is a Mini fridge and Keurig. Access to our private salt water pool with mountain views.',
'300 sqft casita that is located in the front of our home. The casita is detached from our home with a private entrance. You will also have your own heat and A/C unit with nest thermostat. There is a tile bathroom stocked with soap, shampoo and conditioner.',
'Guests will have access to our private pool with mountain views. There are nice lounge chairs to relax in the sun or under the stars. Please do not invite anyone over to use the pool. There is a courtyard outside of the casita that you are welcome to use as well.',
'We typically stay out of the way of our guests, however we live in the main house of the property and are usually available to help with anything!',
'The pool is not heated but typically very warm May-September.', 
'1830 W Telegraph Pass Rd
Phoenix, AZ 85041',
'Phoenix', 1),
('Green Gables Guest House', 69, 2, 
'Awaiting your stay a beautifully remodeled guest house in the historic Green Gables District. This beautifully restored Guest House features one bedroom, one bath, newly redesigned and fully functional kitchen. 2 Queen size beds on simply the most comfortable memory foam mattress for those nights when the day’s activities leave you yearning for a peaceful night’s rest.',
'Completely remodeled 1 bedroom 1 bathroom contemporary guest house with brand new stainless steel appliances and a queen size sofa sleeper with pressure sensing mattress, TVs in both the living room and bedroom.. This cozy cottage boast 640 square feet perfect for those groups traveling with 4 people. The bedroom has a 45 inch TV with a queen size bed and pressure sensing foam mattress. The yard is completely fenced for privacy and security with plenty of space to relax and enjoy the beautiful fall, winter, and spring seasons here in Phoenix.',
'Guests will have access to streaming TV services such as Netflix and Amazon all of the streaming media which are available through Roku. including high-speed internet and your own private patio. Guesthouse features a private yard fenced for safety and security, there is also access to a washer and dryer located in the main house.',
'When you arrive, Dan or Kevin will be there to greet you and welcome you home :-) Should you require anything during your stay your hosts are only a few feet away and will be available your through out your stay. So please let them know how the can help.',
'Enjoy our pool :) It is not heated but typically very warm May-September.',
'2502 N Foote Dr Phoenix AZ 85002', 'Phoenix', 1),
('Stylish Sanctuary with Pool/Spa in Downtown Phx.', 58, 5,
'Charming home in a quiet location near Downtown Phoenix. Nestled in the heart of the quaint FQ Story Historic District. This home combines historic charm with mid-century modern character.

Sky Harbor - 5.4 miles
Convention Center - 1.6 miles
Talking Stick Arena - 1.8 miles
Chase Field - 2 miles',
'This beautiful 3 bedroom home offers all of the amenities you may want or need for a comfortable stay. Near popular places like Phoenix Sky Harbor Airport, Convention Center, sports arenas and tons of restaurants/entertainment. It is close proximity to fantastic food, live music, public transportation, and exciting city events, which makes this an ideal location to be introduced to a side of Phoenix that even some locals aren''t aware of.

Hang by the pool and catch some rays in the back yard, unwind in the heated spa after a long day or during our colder months, and enjoy the covered patio with classic twinkle lights and outdoor seating creating a warm and welcoming vibe.

Watch Netflix, Hulu and more via Roku Smart TV. We have fast Wi-Fi internet. A full kitchen with cooking equipment, plates, bowls, glasses, utensils, toaster oven, microwave and coffee maker. Washer and dryer available for guest use. Tea and coffee are provided. The refrigerator has a Brita.

With queen beds in two of the bedrooms, and a futon in the third bedroom, there is ample room for up to 5 people (2 people on each queen bed and 1 person on the futon). All of the essentials are included: towels, soaps, shampoo, hair dryer. There is unfortunately no outlet in the bathroom due to the home being historic.',
'Guests have access to the entire home. The front yard has plenty of room for parking in the driveway or free street parking. Guests also can enjoy the back yard with covered patio and pool/spa.

The only part of the property guests do not have access to is a detached guest house/garage that is occupied 3 - 4 months of the year. They have their own private patio, they do not use back yard/pool/spa.',
'Access to the home is through E Lock. This will allow you to get in no matter what time you arrive. It is easy to use, convenient and safe since you will have your own custom key code.

We are constantly available for any of our guest needs. We are best reached by sending us a message on the Airbnb App for feel free to give us a call. We also live close by the property, so we can stop by quickly if needed.',
'There is a hot tub and pool open for guests.',
'745 W Fillmore St, Phoenix, Arizona 85007', 'Phoenix', 1);

create table images (
img_id serial primary key,
img_url text,
home_Id int,
main_Image text,
FOREIGN KEY (home_Id) REFERENCES home(homeid)
)

insert into images 
(img_url, home_id)
values
('https://a0.muscache.com/4ea/air/v2/pictures/54af8626-fbee-43a3-b13b-dda795b80209.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90', 1, 'true'),
('https://a0.muscache.com/4ea/air/v2/pictures/a73e694b-544e-483c-bcf8-7443dbdd824a.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90', 1),
('https://a0.muscache.com/4ea/air/v2/pictures/29f509a7-491f-4404-8dd7-db3dac06aef4.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90', 1),
('https://a0.muscache.com/4ea/air/v2/pictures/c4aa5cae-c1e9-4aea-85a4-aff756fdbdb7.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90', 1),
('https://a0.muscache.com/4ea/air/v2/pictures/cee7205c-ca78-4aac-8802-1844b31c45de.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90', 1),
('https://a0.muscache.com/4ea/air/v2/pictures/59ac9679-11a6-4d57-ad45-aa74a0b0aab4.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90', 1),
('https://a0.muscache.com/4ea/air/v2/pictures/1d84dc9b-6f58-41f7-8cd9-e58dbed02523.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90', 1);
('https://a0.muscache.com/im/pictures/5fd7bfb3-2ad3-447c-bcd9-a5248159bfde.jpg?aki_policy=xx_large', 2, 'true'),
('https://a0.muscache.com/im/pictures/296daf07-e291-4b64-91a5-6b6a3a8ac0bc.jpg?aki_policy=xx_large', 3, 'true'),
('https://a0.muscache.com/im/pictures/bb0a685a-a362-45e6-aead-944576ee8f80.jpg?aki_policy=xx_large', 4, 'true'),
('https://a0.muscache.com/im/pictures/66ac7ea1-9fb0-49dd-80e1-ebd9ed4a3980.jpg?aki_policy=xx_large', 5, 'true');
