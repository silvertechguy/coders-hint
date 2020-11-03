import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db("coders-hint");
  return { db, client };
}

export { connect, ObjectId };
