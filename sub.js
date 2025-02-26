async function fetchIt(){
    let res = await fetch('http://localhost:3000/twp/webtoonz');
    console.log(res);
    let data = await res.json()
    console.log(`${data}`);
}

fetchIt()