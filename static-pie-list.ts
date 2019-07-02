import { PieModel } from "./models/pie-model";

const staticPies = new Array<PieModel>();
staticPies.push(
    {
        name: 'A Blueberry Pie',
        rating: 4.8,
        location: {
            accuracy: 0,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude: 40.7191154,
            longitude: -73.9908405,
            speed: null
        } as Coordinates,
        crustType: 'crumb',
        friends: ['rhubarb'],
        servedAtName: 'Petee\'s Pie Company',
        description: 'This blueberry pie has a hint of rhubarb and a thick crumb crust.  It is offered a la mode for an extra 50 cents.',
        pairsWith: 'coffee'
    } as PieModel
);

staticPies.push(
    {
        name: 'A Blueberry Pie',
        rating: 4.5,
        location: {
            accuracy: 0,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude: 40.7594916,
            longitude: -73.9933151,
            speed: null
        } as Coordinates,
        crustType: 'savory',
        friends: [],
        servedAtName: 'Little Pie Company',
        description: 'A traditional blueberry pie with a savory crust.',
        pairsWith: 'milk'
    } as PieModel
);

staticPies.push(
    {
        name: 'A Blueberry Pie',
        rating: 4.6,
        location: {
            accuracy: 0,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude: 40.7775092,
            longitude: -73.9517691,
            speed: null
        } as Coordinates,
        crustType: 'sweet',
        friends: [],
        servedAtName: 'Two Little Red Hens',
        description: 'A truly delightful pie.  The slight tang of the blueberries is offset by the sweet flaky crust.',
        pairsWith: 'coffee'
    } as PieModel
);

export default staticPies;