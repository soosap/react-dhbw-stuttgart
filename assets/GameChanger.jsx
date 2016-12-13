import React from 'react';
import moment from 'moment';
import { Spectacle, Deck, Slide } from 'spectacle';
import { Calendar } from 'react-date-picker'

import 'spectacle/lib/themes/default/index.css'
import 'react-date-picker/index.css'

const theme = createTheme({
  primary: "#FBBD08",
  secondary: "#2C2C2C"
});

class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datepicker: moment(new Date()),
      xmas: moment('2016-12-25'),
      present: moment(new Date())
    }
  }

  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide>
            Previous slide
          </Slide>

          <Slide>
            <Heading textColor="secondary" margin="auto auto 40px auto">Gamechanger.</Heading>

            <Calendar
              dateFormat="YYYY-MM-DD"
              date={this.state.datepicker}
              onChange={(date) => {
                this.setState({ datepicker: moment(date) });
              }}
            />

            <Heading margin="40px auto auto auto">
              {moment(this.state.xmas).diff(this.state.datepicker, 'days')} days until x-mas!
            </Heading>
          </Slide>

          <Slide>
            Next slide
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
