let animals = [
  { id: 1, name: "Lion", species: "Panthera leo" },
  { id: 2, name: "Elephant", species: "Loxodonta" },
  { id: 3, name: "Tiger", species: "Panthera tigris" },
  { id: 4, name: "Giraffe", species: "Giraffa camelopardalis" },
  { id: 5, name: "Zebra", species: "Equus quagga" },
  { id: 6, name: "Leopard", species: "Panthera pardus" },
  { id: 7, name: "Cheetah", species: "Acinonyx jubatus" },
  { id: 8, name: "Gorilla", species: "Gorilla beringei" },
  { id: 9, name: "Panda", species: "Ailuropoda melanoleuca" },
  { id: 10, name: "Kangaroo", species: "Macropus rufus" },
  { id: 11, name: "Koala", species: "Phascolarctos cinereus" },
  { id: 12, name: "Penguin", species: "Aptenodytes forsteri" },
  { id: 13, name: "Polar Bear", species: "Ursus maritimus" },
  { id: 14, name: "Wolf", species: "Canis lupus" },
  { id: 15, name: "Dolphin", species: "Delphinus delphis" },
  { id: 16, name: "Shark", species: "Carcharodon carcharias" },
  { id: 17, name: "Whale", species: "Balaenoptera musculus" },
  { id: 18, name: "Rhinoceros", species: "Rhinocerotidae" },
  { id: 19, name: "Hippopotamus", species: "Hippopotamus amphibius" },
  { id: 20, name: "Crocodile", species: "Crocodylus porosus" },
  { id: 21, name: "Ostrich", species: "Struthio camelus" },
  { id: 22, name: "Eagle", species: "Aquila chrysaetos" },
  { id: 23, name: "Parrot", species: "Psittaciformes" },
  { id: 24, name: "Chimpanzee", species: "Pan troglodytes" },
  { id: 25, name: "Flamingo", species: "Phoenicopterus roseus" },
];

export const allAnimal = (req, res) => {
  return res.status(200).json(animals);
};
export const createAnimal = (req, res) => {
  const newAnimal = {
    id: animals.length + 1,
    name: req.body.name,
    species: req.body.species,
  };
  if (!newAnimal.name || !newAnimal.species) {
    return res.status(400).json({ message: "Invalid data" });
  }
  animals.push(newAnimal);
  return res.status(201).json(newAnimal);
};
export const editAnimal = (req, res) => {
  const animalId = parseInt(req.params.id);
  const animalIndex = animals.findIndex((animal) => animal.id === animalId);

  if (animalIndex !== -1) {
    animals[animalIndex].name = req.body.name || animals[animalIndex].name;
    animals[animalIndex].species =
      req.body.species || animals[animalIndex].species;
    return res.status(200).json(animals[animalIndex]);
  } else {
    res.status(404).json({ message: "Animal not found" });
  }
};
export const deleteAnimal = (req, res) => {
  const animalId = parseInt(req.params.id);
  const animalIndex = animals.findIndex((animal) => animal.id === animalId);

  if (animalIndex === -1) {
    return res.status(404).json({ message: "Animal not found" });
  }

  animals = animals.filter((animal) => animal.id !== animalId);
  return res.status(204).json("Animal is deleted!");
};
