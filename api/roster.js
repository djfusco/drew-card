
export default async function handler(request, res) {

  const roster = [
    {
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474563.jpg",
        "name": "Drew d2323d",
        "position": "dfgdfg Beast",
        "statsLabel": "Career Stats",
        "top": "Beast"
    },
    {
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474563.jpg",
        "name": "Drew d2323d",
        "position": "dfgdfg Beast",
        "statsLabel": "Career Stats",
        "top": "Beast"
    }
  ];
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(roster);
}