import React, { Fragment } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import {Card} from "../../context"
/* import BankForm from "../BankForm/BankForm"; */

export default function Balance() {
    const auth = React.useContext(AuthContext);
    let user = auth.users.filter(user => user.isLogedU === true)
    let index;
    let balance;
    if (user.length > 0) {
      index = auth.users.indexOf(user[0])
      balance = auth.users[index].balance
    }
    return (
      <Fragment>
        <h2> Welcome { auth.users[index].name}</h2>
          <Card
            bgcolor={'lightblue'}
            label="Balance"
            txtcolor='black'
            header={'Your Balance is:'}
            body={
              <h3>
                ${balance}
              </h3>
            }
          />
        
      </Fragment>
    )
}