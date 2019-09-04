import jsforce from 'jsforce';

jsforce.browser.init({
  clientId: 'clientId',
  redirectUri: 'http://localhost:8080/',
  proxyUrl: "https://node-salesforce-proxy.herokuapp.com/proxy/"
});

// const conn = new jsforce.Connection();
export const sfAuth = () => {
  jsforce.browser.login();
}

export const onConnect = () => {
  jsforce.browser.on('connect', function(conn) {
    console.log(conn.query);
    conn.query('SELECT Id, Name FROM Account', function(err, res) {
      if (err) { console.log({err}); return handleError(err); }
      handleResult(res);
    });
  });
}

const handleResult = (res) => (console.log);
