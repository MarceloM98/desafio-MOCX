const { ObjectId, MongoClient } = require("mongodb");

const AppError = require("../utils/AppError");
// const client = require("../database/mongo");
const isCpfValid = require("../utils/CpfValidator");
const DbConstants = require("../utils/DbConstants");

const dotenv = require("dotenv");

dotenv.config();
const uri = process.env.MONGO_URI;

class RegisterController {
  async create(request, response) {
    const client = new MongoClient(uri);
    const db = client.db(DbConstants.DB_NAME);
    const { name, cpf, birthDate } = request.body;

    try {
      await client.connect();

      const validCpf = isCpfValid(cpf);
      if (!validCpf) {
        response.status(400).json(new AppError("Cpf inválido.", 400));
        return;
      }

      const user = await db
        .collection(DbConstants.DB_COLLECTION)
        .findOne({ cpf: cpf });
      if (user) {
        response.status(400).json(new AppError("Cpf já existe.", 400));
        return;
      }

      await db
        .collection(DbConstants.DB_COLLECTION)
        .insertOne({ name: name, cpf: cpf, birthDate: birthDate });

      response.status(201).json({});
    } finally {
      client.close();
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const client = new MongoClient(uri);
    const db = client.db(DbConstants.DB_NAME);

    try {
      await client.connect();

      await db
        .collection(DbConstants.DB_COLLECTION)
        .updateOne({ _id: new ObjectId(id) }, { $set: request.body });

      response.json({}).status(200);
    } finally {
      client.close();
    }
  }

  async delete(request, response) {
    const { id } = request.query;
    const client = new MongoClient(uri);
    const db = client.db(DbConstants.DB_NAME);

    try {
      await client.connect();

      await db
        .collection(DbConstants.DB_COLLECTION)
        .deleteOne({ _id: new ObjectId(id) });

      response.json({}).status(200);
    } finally {
      client.close();
    }
  }

  async getAll(request, response) {
    const client = new MongoClient(uri);
    const db = client.db(DbConstants.DB_NAME);

    try {
      await client.connect();

      const list = await db
        .collection(DbConstants.DB_COLLECTION)
        .find()
        .map((doc) => {
          return {
            id: doc._id,
            name: doc.name,
            birthDate: doc.birthDate,
            cpf: doc.cpf,
          };
        })
        .toArray();

      response.status(201).json(list);
    } finally {
      client.close();
    }
  }
}

module.exports = RegisterController;
