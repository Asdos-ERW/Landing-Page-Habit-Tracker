import {View, Text} from 'react-native';
import CalendarComponent from './calendar';
import React, {Component} from 'react';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'See Calendar ...',
  },
];

class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = section => {
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 20,
          // borderWidth: 1,
          borderRadius: 10,
        }}>
        <Text style={{color: '#666666'}}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return <CalendarComponent />;
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Accordion
          containerStyle={{
            // backgroundColor: '#white',
            flex: 1,
            // paddingVertical: 10,
            borderRadius: 15,
            overflow: 'hidden',
            marginHorizontal: 20,
          }}
          sectionContainerStyle={{
            // backgroundColor: 'white',
            // paddingHorizontal: 20,
            borderWidth: 2,
            borderColor: '#FFBE5C',
            borderRadius: 10,
          }}
          underlayColor={'#FF844B'}
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  }
}

export default AccordionView;
