exports.handler = function(event,context,callback){
    let body;
    const secretBody = `
        <h3>Welcome to the secret area</h3>
        <p>here we can tell you that the sky is  <strong>blue</strong></p>
    `;
    if (event.body){
        body = JSON.parse(event.body)
    } else {
        body =  {

        }
    }
    if (body.password == 'javascript'){
        callback(null,{
            statusCode: 200,
            body: secretBody
        })

    } else {
        callback(null,{
            statusCode: 401        })

    }

}