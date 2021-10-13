const strObject = {
    id: 0,
    name: "Debug",
    company: "Google"
}

const strJSON = `[{
    "id": false,
    "name": "Debug",
    "company": {
      "name": "Google"
    }
}]`;

const parsedJSON = strJSON;


console.log(strObject);
console.log(parsedJSON);