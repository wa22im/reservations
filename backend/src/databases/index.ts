import { ATLAS_DB_PWD,ATLAS_DB_USERNAME  } from '@config';

export const dbConnection = {
  url: `mongodb+srv://${ATLAS_DB_USERNAME}:${ATLAS_DB_PWD}@cluster0.v2qj6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  options:{ useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex:true},
};
