import { dbConnect } from "utils/mongoose";
import Animal from "models/Animal";

dbConnect();

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const animal = await Animal.findById(id);
        if (!animal) return res.status(404).json({ msg: "Animal not found" });
        return res.status(200).json(animal);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const updatedAnimal = await Animal.findByIdAndUpdate(id, body, { new: true });
        if (!updatedAnimal) return res.status(404).json({ msg: "Animal not found" });
        return res.status(200).json(updatedAnimal);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deletedAnimal = await Animal.findByIdAndDelete(id);
        if (!deletedAnimal)
          return res.status(404).json({ msg: "Animal not found" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return res.status(400).json({ msg: "this method is not supported" });
  }
};
