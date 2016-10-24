// HTML
// <!DOCTYPE html>
// <html>
// <head>
// <script src="//fb.me/react-0.14.3.js"></script>
// <script src="//fb.me/react-dom-0.14.3.js"></script>
//   <meta charset="utf-8">
//   <title>JS Bin</title>
// </head>
// <body>
//   <div id="container"></div>
// </body>
// </html>

var VacancySign = React.createClass({
  render: function() {
    var vacancy_text = "";
    if (this.props.hasvacancy) {
        vacancy_text = "We vacanct bruuuuhhh";
    }
    else {
        vacancy_text = "We full playa. Sorry, not sorry.";
    }
    return <div>{vacancy_text}</div>
  }
}); // Create your component here

// Once you create your component, render your component and try both states.
ReactDOM.render(
  <VacancySign hasvacancy={true} />,
  document.getElementById('container')
);