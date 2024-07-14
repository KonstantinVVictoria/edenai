import { CircleSchema, UserSchema } from "@/api_requests/Schemas";
import { Collection, Db, MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://nafoadmin:${process.env.MONGODBPASS}@cluster0.p4h0crq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

type EdenCollections = {
  users: () => Promise<Collection<UserSchema>>;
  circles: () => Promise<Collection<CircleSchema>>;
};
const Collections: EdenCollections = {
  users: getCollection<UserSchema>("users"),
  circles: getCollection<CircleSchema>("circles"),
};

async function connectToDatabase() {
  await client.connect();
  return client.db("eden");
}
function getCollection<T>(collection_name: string) {
  return async () => {
    const db = await connectToDatabase();
    //@ts-ignore
    return db.collection<T>(collection_name);
  };
}
const MongoHandler = {
  client,
  Collections,
};

export default MongoHandler;
