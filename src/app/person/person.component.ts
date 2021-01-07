import { Component, Input, Output, EventEmitter } from "@angular/core";

interface Person {
  firstName: string;
}

@Component({
  selector: "person-app",
  templateUrl: "./person.component.html",
})
export class PersonComponent {
  @Input() person: Person;
  @Output() changed = new EventEmitter<boolean>();
  changeName(person: Person, newValue?: string) {
    if (newValue) {
      person.firstName = newValue;
      this.changed.emit(true);
    }
  }
}
