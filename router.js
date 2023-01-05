import Router from "express";

const router = Router();

const charactersArray = ["Jotaro", "Jolyne", "Koichi", "Dio", "Oingo", "Boingo", "Avdol", "Bucciarati", "Giorno"];

router.get("/", (req, res) => {
	res.status(200).send({
		message: "Here is all the characters",
		characters: charactersArray,
	});
});

router.get("/:id", (req, res) => {
	const id = Number(req.params.id);

	res.status(200).send({
		character: charactersArray[id] || "Character not found",
	});
});

router.post("/", (req, res) => {
	const character = req.body.character;
	charactersArray.push(character);

	res.status(201).send({
		message: "character added",
	});
});

router.delete("/:id", (req, res) => {
	const id = Number(req.params.id);

	if (id < charactersArray.length) {
		charactersArray.splice(id, 1);

		res.status(204).send({
			message: `character ${id} deleted`,
		});
	}

	res.status(404).send({
		message: `Error: character ${id} doesnt exist`,
	});
});

export default router;
