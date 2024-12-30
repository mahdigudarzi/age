function calculateAge() {
  var birthdate = new Date('1995-10-07T03:00:00'); // Replace with your birthdate in the format 'YYYY-MM-DDTHH:mm:ss'
  var now = new Date();

  var years = now.getFullYear() - birthdate.getFullYear();
  var months = now.getMonth() - birthdate.getMonth();
  var days = now.getDate() - birthdate.getDate();
  var hours = now.getHours() - birthdate.getHours();
  var minutes = now.getMinutes() - birthdate.getMinutes();
  var seconds = now.getSeconds() - birthdate.getSeconds();

  // Adjust for negative values
  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }
  if (minutes < 0) {
    hours--;
    minutes += 60;
  }
  if (hours < 0) {
    days--;
    hours += 24;
  }
  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  var ageString = '';

  if (years > 0) {
    ageString += years + (years === 1 ? ' year' : ' years');
  }
  if (months > 0) {
    ageString += (ageString.length > 0 ? ', ' : '') + months + (months === 1 ? ' month' : ' months');
  }
  if (days > 0) {
    ageString += (ageString.length > 0 ? ', ' : '') + days + (days === 1 ? ' day' : ' days');
  }
  if (hours > 0) {
    ageString += (ageString.length > 0 ? ', ' : '') + hours + (hours === 1 ? ' hour' : ' hours');
  }
  if (minutes > 0) {
    ageString += (ageString.length > 0 ? ', ' : '') + minutes + (minutes === 1 ? ' minute' : ' minutes');
  }
  if (seconds > 0) {
    ageString += (ageString.length > 0 ? ', ' : '') + seconds + (seconds === 1 ? ' second' : ' seconds');
  }

  document.getElementById('age').textContent = ageString;

  requestAnimationFrame(calculateAge); // Call the function again on the next animation frame
}

document.addEventListener('DOMContentLoaded', function () {
  calculateAge(); // Initial call to start the continuous update
});
