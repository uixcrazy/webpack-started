import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import Button from '@atlaskit/button';

const appearances = [
  'default',
  'primary',
  'link',
  'subtle',
  'subtle-link',
  'warning',
  'danger',
];

const selectableAppearances = ['default', 'primary'];


export default class NgocPage extends Component {
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Ngoc Button</PageTitle>
        <React.Fragment>
          <Button>My button text</Button>
          {appearances.map(a => (
            <div key={a} style={{display: 'flex', justifyContent: 'space-around', padding: 10}}>
              <Button appearance={a}>{this.capitalize(a)}</Button>
              <Button appearance={a} isDisabled>Disabled</Button>
              {selectableAppearances.includes(a) ? (
                <Button appearance={a} isSelected>Selected</Button>
              ) : null}
            </div>
          ))
          }
        </React.Fragment>
      </ContentWrapper>
    );
  }
}
