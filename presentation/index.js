// Import React
import React from "react";

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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
import Quiz from "../components/Quiz.jsx";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  dhbw: require("../assets/dhbw.png"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  who: require("../assets/who_reacts.png"),
  react: require("../assets/react_logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "#FBBD08",
  secondary: "#2C2C2C"
});

export default class Presentation extends React.Component {
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

          <Slide>
            <Quiz />
          </Slide>

          <Slide
            transition={["fade"]}
            bgColor="secondary"
            textColor="primary"
            notes="<ul>
              <li>Talk about how easy it is to get started with React</li>
              <li>and that</li>
              <li>and that</li>
            </ul>"
          >
            <List>
              <ListItem>
                Small learning curve
              </ListItem>
              <Appear>
                <ListItem>
                  React is super agile and fast!
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  React speaks the syntax of JSX
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Large community and ecosystem
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <List>
              <ListItem>
                React components can have internal state.
                They have the markup or presentation concerns inside the components.
                No separation between view model and a template. It's all in one.
                Javascript is mixed right into the HTML.
                React allows you to hook into events or lifecycle methods.
              </ListItem>
              <ListItem>
                What the heck?
                You have put HTML into my Javascript!?! Are you crazy.
                What about separation of concerns?
                React is challenging what we have accepted as best practice for a long time.

                With React you can now extract bits of markup into variables.
              </ListItem>
              <ListItem>
                Web development 10yrs ago was much easier.
                No change of state over time.

                With React you render your initial app.
                You then listen to events and trigger event handlers as certain things occur.
                What does that really mean? It means that your initial state changes, it evolves over time.
                In a modern web application you want to listen to these events and update your UI to
                immediately reflect the new reality, i.e. the new state of the component.
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>Virtual DOM</Heading>
            <Markdown>
              {`
DOM Trashing: When we throw away the previous DOM every time we re-render the app...
* we lose the scroll position
* we lose any text we typed into forms
              `}
            </Markdown>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle
            </Heading>
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
