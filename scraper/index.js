const reddit = require('./reddit');

(async () => {

    await reddit.initialize('AskReddit');

    let results = await reddit.getResults(10);


    debugger;

});