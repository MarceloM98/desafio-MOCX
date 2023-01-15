const { ObjectId } = require("mongodb");

const AppError = require("../utils/AppError");
const client = require("../database/mongo");
const isCpfValid = require("../utils/CpfValidator");
const DbConstants = require("../utils/DbConstants");

class RegisterController {
  async create(request, response) {
    const db = client.db(DbConstants.DB_NAME);
    const { name, cpf, birthDate } = request.body;

    try {
      await client.connect();

      const validCpf = isCpfValid(cpf);
      if (!validCpf) {
        response.send(new AppError("Cpf inválido.", 400));
        return;
      }

      const user = await db
        .collection(DbConstants.DB_COLLECTION)
        .findOne({ cpf: cpf });
      if (user) {
        response.send(new AppError("Cpf já existe.", 400));
        return;
      }

      await db
        .collection(DbConstants.DB_COLLECTION)
        .insertOne({ name: name, cpf: cpf, birthDate: birthDate });

      response.json({}).status(201).send();
    } finally {
      client.close();
    }
  }

  async update(request, response) {
    const { id } = request.query;
    const db = client.db(DbConstants.DB_NAME);

    try {
      await client.connect();

      await db
        .collection(DbConstants.DB_COLLECTION)
        .updateOne({ _id: new ObjectId(id) }, { $set: request.body });

      response.status(200).json({}).send();
    } finally {
      client.close();
    }
  }

  async delete(request, response) {
    const { id } = request.query;
    const db = client.db(DbConstants.DB_NAME);

    try {
      await client.connect();

      await db
        .collection(DbConstants.DB_COLLECTION)
        .deleteOne({ _id: new ObjectId(id) });

      response.status(200).json({}).send();
    } finally {
      client.close();
    }
  }

  async index(request, response) {
    const db = client.db(DbConstants.DB_NAME);

    try {
      await client.connect();

      const list = await db
        .collection(DbConstants.DB_COLLECTION)
        .find()
        .map((doc) => {
          return { id: doc._id, name: doc.name, birthDate: doc.birthDate };
        })
        .toArray();

      response.status(200).json(list).send();
    } finally {
      client.close();
    }
  }
}

module.exports = RegisterController;
