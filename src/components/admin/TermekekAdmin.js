import React from "react";
import TermekAdmin from "./TermekAdmin";
import TablaFejlec from "./TablaFejlec";
import Table from 'react-bootstrap/Table';

function TermekekAdmin(props) {
  return (
    <Table bordered striped >
      <thead>
        <TablaFejlec termek={props.termekek[0]} />
      </thead>
      <tbody>
        {props.termekek.map((termek) => {
          return <TermekAdmin termek={termek} key={termek.id} />;
        })}
      </tbody>
      </Table>

  );
}

export default TermekekAdmin;