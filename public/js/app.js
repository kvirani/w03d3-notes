
$(() => {
  // Augment the behavior of the submit/create form
  $('#creatures-form').on('submit', (event) => {
    // Don't let it submit naturally. We will do it async!
    event.preventDefault();
    // console.log('SUBMITTING');
    // console.log(event);
    // const data = {
    //   name: $('#').val(),
    //   type: $('#').val(),
    //   damage: $('#').val(),
    // };
    const data = $('#creatures-form').serialize();
    console.log('data: ', data);
    // Using promises example
    // More on promises as you progress trough the course
    // But that doesn't mean that you shouldn't research them yourself!
    // The callback is moved into a later function call (then)
    // We also register another callback for the error situation
    $.post('/creatures', data)
      .then((creature) => {
        const elm = createCreatureElement(creature)
        appendCreature(elm);
      })
      .catch((err) => {
        console.log(err);
        alert('Error submitting creature. Oops!');
      });
  });

  // Demonstrating using template strings for the DOM element creation (ES6 approach)
  const createCreatureElement = function(creature) {
    const element = `
      <div class="creature">
        ${creature.name}
      </div>
    `;
    console.log(element);
    const $creatureList = $('.creatures-list');
    $creatureList.append(element);
  }

  // Domonstrating using jQuery functions to construct the DOM. This is how you're expected to do it for Tweeter first, to get comfortable with the traditional jQuery approach
  const createCreatureElement2 = function(creature) {
    const element = $('<div>')
      .addClass('creature2')
      .text(creature.name);
    // console.log(element);
    return element;
  }

  const appendCreature = function(element) {
    const $creatureList = $('.creatures-list');
    $creatureList.append(element);
  }

  $.getJSON('/creatures.json', (creatures, status, xhr) => {
    // console.log(data);
    // console.log(status);
    // console.log(xhr);
    for (let creature of creatures) {
      // console.log(creature);
      const elm = createCreatureElement2(creature);
      appendCreature(elm);
    }
  });
});

// Why use doc ready AND the jquery document ready callback?
// 1. Forces us to not have global (window-level) variables
// 2. Decouple the html from the JS and dont assume the JS will be appended to the end of the body

