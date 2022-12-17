type Trip = 
| {
    origin: {
        uuid: string;
        city: string;
        state: string;
    },   
} | {
    originUuid: string;
}

type TripWithOriginRef = Extract<Trip, {originUuid: string} >

type TripWithOriginWhole = Extract<Trip, {origin: {uuid: string}} >

const tripOriginRef: TripWithOriginRef = { originUuid: '123' }

const tripOriginWhole: TripWithOriginWhole = {
    origin: {
        uuid: '123456',
        city: 'Denver',
        state: 'Colorado'
    }
}



// console.log(tripOriginWhole)
// console.log(tripOriginRef)

const isRef = (trip: Trip): trip is TripWithOriginRef => {
    return "originUuid" in trip;
}


/*
This function appears to be checking whether the trip argument is a TripWithOriginRef 
object by checking if it has an originUuid property. If the trip object has an originUuid property, 
the function returns true. Otherwise, it returns false.

The type assertion trip is TripWithOriginRef in the return statement 
allows the function to return a boolean value while also indicating that if the 
function returns true, the trip argument is of type TripWithOriginRef. 
This can be helpful for type checking and type inference in your code.
*/


console.log(isRef(tripOriginWhole))
console.log(isRef(tripOriginRef))