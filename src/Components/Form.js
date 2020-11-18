import React, {useState} from 'react'
import './Form.css'

const Form = () => {
    const user = {
        movieName: "",
        urlMovie:"",
        msg:""
    }

    const [users, setUsers] = useState(user)
    const {movieName, urlMovie, msg} = users

    const handleChange = (e) => {
        setUsers({...users, [e.target.name]: e.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        };
        const url = "https://post-a-form.herokuapp.com/api/movies";
        fetch(url, config)
            .then((res) => res.json())
            .then((res) => {
              if (res.error) {
                alert(res.error);
              } else {
                alert(`A message will be displayed when the movie #${res} has been successfully added !`);
              }
            })
            .catch((e) => {
              console.error(e);
              alert("A message will be displayed when the movie has been successfully added.");
            });
    }

    return (
        <div className="FormEmployee">
            <form onSubmit={submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="movieName">Your favorite movie</label>
              <input
                type="text"
                name="movieName"
                value={movieName}
                onChange={handleChange}
              />
            </div>
            <div className="form-data">
              <label htmlFor="urlMovie">Url movie</label>
              <input
                type="text"
                name="urlMovie"
                value={urlMovie}
                onChange={handleChange}
              />
            </div>
            <div className="form-data">
              <label htmlFor="msg">Message</label>
              <textarea
                type="text"
                name="msg"
                value={msg}
                onChange={handleChange}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
        <div>
        </div>
        </div>
    )
}

export default Form
