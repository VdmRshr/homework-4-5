import React from 'react';
import Shadow from "./Shadow/Shadow";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import CommentList from "./CommentList/CommentList";

function App() {
    return (
        <div className="App">

            {/*<Shadow >*/}
            {/*    <div style={{width: '100px', height: '100px', background: 'grey'}}></div>*/}
            {/*</Shadow>*/}

            {/*<RegistrationForm/>*/}

            <CommentList/>

        </div>
    );
}

export default App;
