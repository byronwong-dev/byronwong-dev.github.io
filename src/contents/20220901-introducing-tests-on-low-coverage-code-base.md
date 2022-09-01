---
Author: Byron Wong
Date: 2022-09-01
Slug: introducing-tests-on-low-coverage-code-base
Keywords: test, automation, cicd, unit-test, feature-test
---

# Introducing Tests On Low Coverage Code Base


If I ask you, what's the bread and butter in your code base? 

Git version control? Linter? true to those, but equally important element would be -- your tests!
> ### _IMO, if you do not introduce test in your code base, and not maintaining the tests, you're like eating pizza without dough_

If you do not realize or ditched the use of tests in your code base. "Lacking of nutrients" is how I would put it.

Why? 

Simple, you won't have the energy or confidence to enable you in your journey to "scale", "transform", "revolutionize" or "disrupt the industry" 🙊

Let's take for instance, if you have a team of 5-6 developers, how do you ensure whatever deployed is working as-is? How do you sleep at night not thinking that one misaligned star in a far far away galaxy _aligned out of a sudden_, a big bad voodoo spell casted onto your code resulting you mischarge your customer and losing your money? 

If that's not enough to convince you, perhaps I could point you to google "why do i write test" to have a more sensible explanation, come back here when you're otherwise **_convinced_**.

---

Our code base will never see the end of day in a few more years to come, and on a day-to-day basis we're essentially writing [sacrificial codes that we may very soon throw away](https://www.martinfowler.com/bliki/SacrificialArchitecture.html), and that's completely okay! When hardware and users get more sophisticated, so does the code to enable such experience. To complement such awesome code and features, something equally _cool_ should accompany it.

Test scripts aren't just hippy scripts that prints out a green statement in your console to give you an ego boost (I think it does sometimes 🤔), but it gives you something **better**, peace of mind~

> ### The confidence to completely tear down your code, write it in a different architectural paradigm or language, all comes from tests.

Let's jump right in, shall we?

---


### 1. Write tests on things you (or the devs before) has taken for granted

The line is something along the line:

> "Why on earth wasn't created_at being saved?"
> 
> "I don't know, I guess it might be from the migration we did? moving to typescript and ditching the old transpiler tool?"
> 
> "Shoot! Now what do we do?"

The framework that we're too familiar and overly rely on, will one day bite on you when it's no longer faithful to its owner -- graduate and moved on to a breaking change version, or a slight "oopsies".

Let's take an example:

```js
function characterKilled(name) 
{
    return characterRepository.kill(name)
}

function characterDiedOn(name)
{
    const character = characterRepository.get(name)
    return character.deleted_at;
}
```

If you look at this piece of function above, we know that `deleted_at` is pivotal element of `character`, and it should be tested! 

But let's take a look at the bottom:

```js
function lastIncidentHappenedToCharacterAt(name)
{
    const character = characterRepository.get(name)
    return character.updated_at;
}
```
It may not look like anything important, since we just wanted to know what happened, right?

Imagine the framework that provides `characterRepository` just decided to not updated `updated_at` when you upsert an entry, then you're torn.

Any piece of code you see you need to retrieve, for instance `updated_at`, `created_at` which we taken for granted, if its being used, try to add a simple assertion test on it!

### 2. Assert on shapes of the payload if you aren't bothered with the "filler" contents

```json
{
    "name": "Luffy",
    "occupation": "Pirate",
    "bounty": "4,000,000,000",
    "currency": "berry"
}
```

If the "filler" content ain't much of a use, but rather interested in a particular element, atleast give it a shape test like so:

```js
expect(payload.bounty).toEqual(4000000000); // yes we are happy with the amount
expect(payload).matchInObject({
    "name": expect.any(String),
    "occupation": expect.any(String),
}); // atleast we check its there
```
This is especially true when the payload is intended to be used in an contract, to be used by other services! This will ring true, when you are moving or rewriting the implementation, the tests gives you peace of mind that it works and is expecting the same payload shape

### 3. Filling up negative tests to bump up coverage

Often times we're too engulfed by the happy path, leaving out (intentionally or not) the negatives sad patth. By writing up negative tests, it not only bumps up your coverage, but also allows you to comfortably embrace the situation below, where you're pair programming with a junior dev in refactoring their code, for instance:

```js
// junior dev written code:
// unclear goal or purpose on what they try to achieve
function buildBase(customer)
{
    if(!customer.isLackOfResource()) {
        if (!customer.isLackOfArmor()) {
            ...
        } else {
            ...
        }
        ...
        ...
    } else {
        ...
    }
}
```

How would you want to refactor this!! So you'd write negative test to assert it first,
```js
// assert what should or shouldn't happen
function testLackOfResourceUnableToBuildBase()
{
    await expect(buildBase(customer)).rejects.toThrow('Insufficient Resource To Build Base!');
}
```

then you rewrite it with: **Say it with me 👏 con-👏-fi-👏-dence**

```js
// write it anyhow, you'll have it TEST for you
function buildBase(customer)
{
    if(customer.isLackOfResource()) {
        throw new BaseBuildException('Insufficient Resource To Build Base!')
    }

    if(customer.isLackOfArmor()) {
        throw new BaseBuildException('Insufficient Armor To Build Base!')
    }
}
```