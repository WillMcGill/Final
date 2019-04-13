



let routes;
let results = fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200424196-5fdf40349774a101d0c0d762b625f5b1');
results.then(
    function(x) {
        return x.json();
    }
).then(
    function(y){
        routes = y;
        console.log(y);
        let routename = y.routes[9].name;
        console.log(routename);
        document.getElementById('myRoute').innerHTML = routename;
        
        let difficulty = y.routes[9].rating;
        console.log(difficulty);
        document.getElementById('myDiff').innerHTML = difficulty;
        
        let wall = y.routes[9].location[4];
        console.log(wall);
        document.getElementById('myWall').innerHTML = wall;
    })

    // var routename = routes.id.1;

    // console.log(routename);



