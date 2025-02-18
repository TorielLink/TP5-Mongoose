import {getLivres, postLivre, putLivre, delLivre} from "../constrolers/ControleurLivre.js";

export default async (app, opts) => {
  app.get("/:livreId?", {}, getLivres);
  app.post("/", postLivreSchema, postLivre);
  app.put("/:livreId", putLivreSchema, putLivre);
  app.delete("/:livreId", {}, delLivre);
};

const postLivreSchema = {
  schema: {
    body: {
      type: "object",
      required: ["titre", "auteur"],
      properties: {
        titre: { type: "string" },
        auteur: {
          type: "object",
          properties: {
            nom: { type: "string" },
          },
        },
        description: { type: "string" },
        format: { type: "string" },
      },
    },
  },
};

const putLivreSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        titre: { type: "string" },
        auteur: {
          type: "object",
          properties: {
            nom: { type: "string" },
          },
        },
        description: { type: "string" },
        format: { type: "string" },
      },
    },
  },
};
