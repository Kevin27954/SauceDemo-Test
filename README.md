PlayWright QA Testing Journey (My thoughts and understanding)

> Note to Self: First time doing an actual fully fledge QA job. Previously, I only did it as around a half in my intern. This project will fill in the other half and the current half that I already know/think about. Think of it as just polishing my current skills to be even better.

This was done on linux. I don't feel like making **Webkit** available to use and downloading all the deps for it. If necessary I will, but it isn't so I won't make this more complicated than it needs to be. So **Webkit** would just be commented out in the config.

For now: I'd add always apply **POM** and **Fixtures** as default and keep `.spec` to only testing and **ABSOLUTELY NOTHING ELSE**. That what I have thus far today.

Notes Regarding testing:

So when testing for sorting, either I keep the data static or I list all the data somehow. The way it seems to work is you sort it on the frontend, and you sort it on the test itself once you grab the "sorted" items. Afterwards, do a quick compare `.toStrictEqual()`.
For ex. let's say there was `X` data but only like `10` are shown, then we just grab the `10` and make sure **they are sorted**. For better testing, we can randomize the data if possible (so random dates?). 
> Honestly, I really love the idea of having random input and testing it, just sounds so good and fun to do. Plus this is expected and maximum TESTING POWER.

Testing should always be simple and easy. There shouldn't be like leetcode looking ahh stuff in there, unless it is something that the basic JS or language doesn't provide out of the box and the test is complex (cause software is complex).

Something that I seem to be doing a bit quite often is forgetting the `await` keyword. If the `expect` contains a `Promise`, then I should always put an `await` outside of the expect, and never inside it. This is important to keep note of for my future self.
Something to note though is that when you have the same locator that can be used, even if the page changes, it would still work, which I guess makes sense since the docs did say
> "...an up-to-date DOM element is located in the page..."

### Page Object Model POM
So about this one, **POM** or **page-object-model** is just basically the interacter. It's only purpose is to grab the data and elements from the page. The `.spec` files are only testing. As a result, I **SHOULD NOT** see any `page.locator()` in spec. If I ever write one either I'm drunk or it was someone else using my account.
One thing to note is that it is fine to have things like `click4Times` or `clickRandomly10Times` in the **POM** since it is still interacting within the page. But other things like calc or math should be in the utils unless it can be done in 1 liners or won't be used else where.
> Although it is might be better to have it as a general function like `clickXTimes(num: number)`.

### Error handling in POM
So my idea is that if there is any error in trying to fetch the elements then I should assume that there is something wrong with the page and thus, error out. And I don't think there is any point in time where I shuold try to catch the error within the **POM**. I do think that we should test the error or something in the test itself though.

### Fixtures
This is basically jsut somethign that you would use to delete the `beforeEach()` and `afterEach` that you normally have. If you need it to repeat for a lot of things, it's better to just have fixtures over creating multiple `beforeEach()` in each files. I'd like to belive that the current test I am writing are a good example of when to use fixtures, since each one needs to interact with the `page` and I minimize outside code from the `spec` files. 

*Of course, I could be wrong here.*

However, there should still be times when it might better to use `beforeEach()`, probably when you need to something small and quick for like 1-2 test cases. Once you start adding more and the `beforeEach()` is being applied to more and more test, it's probably jsut better to have it as a **fixture** instead I think. Similar to extracting functionality into it's own function once it starts repeating 5 too many times, or something similar.
> that wording for the sentence mgiht be wrong.

### test.step
So apparently this is a thing. But like this is only used when you want to group simliar logic with one another or when you want to have extremely clear logs in your test. But usually it is fine to not include it. Well for a beginner like me, I probably will struggle to find places to use this in, maybe seniors will find more uses for it.
> Let me ask this to someone lul.



*This is just me writing them out so I can have stuff to look back to if I need this and to have a better memorization of this since I am thinking about it.*
