# fevo-nasa-challenge

This challenge is being submitted by John McKeever to FEVO as is based on the prompt found at: https://github.com/igno/nasa-images

## How to use

To run the application, first install dependencies via
`npm install`
The run command is

```
npm start {ROUTE}
```

where route is one of:

```
//nasa/mars-photos
//hello/say-hi
```

(the second leading slash is to keep git bash from assuming that what you/I enter is a relative file path)

## Total Time

A little over 3 hours, including documentation, unit-testing, and refactoring.

## Design Notes

As the exercise specified not to use large frameworks and also use a command-line interface, I was unable to use Express, which is the standard
framework used to implement APIs in modern Javascript. As such, I had to hand-craft some standard features like request routing, resulting in less robust error-handling than I would like.

I included the HelloController and its route to indicate the flexibilty of my approach to routing, as well as demonstrate my understanding of OOP fundamentals such as inheritance and the Liskov substituation principle. Obviously I couldn't _really_ use a parent Controller type on line 9 of `Router.js`, so I simulated the factory pattern using the `_buildController` method to show my understanding of the usefulness of that pattern.

I made my controllers as simple as possible so that their only responsibility would be interpreting "requests" and delegating them to the proper services, as you can see in `NasaController.js`.

I made sure to segregate my business logic (needing ten days worth of data in a certain format) from my data-retrieval (hitting the NASA API), as can be seen in `NasaService.js` and `NasaAccessor.js`.

## Potential Improvements

I would have liked to make use of Express or a similar framework to handle routing my requests instead of having to resort to `switch` statements. This pattern is present in both `Router.js` and both controllers. In Java I would've been able to use annotations to clean up that logic, but that
option wasn't readily available to me, either.

I think that any production solution would not have chosen to use global state to store the cache in exactly the way I did, but this seemed the most direct route given my time constraint.

The two pseudo-private methods in `NasaService.js` are a little disappointing to me. I generally prefer a functional style and I had to settle for an iterative approach. I'm sure there's a more elegant way to accomplish the same tasks.

### Extensibility

I really would have liked to include the ability to supply query params to the api to allow users to select different rovers, cameras, etc. This would have been simple enough to add in (with some changes to the routing in `NasaController.js`) but I wanted to stay within the scope of the exercise and it would have made the caching somewhat more complicated.
