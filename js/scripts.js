function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

// movies: Logan, Hidden Figures, Arrival, Beauty and the Beast
// times: matinee 1pm (-$3); primetime 6pm (+$3); latenight 10pm (as is)
// ages: children 5 and under(*0), YA 6-17 (as is); adult 18+ (+2) ; seniors 55+(-2)
