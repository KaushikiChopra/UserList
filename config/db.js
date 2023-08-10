const { Sequelize } = require('sequelize');

const path = require("path");
const Umzug = require('umzug');
const sequelizeInstance = new Sequelize('user', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});


const migrate = new Umzug({
  migrations: {
    // indicates the folder containing the migration .js files
    path: path.join(__dirname, '../migrations'),
    pattern: /\.js$/,
    // inject sequelize's QueryInterface in the migrations
    params: [sequelizeInstance.getQueryInterface(), Sequelize],
  },
  // indicates that the migration data should be store in the database
  // itself through sequelize. The default configuration creates a table
  // named `SequelizeMeta`.
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelizeInstance
  },
})

function psqlDbConnect() {
  try {
sequelizeInstance.authenticate().then(() => {
  console.log('Connection has been established successfully (PSQL)')
  migrate.up().then(async () => {
      console.log('All migrations performed successfully (PSQL)')
      // await seed.up().then(async () => {
      //     console.log('Data seed successful (PSQL)')
      // }).catch((error) => {
      //     console.log("error in seed (PSQL)", error);
      // })
  }).catch((err) => {
      console.log("Migration Error (PSQL)", err);
  })
    .catch((err) => {
      console.log("Error in connecting to DB", err)
    })
  })
}catch(err){

  console.log("err in db connection")
}
}


module.exports = {sequelizeInstance, psqlDbConnect} ;