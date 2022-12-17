type Diesel = {
  type: "petroleum" | "bio" | "syntetic";
};

type Gasoline = {
  type: "hybrid" | "conventional";
};

type Bus = {
  engine: Diesel;
};

type Car = {
  engine: Gasoline;
};

type Engine<T> = T extends { engine: unknown } ? T["engine"] : never;

type BusEngine = Engine<Bus>;

type CarEngine = Engine<Car>;

const bus: BusEngine = {
  type: "syntetic",
};

const car: CarEngine = {
  type: "conventional",
};



type MotobikeEngine = {
  motor: "dwusuw";
};

// const neverVehicle: Engine<MotobikeEngine> = {
//     motor: 'dwusuw'
// }

//////////////////////////////////////////

enum Priority {
  mustHave = "must_have",
  optional = "optional",
}

const backlog = {
  releases: [
    {
      name: "Sprint 1",
      epics: [
        {
          name: "Account Menagement",
          tasks: [
            { name: "Single sing on", priority: Priority.mustHave },
            { name: "Email notification", priority: Priority.optional },
          ],
        },
      ],
    },
  ],
};

type Unarray<T> = T extends Array<infer U> ? U : T

type Release = Unarray<typeof backlog['releases']>


type Unarray2<T> = T extends Array<infer U> ? U : T

type Strings = Unarray2<string[]> // string

