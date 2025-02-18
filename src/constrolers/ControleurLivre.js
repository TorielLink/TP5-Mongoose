import { Livre } from "../databases/Livre.js";

function toLivreDTO(livre) {
  return {
    titre: livre.titre,
    auteur: livre.auteur,
    description: livre.description,
    format: livre.format,
  };
}

export async function getLivres(req, res) {
  const { livreId } = req.params;

  if (!livreId) {
    return await Livre.find();
  }
  const livre = await Livre.findById(livreId);
  if (!livre) {
    return res.send({ message: `Livre ${livreId} not found` });
  }
  return toLivreDTO(livre);
}

export async function postLivre(req, res) {
  const {
    titre,
    auteur,
    description = undefined,
    format = undefined,
  } = req.body;

  const livre = await new Livre({
    titre,
    auteur,
    description,
    format,
  }).save();

  res.send(toLivreDTO(livre));
}

export async function putLivre(req, res) {
  const { livreId } = req.params;
  const newLivreData = req.body;

  const newLivre = await Livre.findByIdAndUpdate(livreId, newLivreData, {
    new: true,
    runValidators: true,
  });

  if (!newLivre) {
    res.code(404).send({ message: `Livre ${livreId} not found` });
    return;
  }
  res.send(toLivreDTO(newLivre));
}

export async function delLivre(req, res) {
  const { livreId } = req.params;
  const result = await Livre.deleteOne({ _id: livreId });
  if (result.deletedCount === 1 ) {
    res.send({ message: "Livre supprimé" });
    return;
  }
  res.code(404).send({ message: `Livre ${livreId} not found` });
  return;
}
