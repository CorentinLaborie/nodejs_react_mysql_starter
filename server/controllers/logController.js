const {ORM, Sequelize} = require("../database/connection");
const Log = require("../models/Log")(ORM, Sequelize);

let CreateLog = async (protocol, host , baseUrl, path ,fullURL, text) => {
    var sql = "INSERT INTO Logs (createdAt, updatedAt,text, protocol, host, base_url, path_url, full_url) VALUES ( NOW(), NOW() ,'"+text+"','"+protocol+"','"+host+"','"+baseUrl+"','"+path+"','"+fullURL+"')";  
    return ORM.query(sql, {
      type: ORM.QueryTypes.INSERT
    })
};

let ReadAllLogs = async () => {
  var sql = "SELECT * FROM Logs";
  let Logs = [];
  const MyQuery = await ORM.query(sql, {
    type: ORM.QueryTypes.SELECT
  }).then((res) => {
    // console.log(res)
    res.map((log, i) => {
      Logs.push(log);
      // console.log(log,` index : ${i}`);
    });
  });
  console.log("LOGS", Logs)
  return Logs; 
}
module.exports = {CreateLog, ReadAllLogs};