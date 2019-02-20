# W03D3 - AJAX Intro by KV

## AJAX Intro & Backstory

What is AJAX?

AJAX stands for Async JavaScript And XML

The name is confusing due to its age and being attached to XML. Because today we generally like to use a simpler format especially in the web ecosystem.

We'll continue using jQuery for making AJAX requests. Because jQuery is constrainted by the browser API, it uses the built in `XMLHttpRequest` object. Again, confusing name. But wtv.

There is another more modern approach to doing async requests and instead of using the XHR object, modern code tends to use the `fetch` function. There are also other libraries aside from jQuery that have become more popular for making async HTTP requests. That said, jQuery is still the most widely used and therefore the one we will use to perform AJAX calls.

## Intro Promises

I quickly showed and talked about the promise-based approach to registered our success and failure callbacks within an ajax (specifically the `$.post`) call.

We will go deeper into promises as the course progress, but you can start to use this pattern without being able to fully explain promises. We promise to spend more time formally introducing promises ;)

This [Introduction to Promises](https://developers.google.com/web/fundamentals/primers/promises) from Google may be a good place to read about them, particularly in the context of using them with AJAX. Bookmark it for later as it should not be needed for implement AJAX with promises, IMHO.

## Main Difference between SPA and MPA

SPA: Single Page App (a la tweeter)
MPA: Multi Page App (a la tiny app). _Note: This abbrev is not commonly used ;)_

The main differences here are that:

1. No longer relying on page-reloads (redirects, etc) to refresh the data.
2. We are no longer relying on default browser behavior for form submissions to submit the data, since we want it to happen async using AJAX.

In doing so, we are having to write more (client-side JS) code that **keeps our UI in sync with the data on the server**.

One benefit/concequence of this is that the server is no longer responsible for "user flow". It simply responds with data (using JSON). It's responsibility now becomes **dealing with data**.

## Code

We implemented the `C` and `R` of CRUD for "Fictional Creatures"

Workflow for POST request with our FORM:

1. Load page
2. Make an ajax GET /creatures
3. Convert the array of objects to elements, appending them to the DOM as we go
4. User submits form with data
5. jQuery intercepts the form submission with our callback (cb)
5. cb performs an asyc/AJAX request with POST and a payload (data: { name: KV })
6. Upon success, jquery calls our success cb
7. In our success cb, knowing that the save was successful, we modify the UI to look "correct"

Another flow, one which you will implement for Tweeter is:

1. Load page
2. Make an ajax GET /creatures
3. Convert the array of objects to elements, appending them to the DOM as we go
4. User submits form with data
5. jQuery intercepts the form submission with our callback (cb)
5. cb performs an asyc/AJAX request with POST and a payload (data: { success: true })
6. Upon success, jquery calls our success cb
7. In our success cb, we retrigger the full load of all data and recreate all the creature elements (clear the list first and then append each one). We can use existing functions to do this.

**Question for you:**

> What are the pros and cons of these 2 approaches for handling the POST and "refreshing" the UI? If you're not sure, please discuss with your peers and mentors.

