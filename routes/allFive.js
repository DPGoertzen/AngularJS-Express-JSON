var router = require('express').Router();
var fiveOlympians = [];

var archerArray = [
  {sport: "Archery", name: "Mackenzie Brown", location: "Flint, Texas", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/brown_mackenzie_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Archery", name: "Brady Ellison", location: "Globe, Ariz.", image: "http://www.teamusa.org/~/media/TeamUSA/Images/11Hopefuls/Ellison_B120x187.jpg?h=167&la=en&mh=167&mw=100&w=100"},
  {sport: "Archery", name: "Zach Garrett", location: "Wellington, Mo.", image: "http://www.teamusa.org/~/media/USA_Archery/June-2015/Zach-Garrett-Bio.jpg?h=167&la=en&mh=167&mw=100&w=100"},
  {sport: "Archery", name: "Jake Kaminski", location: "Gainesville, Fla.", image: "http://www.teamusa.org/~/media/TeamUSA/Images/11Hopefuls/Kaminski_archery.jpg?h=198&la=en&mh=250&mw=150&w=148"}
];

var boxerArray = [
  {sport: "Boxing", name: "Carlos Balderas", location: "Santa Maria, Calif.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/balderas_carlos_100x167_2.jpg?la=en"},
  {sport: "Boxing", name: "Charles Conwell", location: "Cleveland Heights, Ohio", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/conwell_charles_100x167.jpg?la=en"},
  {sport: "Boxing", name: "Nico Hernandez", location: "Wichita, Kan.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/hernandez_nico_100x167.jpg?la=en"},
  {sport: "Boxing", name: "Mikaela Mayer", location: "Los Angeles, Calif.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/mayer_mikaela_100x167.jpg?la=en"},
  {sport: "Boxing", name: "Gary Russell", location: "Washington, D.C.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Boxing/Russell_Gary_100x167.jpg?la=en"},
  {sport: "Boxing", name: "Claressa Shields", location: "Flint, Mich.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/shields_claress_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Boxing", name: "Shakur Stevenson", location: "Newark, N.J.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/stevenson_shakur_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Boxing", name: "Antonio Vargas", location: "Kissimmee, Fla.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Boxing/Vargas_Antonio_100x167.jpg?h=167&w=100&la=en"}
];

var pingpongArray = [
  {sport: "Table Tennis", name: "Yijun Feng", location: "Atlanta, Ga.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/feng_yijun_100x167.jpg?la=en"},
  {sport: "Table Tennis", name: "Kanak Jha", location: "Milpitas, Calif.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/jha_kanak_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Table Tennis", name: "Timothy Wang", location: "Houston, Texas", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/wang_timothy_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Table Tennis", name: "Jennifer Wu", location: "Fort Lee, N.J.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/wu_jennifer_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Table Tennis", name: "Lily Zhang", location: "Palo Alto, Calif.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/zhang_lily_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Table Tennis", name: "Jiaqi Zheng", location: "Fremont, Calif.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/zheng_jiaqi_100x167.jpg?h=167&w=100&la=en"}
]

var triathleteArray = [
  {sport: "Triathlon", name: "Greg Billington", location: "Spokane, Wash.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/billington_greg_100x167.jpg?la=en"},
  {sport: "Triathlon", name: "Gwen Jorgensen", location: "St. Paul, Minn.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/jorgensen_gwen_100x167_2.jpg?la=en"},
  {sport: "Triathlon", name: "Ben Kanute", location: "Geneva, Ill.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Kanute_ben_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Triathlon", name: "Joe Maloy", location: "Wildwood Crest, N.J.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Maloy_joe_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Triathlon", name: "Sarah True", location: "Hanover, N.H.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/true_sarah_100x167.jpg?la=en"},
  {sport: "Triathlon", name: "Katie Zaferes", location: "Hampstead, Md.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Zaferes_katie_100x167.jpg?h=167&w=100&la=en"}
];

var weightlifterArray = [
  {sport: "Weightlifting", name: "Jenny Arthur", location: "Gainesville, Ga.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/arthur_jenny_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Weightlifting", name: "Kendrick Farris", location: "Shreveport, La.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/farris_kendrick_100x167.jpg?h=167&w=100&la=en"},
  {sport: "Weightlifting", name: "Morghan King", location: "Redmond, Wash.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/king_morghan_100x167.jpg?la=en"},
  {sport: "Weightlifting", name: "Sarah Robles", location: "Desert Hot Springs, Calif.", image: "http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/robles_sarah_100x167.jpg?h=167&w=100&la=en"}
];
function random(arrayLength){
  return Math.floor(Math.random() * arrayLength);
}

router.get('/archery', function(request, response){
  response.send(archerArray[random(archerArray.length - 1)]);
})

router.get('/boxing', function(request, response){
  response.send(boxerArray[random(boxerArray.length - 1)]);
})

router.get('/pingpong', function(request, response){
  response.send(pingpongArray[random(pingpongArray.length - 1)]);
})

router.get('/triathlon', function(request, response){
  response.send(triathleteArray[random(triathleteArray.length - 1)]);
})

router.get('/weightlifting', function(request, response){
  response.send(weightlifterArray[random(weightlifterArray.length - 1)]);
})

router.get('/', function(request, response){
  response.send("Dude, pick a sport.");
})

module.exports = router;
