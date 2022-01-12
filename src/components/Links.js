import React, {Component} from "react";


class Links extends Component {
  render(props) {
    return (

    <div>
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}};
export default Links;
