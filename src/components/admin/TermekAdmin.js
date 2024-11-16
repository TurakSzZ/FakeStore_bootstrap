import React from "react";
import "./admin.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export function TermekAdmin(props) {
  function torol() {
    console.log(torol);
  }
  function modosit() {
    console.log(modosit);
  }
  return (
    
    <tr>
      {Object.entries(props.termek).map(([kulcs, value]) => {
        if (kulcs === "image") {
          return (
            <td key={kulcs}>
              <img className="admintermekkep" src={value} alt="" />
            </td>
          );
        } else if (kulcs !== "rating") {
          return <td key={kulcs}> {value}</td>;
        } else if (kulcs === "price") {
          return <td key={kulcs}> {value}</td>;
        } else {
          return null;
        }
      })}

      <td>
        <Button variant="primary"
          onClick={() => {
            torol(props.termek.id);
          }}
        >
          ✘
        </Button>
      </td>
      <td>
        <Button variant="outline-primary"
          onClick={() => {
            modosit(props.termek.id);
          }}
        >
          ✎
        </Button>
      </td>
    </tr>
    
  );
}

export default TermekAdmin;