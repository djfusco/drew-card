
export default async function handler(req, res) {
  const search = req.query.search || '';
  var roster = [
    {
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474563.jpg",
        "name": "Drew Doughty",
        "position": "Overpaid",
        "statsLabel": "Career Stats",
        "top": "Beast"
    },
    {
      "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474563.jpg",
      "name": "Mario Lemniux",
      "position": "GOAT",
      "statsLabel": "Career Stats",
      "top": "Amazing"
  },
    {
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474563.jpg",
        "name": "The Real Btopro",
        "position": "Defense",
        "statsLabel": "Career Stats",
        "top": "Teacher, acceptable"
    }
  ];
  roster.map((player) => {
    player.index = player.name.toLowerCase() + " " + player.position.toLowerCase() + " " + player.top.toLowerCase();
  });
  roster = roster.filter((player) => {
    return player.index.indexOf(search.toLowerCase()) > -1;
  });
  console.log(roster);
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(roster);
}