import React, { Component, MouseEvent } from 'react';
import { Data } from './schemaChildren/Data';
import { Results } from './schemaChildren/Results';
import Query from './schemaChildren/Query';

const { ipcRenderer } = window.require('electron');

type ClickEvent = React.MouseEvent<HTMLElement>;

type SchemaContainerProps = {
  queries: {
    queryString: string;
    queryData: object[];
    queryStatistics: any;
    querySchema: string;
  }[];
  currentSchema: string;
};

export class SchemaContainer extends Component<SchemaContainerProps> {
  constructor(props: SchemaContainerProps) {
    super(props);
  }

  render() {
    return (
      <div id="main-right">
        <div id="schema-tabs">
          {/* <div>Schema Tabs Here</div> */}
        </div>

        <div id="test-panels">
          <div id="schema-left">
            <Query currentSchema={this.props.currentSchema} />
            <Data />
          </div>
          <div id="schema-right">
            <Results queries={this.props.queries} />
          </div>
        </div>
      </div>
    );
  }
}
