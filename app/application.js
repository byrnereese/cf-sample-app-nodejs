// test to connect to elephant SQL database and load some data

const { Client } = require('pg')

module.exports = {
  get_visitors: function ( result, err ) {
      const query = {
          text: 'SELECT * FROM visitors'
          //,rowMode: 'array'
      };
      client = new Client({
          user: 'tfjaafim',
          host: 'stampy.db.elephantsql.com',
          database: 'tfjaafim',
          password: 'szjqeC8QyZntxmosnQJ1IhMtvlfO1JRV',
          port: 5432,
      })
      client.connect()
      visitors = []
      client.query(query, function(err, res) {
          if (err) {
              console.log("Query FAILED")
              console.log(err.stack)
              visitors.push({
                  "visitor_id":"1",
                  "name":"byrne reese"
              });
              visitors.push({
                  "visitor_id":"2",
                  "name":"john doe"
              });
          } else {
              console.log("Query successful");
              console.log( JSON.stringify(res) );
              for (i=0;i<res.rows.length;i++) {
                  n = res.rows[i].name;
                  id = res.rows[i].visitor_id;
                  console.log("i: " + i + ", name: " + n + ", id: " + id);
                  visitors.push({
                      name: n,
                      visitor_id: id
                  });
              }
              console.log(JSON.stringify(visitors))
          }
          client.end()
          result( visitors )
      });
  }
}
