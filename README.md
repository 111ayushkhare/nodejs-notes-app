# Node.Js Notes-App

A simple notes app made in node.js which provides functionality of adding, updating, removing, reading notes each having a title and a body.
Currently this node app operates from command line. All the notes with title and body has to be provided as command line arguemnts.<br />

## Two of the npm packages are used in this project :- 
* chalk (version: ^4.1.1) -> this is used for colouring the console output
* yargs (version: ^17.0.1) -> this is used to parse the command line arguements

## Following are the commands to operate on this node app :-

* To add a note
```sh
node app.js add --title="hello" --body="sample note"
```

* To update a note
```sh
node app.js update --title="hello" --body="sample note updated"
```

* To read a note
```sh
node app.js read --title="hello"
```

* To list all the notes
```sh
node app.js list
```

* To remove a single note
```sh
node app.js remove --title="hello"
```

* To remove all the notes
```sh
node app.js removeall
```