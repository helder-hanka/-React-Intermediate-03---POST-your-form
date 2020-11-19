import React, {useState} from 'react'
import './Form.css'

const Form = () => {
    const user = {
        title: "",
        poster: "",
        comment: ""
    }

    const [users, setUsers] = useState(user)
    const {title, poster, comment} = users

    const onChange = (e) => {
        setUsers({...users, [e.target.name]: e.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(title, poster, comment)
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        };
        const url = "https://post-a-form.herokuapp.com/api/movies/";
        fetch(url, config)
            .then((res) => res.json())
            .then((res) => {
              if (res.error) {
                alert(res.error);
              } else {
                alert(`The movie #${title} has been successfully added !`);
              }
            })
            .catch((e) => {
              console.error(e);
              alert("There was an error when adding the movie.");
            });
    }

    return (
        <div className="FormEmployee">
            <form onSubmit={submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="title">Your favorite movie</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={onChange}
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Url movie</label>
              <input
                type="text"
                id="poster"
                name="poster"
                value={poster}
                onChange={onChange}
              />
            </div>
            <div className="form-data">
              <label htmlFor="msg">Message</label>
              <textarea
                type="text"
                rows="5" cols="33"
                id="comment"
                name="comment"
                value={comment}
                onChange={onChange}
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
