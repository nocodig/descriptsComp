import React, { Fragment } from 'react';
import { template, data } from './data';
import './App.css';

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <div
        className="description-comp"
      >
        {this.props.children}
      </div>
    )
  }
}

Description.Item = ({ label, children, span }) => (
  <div className={`span-${span}`}>
    <div className="label">{label}</div>
    <div className="value">
      {children}
    </div>
  </div>
)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      template,
      data,
    }
  }

  render() {
    const { template, data } = this.state;
    return (
      <Fragment>
        {
          template.map(item => (
            <Description>
              {
                item.metadataList.map(oItem => {
                  if (oItem.metadata.english === 'catalogTitle' || oItem.metadata.english === 'catalogAbstract') {
                    return (
                      <Description.Item label={oItem.metadata.chinese} span={2}>{data[oItem.metadata.english]}</Description.Item>
                    )
                  }

                  return (
                    <Description.Item label={oItem.metadata.chinese} span={1}>{data[oItem.metadata.english]}</Description.Item>
                  )
                })
              }
              <Description.Item label></Description.Item>
            </Description>
          ))
        }
      </Fragment>
    )
  }
}

export default App;
