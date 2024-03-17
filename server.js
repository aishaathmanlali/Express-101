import express, { request } from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/contact", (request, response) => {
  response.send("This is my contact (0778978927)");
});

app.get("/about", (request, response) => {
  response.send(
    "My name is Aisha. I am a trainee at Code Your Future. I enjoy my time spending coding and learning new things."
  );
});

app.get("/hobbies", (request, response) => {
  response.send("I love travelling, reading and learning new languages.");
});

app.get("/nationality", (request, response) => {
  response.send("I am from Malindi, Kenya");
});

app.get("/codeyourfuture", (request, response) => {
  response.send("This is where I take my software development course. There are many trainess and volunteers.");
});

app.get("/node", (request, response) => {
  response.send("Learning node is fun :)");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
