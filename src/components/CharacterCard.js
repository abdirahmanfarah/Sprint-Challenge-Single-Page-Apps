import React from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";

export default function CharacterCard(props) {
  return (
    <div key = {props.name}>
      <h1>{ props.name }</h1>
      <p> Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
      <p> Status: {props.status}</p>
    </div>
  )
}
