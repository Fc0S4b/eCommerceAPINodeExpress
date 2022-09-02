/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

// código copiado y pegado desde la configuración de aggregations en mongo atlas desde la gui. Puedes agregar stages que son como querys para ordenar la información y luego exportar ese código, este archivo no se usará porque se configurará el aggregation de forma manual
const agg = [
  {
    $match: {
      product: new ObjectId('63119d18dd0136f0cc55a3da'),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: '$rating',
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
];

MongoClient.connect(
  '',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db('').collection('');
    coll.aggregate(agg, (cmdErr, result) => {
      assert.equal(null, cmdErr);
    });
    client.close();
  }
);
