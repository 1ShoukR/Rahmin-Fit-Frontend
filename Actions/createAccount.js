import axios from "axios"


export const sendCreateAccountData = (e) => {
    e.preventDefault()
    console.log(e.target.form[0].value)
    let input = {
        firstName: e.target.form[0].value,
        lastName: e.target.form[1].value,
        email: e.target.form[2].value,
        password: e.target.form[3].value,
    }
    axios.post('http://localhost:3000/api/account/create-account', input)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
} 