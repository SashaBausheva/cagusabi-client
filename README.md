# Connected Sites
- Back-End Repo: https://github.com/SashaBausheva/cagusabi-api
- Application: https://SashaBausheva.github.io/cagusabi-client
- Heroku Site: https://damp-meadow-38264.herokuapp.com

# Technologies Used
- HTML
- CSS/SASS
- JavaScript and JQuery
- Handlebars
- Bootstrap
- AJAX
- JSON
- cURL

### About the Front-End
  The front-end of this website is a single page application (SPA) that presents the user with a welcome page before sign-up and log-in, and upon successful log-in, presents them with the database of all photos, theirs and other users, as well as the ability to view full sizes of the photos, add more photos, change their password, and log out. The photos displayed are pulled in from a handlebar, which structures each entry into a section. These entries are structured so the current user can see an "Edit" and "Delete"" button only on their own entries. Upon any successful add, delete, or edit, the content is pulled in again, so the user can immediately see their updates in the database.

# Development and Challenges
  This projects is a new and improved version of a former team project. You can find the original project [here](https://github.com/cagusabi/cagusabi-client). The original project was made in 3 days.

  This application originated as a team assignment in which a group of General Assembly's Software Engineering Immersive students were tasked with building an application that allows users to upload images onto a virtual file system. All users can view/download images, whereas owners can also remove and edit the images they havd submitted.

  The main difficulty we encounted was realizing we needed a strong, functioning front-end foundation to be able to test the file upload process. After having been able to CRUD the database, we then began to build the same calls but now incorporating ownership. We also hit a few road blocks implementing Handlebars, specifically when working with modals. Assigning each upload its own modal was challenging. Once we were able to finally was able to CRUD through the front end, our final goal was making sure the proper messaging appear for the users, and then working on the CSS for the site.

  Throughout this project, we were able to experience several different types of team work and team programming. Most often we utilized peer progamming, which allowed us to put two heads together, but we also utilized mob programming for difficult issues, and towards the end, we utilized working together remotely. Throughut the entire process, we stick to the scrum framework, having one standup in the morning to come up with a plan for the day, and one standup at night to go over the our progress.

# Project User Stories and Wireframes

* As an unregistered user, I would like to sign up with email and password.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to change password.
* As a signed in user, I would like to sign out.
* As a signed in user, I would like to upload an image to AWS.
* As a signed in user, I would like to update the meta-data of my image on AWS.
* As a signed in user, I would like to see the name of all images on AWS.
* As a signed in user, I would like to see the thumbnail of all images on AWS.
* As a signed in user, I would like to delete the reference of my image from the database.
* As a signed in user, I would like to see the following meta-data for any image:
    * date created/uploaded
    * date modified
    * owner (user who uploaded the image)
    * tags

  ## WireFrame
  ![img_1740](https://media.git.generalassemb.ly/user/20332/files/7a859c80-97f1-11e9-893d-9f07de86c6e7)
