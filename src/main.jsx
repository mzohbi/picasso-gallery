let React = require('react');
let ReactDOM = require('react-dom');
let PhotoCard = require('./components/PhotoCard.jsx');
let InfoCard = require('./components/InfoCard.jsx');
let ListBuilderCard = require('./components/ListBuilderCard.jsx');

ReactDOM.render(<PhotoCard title="Child with a Dove | 1901" source="https://www.pablopicasso.org/images/paintings/child-with-a-dove.jpg" />, document.getElementById('rpg-col1-1'));
ReactDOM.render(<PhotoCard title="Paul in a Clown Suit | 1924" source="https://www.pablopicasso.org/images/paintings/paul-in-a-clown-suit.jpg" />, document.getElementById('rpg-col1-2'));
ReactDOM.render(<PhotoCard title="Seated Woman | 1927" source="https://i.pinimg.com/originals/8f/81/0c/8f810ca0068ad135de125bca034570f6.jpg" headingColor="#b31217" />, document.getElementById('rpg-col1-3'));
ReactDOM.render(<PhotoCard title="Guernica | 1937" source="https://www.masterworksfineart.com/wp-content/uploads/2014/12/guernica_all-1.jpg" />, document.getElementById('rpg-col1-4'));
ReactDOM.render(<PhotoCard title="Painter and Model | 1928" source="https://www.pablopicasso.org/images/paintings/painter-and-model.jpg" />, document.getElementById('rpg-col1-5'));
ReactDOM.render(<InfoCard title="Pablo Picasso" secondaryTitle="1881-1973" backgroundColour="#D21018" />, document.getElementById('rpg-col2-1'));
ReactDOM.render(<ListBuilderCard title="Favourite Picasso paintings:" backgroundImage="https://upload.wikimedia.org/wikipedia/en/3/3a/Pablo_Picasso%2C_1916%2C_L%27anis_del_mono_%28Bottle_of_Anis_del_Mono%29_oil_on_canvas%2C_46_x_54.6_cm%2C_Detroit_Institute_of_Arts%2C_Michigan.jpg"/>, document.getElementById('rpg-col2-2'));
ReactDOM.render(<PhotoCard title="Still-life with Door, Guitar and Bottles | 1916" source="https://upload.wikimedia.org/wikipedia/en/e/ed/Pablo_Picasso%2C_1916%2C_Still-life_with_Door%2C_Guitar_and_Bottles%2C_oil_on_canvas%2C_152.4_%C3%97_205.7_cm%2C_Statens_Museum_for_Kunst%2C_Copenhagen.jpg" />, document.getElementById('rpg-col2-3'));
ReactDOM.render(<PhotoCard title="Joy of Life | 1946" source="https://www.pablopicasso.org/images/paintings/joie-de-vivre.jpg" />, document.getElementById('rpg-col2-4'));
ReactDOM.render(<PhotoCard title="The Kitchen | 1948" source="https://www.pablopicasso.org/images/paintings/the-kitchen.jpg" />, document.getElementById('rpg-col2-5'));
