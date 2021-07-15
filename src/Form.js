import React, {useState} from 'react'

function Form(props) {
  const initialState = {
    name: '',
    job: '',
  };

  let [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const {name, value} = event.target
    setState((oldState) => ({
      ...oldState, [name]: value,
    }))
  };

  const submitForm = () => {
    props.handleSubmit(state)
    setState(initialState)
  };

  
  const {name, job} = state;

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input 
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
        />
      <label htmlFor="jon">Job</label>
      <input 
        type="text"
        name="job"
        id="job"
        value={job}
        onChange={handleChange}
        />
      <input 
        type="button"
        value="Submit"
        onClick={submitForm}
        />
    </form>
  )
};

export default Form;
