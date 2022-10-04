import React from "react";
import "./NeuronSettings.scss";

export const NeuronSettings = () => {
  return (
    <div>
      <div className="settingsTitle">
        <h1> SETTINGS </h1>
      </div>

      <div className="form_container">
        <label htmlFor="pseudo"> Pseudo: </label>
        <input id="pseudo" type="text" />

        <label htmlFor="new pseudo"> New Pseudo </label>
        <input id="new pseudo" type="text" />

        <label htmlFor="Password"> Password: </label>
        <input id="Password" type="text" />

        <label htmlFor="New Password"> New Password </label>
        <input id="New Password" type="text" />

        <label htmlFor="Mail@adress"> Mail@adress: </label>
        <input id="Mail@adress" type="email" />

        <label htmlFor="New Mail@adress"> New Mail@adress: </label>
        <input id="New Mail@adress" type="email" />

        <label htmlFor="Linkedin"> Linkedin: </label>
        <input id="Linkedin" type="text:" />

        <label htmlFor="Github"> Github: </label>
        <input id="Github" type="text" />

        <label htmlFor="Descript">Description:</label>
        <textarea id="Descript" name="Description" rows="4" cols="50" />

        <button type="submit">Send</button>
      </div>
    </div>
  );
};

// import React from "react";
// import "./NeuronSettings.scss";

// class Home extends React.Component {

//     constructor (props)    {
//         super(props)
//         this.state = {
//             Pseudo: '',
//             NewPseudo: '',
//         //     Password: "",
//         //     New password: "",
//         //     Mail@adress: "",
//         //     New Mail@adress: "",
//         //     Linkedin: "",
//         //     Github: "",
//         //     Description: ""
//         // }

//         this.handleChange = this.handleChange.bind(this)
//     }

// handleChange (e) {
//     this.setState({
//         checked: e.tagret.checked

//     })

// }

// render () {
//     return <div>
//         <div>
//             <label htmlfor="Pseudo">Pseudonyme</label>
//             <input type="text" value={this.state.nom} onChange={this.handleChange} id="Pseudo" name="Pseudo" />

//         </div>
//     </div>
// }
