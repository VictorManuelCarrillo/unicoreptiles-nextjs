// layout component
import Layout from "components/admin/06-layout/Layout";

// components
//  inputs
import TextInpt from "components/user/01-inputs/input/TextInpt";
import NumberInpt from "components/user/01-inputs/input/NumberInpt";
// select
import SelectInpt from "components/user/01-inputs/select/SelectInpt"
// buttons
import PrimaryBtn from "components/user/01-inputs/button/PrimaryBtn";
// switch
import PrimarySwitch from 'components/user/01-inputs/switch/PrimarySwitch'

// mui components
import { Container } from "@mui/material";

// react components
import { useState } from "react";

export default function AddAnimal() {
  const [newAnimal, setNewAnimal] = useState({
    title: "",
    description: "",
    morph: "",
    price: 0,
    category: "",
    age: "",
    gender: "",
  });
  //for select
  const [selectValue, setSelectValue] = useState()


  const [errors, setErrors] = useState({});


  const validate = () => {
    const errors = {};

    if (!newAnimal.title) errors.title = "title is required";

    if (!newAnimal.description) errors.description = "description is required";

    if (!newAnimal.morph) errors.morph = "description is required";

    if (!newAnimal.price) errors.price = "description is required";

    if (!newAnimal.category) errors.category = "description is required";

    if (!newAnimal.age) errors.age = "description is required";

    if (!newAnimal.gender) errors.gender = "description is required";


    return errors;
  };

  // send
  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = validate();

    if (Object.keys(errors).length) return setErrors(errors);

    await createAnimal();
  };

  // create
  const createAnimal = async () => {
    try {
      await fetch("http://localhost:3000/api/animals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAnimal),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // for select

  const handleChange = (e) => {

    setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value});}

  return (
    <Layout>
      <Container maxWidth='lg'>
        <form  onSubmit={handleSubmit}>

          <PrimarySwitch onChange={handleChange}/>

          <TextInpt name='title' id='title' required={true} label='titulo' helperText='agrega un titulo' rows={1} onChange={handleChange} />

          <TextInpt
            name='description'
            id='description'
            required={true}
            label='descripción'
            helperText='agrega una descripción'
            rows={4}
            onChange={handleChange}
          />

          <TextInpt
            name='morph'
            id='morph'
            required={true}
            label='fases'
            helperText='escribe las fases del ejemplar'
            onChange={handleChange}
          />

          <NumberInpt
            name='price'
            required={true}
            label='precio'
            helperText='escribe las fases del ejemplar'
            onChange={handleChange}
          />

          <SelectInpt
            name='category'
            label='category'
            menuItems={[{text: 'serpientes'}, {text: 'tlacuaches'}]}
            value={selectValue}
            onChange={handleChange}/>

            {/* age */}
            <SelectInpt
              name='age'
              label='age'
              menuItems={[{text: 'cria'}, {text: 'juvenil'}]}
              value={selectValue}
              onChange={handleChange}/>

            {/* gender */}
            <SelectInpt
              name='gender'
              label='gender'
              menuItems={[{text: 'macho'}, {text: 'hembra'}]}
              value={selectValue}
              onChange={handleChange}/>

          <PrimaryBtn typeBtn='formBtn' text='agregar animal' color='warning' onClick={handleSubmit} />
        </form>
      </Container>
    </Layout>
  );
}
