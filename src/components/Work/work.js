import React, { Component } from "react";
import {
  WorkSection,
  WorkTitle,
  Span,
  Part,
  Icon,
  PartTitle,
  Line,
  PartDesc
} from "./style";
import axios from "axios";

class Work extends Component {
  state = {
    works: []
  };

  componentDidMount() {
    axios.get("js/data.json").then(res => {
      this.setState({ works: res.data.works });
    });
  }
  render() {
    const { works } = this.state;
    const worksList = works.map(workItem => {
      return (
        <Part first={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDesc>{workItem.body}</PartDesc>
        </Part>
      );
    });
    return (
      <WorkSection>
        <div class="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>

          {worksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
