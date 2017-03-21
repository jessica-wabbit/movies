//Buisness Logic
function Patron(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.tickets = [];
}
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}
Patron.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Ticket.prototype.movieDetails = function() {
  return this.movie + ", " + this.time + ", " + this.age;
}

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
}

// movies: Logan, Hidden Figures, Arrival, Beauty and the Beast
// times: matinee 1pm (-$3); primetime 6pm (+$3); latenight 10pm (as is)
// ages: children 5 and under(*0), YA 6-17 (as is); adult 18+ (+2) ; seniors 55+(-2)

//User Interface Logic

$(document).ready(function() {
  $("#add-ticket").click(function() {
    $("#new-tickets").append('<div id="new-movies">' +
    '<div class="new-movie">' +
    '<div class="form-group">' +
    '<label for="movie">Pick a movie:</label>' +
    '<select class="form-control" id="movieTitle">' +
    '<option>Logan</option>' +
    '<option>Hidden Figures</option>' +
    '<option>Arrival</option>' +
    '<option>Beauty and the Beast</option>' +
    '</select>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="times">Pick a movie:</label>' +
    '<select class="form-control" id="movieTimes">' +
    '<option value="1pm">Matinee: 1pm</option>' +
    '<option value="6pm">Prime Time: 6pm</option>' +
    '<option value="10pm">Latenight: 10pm</option>' +
    '</select>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="age">Pick a movie:</label>' +
    '<select class="form-control" id="viewerAge">' +
    '<option value="Child">Children 5 and Under</option>' +
    '<option value="YA">Young Adult 6 - 17</option>' +
    '<option value="Adult">Adult 18+</option>' +
    '<option value="Senior">Seniors 55+</option>' +
    '</select>' +
    '</div>' +
    '</div>' +
    '</div>)');
  });

  $("form#movieSpecs").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Patron(inputtedFirstName, inputtedLastName);

    $(".new-movie").each(function() {
      var inputtedMovie = $(this).find("input#movieTitle").val();
      var inputtedTime = $(this).find("input#movieTimes").val();
      var inputtedAge = $(this).find("input#viewerAge").val();
      var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
      newPatron.tickets.push(newTicket);
    });

    $("ul#ticketInfo").append("<li><span class='info'>" + newPatron.fullName() + "</span></li>");
    $(".contact").last().click(function(resetFields) {
      $("#show-info").show();
      $("#show-info h2").text(newPatron.firstName);
      $(".first-name").text(newPatron.firstName);
      $(".last-name").text(newPatron.lastName);
      $("ul#ticketInfo").text("");
      newPatron.tickets.forEach(function(ticket) {
        $("ul#ticketInfo").append("<li>" + ticket.movieDetails() + "</li>");
      });
    });

    resetFields();

  });
});

//<p>Your total for the movie, <span class="movieName"></span> is going to be:<span class="ticketTotal"></span>.</p>
