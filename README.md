#Welcome to Yarimar's Photo Proofing App!
Welcome, this is my freelance project design for a client that needs
an app to let clients log in, view/select photos for further editing.
Using [angular-meteor](https://github.com/Urigo/angular-meteor)
###[Live Demo](yarimarphoto.meteor.com)
Admin test user: admin pw: admin
###Design concept:
![design-basic](https://github.com/donedgardo/yarimarPhotography/blob/master/design/basic-template.png?raw=true)

###Todos:
1.Fix Reset password
2.Add css for error in forms
3.Fix Welcome in navbar to display name of user.
4.Add remove image[x] in album-edit.html/controller
5.Fix issue when changing fields of images
6.lowercase username before save in db

###Bugs:
1.Angular Material menu on logout doesnt close and disables all buttons.
I have already reached out to them they fixed waiting for atmosphere package to
update.
2.$scope.currentUser sometimes doesnt work properly on displaying name of logged
in User


