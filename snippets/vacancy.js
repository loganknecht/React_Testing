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