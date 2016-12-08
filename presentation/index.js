// Import React
import React from "react";
import moment from "moment";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
import { Calendar } from 'react-date-picker'
import 'react-date-picker/index.css'

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  relay: require("../assets/relay.png"),
  graphql: require("../assets/graphql.png"),
  react_native: require("../assets/react_native.png"),
  redux: require("../assets/redux.png"),
  components_real_world: require("../assets/components_real_world.png"),
  components_real_world_before: require("../assets/components_real_world_before.png"),
  dhbw: require("../assets/dhbw.png"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  learn_once: require("../assets/learn_once.png"),
  getting_started: require("../assets/getting_started.png"),
  markdown: require("../assets/markdown.png"),
  who: require("../assets/who_reacts.png"),
  react: require("../assets/react_logo.png"),
  react_stuttgart: require("../assets/reactstuttgart.png"),
  soosap: require("../assets/soosap.png")
};

preloader(images);

const theme = createTheme({
  primary: "#FBBD08",
  secondary: "#2C2C2C"
});

export default class Presentation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			datepicker: moment(new Date()),
			xmas: moment('2016-12-25'),
			present: moment(new Date())
		};
	}


	// onChangeTime = (dateString, { dateMoment, timestamp }) => {
	// 	console.log(dateString);
	// 	this.setState({ date: dateString });
	// };

  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={4} fit caps lineHeight={1} textColor="secondary">The Power of</Heading>
            <Image src={images.react.replace("/", "")} margin="40px auto 40px -10%" width="120%" />
	          <Image src={images.dhbw.replace("/", "")} width="100%" />
          </Slide>

					<Slide transition={["slide"]} bgImage={images.who.replace("/", "")} />

					<Slide textColor="primary" bgColor="secondary" notes="<ul>
              <li>Aus USER Sicht! Wieso brauchen wir überhaupt ein JS framework</li>
            </ul>">
						<Heading fit>The Evolution of the Web</Heading>
						<List>
							<Appear>
								<ListItem>
									Moving from static to dynamic content
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									Look and feel of native desktop applications
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									 User interaction: instant feedback, async data
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									Page refresh: loss of scroll position, user input, etc.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									Managing state = Javascript Framework!!!
								</ListItem>
							</Appear>
						</List>
					</Slide>

					<Slide transition={["zoom"]} textColor="secondary" bgColor="primary">
						<Heading textColor="secondary" fit>React to the Rescue</Heading>
						<List>

							<Appear>
								<ListItem>
									Hardcore component based thinking!
								</ListItem>
							</Appear>

							<Appear>
								<ListItem>
									Uses JSX Syntax - Look and feel of plain old HTML!
								</ListItem>
							</Appear>

							<Appear>
								<ListItem>
									Learn once, make use of it everywhere!
									<Image src={images.learn_once.replace("/", "")} margin="20px auto 0 100px" width="50%" />
								</ListItem>
							</Appear>

						</List>
					</Slide>

	        <Slide transition={["slide"]} bgImage={images.components_real_world_before.replace("/", "")} bgDarken={0.1} />

	        <Slide bgImage={images.components_real_world.replace("/", "")} bgDarken={0.1}>
		        <Appear fid="1">
			        <Heading size={1} caps fit textColor="secondary">
				        Component Thinking
			        </Heading>
		        </Appear>
		        <Appear fid="2">
			        <Heading size={1} caps fit textColor="tertiary">
				        Reusability
			        </Heading>
		        </Appear>
		        <Appear fid="3">
			        <Heading size={1} caps fit textColor="primary">
				        Modularity
			        </Heading>
		        </Appear>
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

	        <Slide transition={["slide"]} bgColor="secondary" notes="Brag how you can use React to build apps, presentations, websites, etc.">
		        <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
		        <Heading size={2} caps fit textColor="primary" textFont="primary">
			        Wait what?
		        </Heading>
	        </Slide>

	        <CodeSlide
		        transition={[]}
		        lang="js"
		        code={require("raw!../assets/GameChanger.jsx")}
		        ranges={[
              { loc: [0, 100], title: "Anatomy of a React component" },
              { loc: [2, 3], title: "Presentation.jsx - A spectacle production" },
              { loc: [3, 4], note: "Let's import the game changer..." },
              { loc: [5, 7], note: "...and some default styles!" },
              { loc: [13, 100] },
              { loc: [24, 25], note: "Every component has a render() method" },
              { loc: [26, 36], note: "...which returns HTML-like JSX" },
              { loc: [35, 42], note: "Do you recognize the Gamechanger?" },
            ]}/>



	        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul>
              <li>Let's not forget spectacle and the tons on community-lead libraries</li>
            </ul>">
		        <Heading caps fit>Massive ecosystem</Heading>
		        <Layout>
			        <Fill>
				        <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
					        react-native
				        </Heading>
				        <Image src={images.react_native.replace("/", "")} width="30%" />
			        </Fill>
			        <Fill>
				        <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
					        Redux
				        </Heading>
				        <Image src={images.redux.replace("/", "")} width="30%" />
			        </Fill>
		        </Layout>
		        <Layout>
			        <Fill>
				        <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
					        GraphQL
				        </Heading>
				        <Image src={images.graphql.replace("/", "")} width="30%" />
			        </Fill>
			        <Fill>
				        <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
					        Relay
				        </Heading>
				        <Image src={images.relay.replace("/", "")} width="30%" />
			        </Fill>
		        </Layout>
	        </Slide>

	        <Slide transition={["slide"]} bgColor="black">
		        <BlockQuote>
			        <Quote>When the Android Ads Manager was ready to ship, we realized that about 85 percent of the code was shared between the two apps. [react-native]</Quote>
			        <Cite>Facebook Engineering</Cite>
			        <Link href="https://code.facebook.com/posts/597378980427792/react-native-a-year-in-review/">Source</Link>
		        </BlockQuote>
	        </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">
              Getting Started
            </Heading>
	          <Image src={images.getting_started.replace("/", "")} width="100%" />
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="secondary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">#ReactStuttgart</Heading>
	          <Link href="https://www.meetup.com/ReactStuttgart/"><Image src={images.react_stuttgart} width="20%" margin="auto 30px auto auto"/></Link>
	          <Link href="https://soosap.me" textColor="primary"><Image src={images.soosap} width="20%" /></Link>
	          <Heading size={5} textColor="white" margin="30px auto auto auto">https://soosap.me/react-dhbw-stuttgart</Heading>
	          <Heading size={5} textColor="primary">@soosap</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
