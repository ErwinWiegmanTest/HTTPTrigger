//EW: 17-12-2018 - Test aanpassing 1
//EW: 17-12-2018 - Test aanpassing 2
//EW: 17-12-2018 - Test aanpassing 2
// https://httptriggertestew001.azurewebsites.net/api/HttpTrigger?name=erwin
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name) + " ,Paardenlul!"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};