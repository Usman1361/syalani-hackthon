import React from 'react'

export default function Footer() {
  return (
<footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h4>About Us</h4>
        <p>This is a testing Web Application Designed for Saylani Hackathon.</p>
      </div>
      <div className="col-md-4">
        <h4>Recent Posts</h4>
        <ul>
          <li><a href="#">Event Planning Tips</a></li>
          <li><a href="#">How to Choose the Right Venue</a></li>
          <li><a href="#">Creating a Memorable Guest Experience</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h4>Contact Us</h4>
        <ul>
          <li><i className="fa fa-map-marker"></i> 123 Main Street, New York, NY 10001</li>
          <li><i className="fa fa-phone"></i> (123) 456-7890</li>
          <li><i className="fa fa-envelope"></i> info@myeventplanner.com</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="credits">
    <p>&copy; 2023 My Event Planner. All Rights Reserved.</p>
  </div>
</footer>

  )
}
