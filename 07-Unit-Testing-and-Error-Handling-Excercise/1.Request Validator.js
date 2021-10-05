function requestValidator(request){
    let allowedMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let allowedVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^[A-z0-9\.\*]+$/;
    let messageRegex = /^[0-9\w]*$/;

    if(!allowedMethods.includes(request.method) || request.method == undefined){
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if(!uriRegex.test(request.uri) || request.uri == undefined){
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if(!allowedVersions.includes(request.version) || request.version == undefined){
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if(!messageRegex.test(request.message) || request.message == undefined){
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return request; 
}

console.log({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  );