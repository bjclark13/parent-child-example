import { Component } from "@angular/core";
interface Person {
  firstName: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "parent-child-example";

  person: Person = {
    firstName: "BJ",
  };
}
