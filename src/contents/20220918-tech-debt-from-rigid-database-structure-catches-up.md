---
Author: Byron Wong
Date: 2022-09-18
Slug: tech-debt-from-rigid-database-structure-catches-up
---

# Tech Debt From Rigid Database Structure Catches Up

> Holy smokes, another rookie mistakes done 3 years ago (at the point of writing) catches up 😨

The very thought and idea of `This requirement of (.*) will never change`, which I often made so often couple years ago has yet again, happily proven me wrong this time. Instead of a soft and gentle snooze, it went and gave me a huge uppercut that nearly decapitated me.

Soooo naive of me to assume requirements never change! Where my assumptions are based on the line of thought that "This is a core business logic, they won't be changing how they run their business. With full honesty, this is dangerous and inhibits your journey to improve your crafts.

Remember, everything changes, and I am giving myself a disservice of making changes difficult!

---

There's a fine line difference between making things easy to change, and making it "flexible". This is a common trap that developers make, early in our journey. Let me give you an example:

```js
// option 1
function makePayment(burger) {

}

// option 2
function makePaymentFor(item, amount, options) {
    if (options.contains('tax')) {
        amount *= 1.10
    }
}
```

If you noticed option 2, we have the logic of `options` being passed in and it allows to be more "flexible", perhaps adding another closure of checking `options.freeOfCharge` to indicate that this burger is "payment free".

If you haven't noticed what's wrong with this, let me ask you a couple questions:

- If you are breaking the function to smaller pieces, do you have the confidence to remove `options`? If no, why? If yes, can you safely say that you can quickly put on the changes without much effort and worries?
- If someone else were to modify your function, should they be allowed to change it safely without worrying it will affect other parts of the code?

> When we introduce premature "flexibility", we are taking away the ease to change

So why am I talking about this "flexibility" issue? Because I wanted to emphasize on the trade-offs of making things "flexible", there's a degree on how flexible it should be, without sacrificing the ease of change later on.

To guide the changes, **only make it "flexible" to the degree where you need it, and _only_ to the extend where the use case supports it**

---


To illustrate the issue in simple example:

![Payments](/tech-debt-from-rigid-database-structure-catches-up-01.png)

The database record has a fixed `burger_id` (a required field) for a "one Burger has many Payments" relationship (payments assumed may have failed, hence many records). The first thought was, should we be introducing `pizza_id` (in red) to cater for the new model?

I'm certain and confident that they will not stop at Pizza, it is not a question of "will/would" but "when", so using a `pizza_id` doesn't do justice to this sickly code base that is in a dire need of a surgery to remove such tumour.

We definitely need to make it "flexible", the natural solution here is to use polymorphic relationship by the different models. But also be careful on the change itself, **how** should we introduce the change without much rippling effect is another key point. 

My approach?

![Payments](/tech-debt-from-rigid-database-structure-catches-up-02.png)

> Still introduce changes but keep the old field available and updated, gradually phase out the need to use that field.

Now I introduce the fields of `food_type` and `food_id` (both required) to allow polymorphism to support multiple different models, at the same time due to poor test coverage (which I will have to add, in conjunction with the refactoring effort), I still keep the old interface / field alive, but be very cautious of adding anything new, thus continue to strangle and monitor it closely.

Polymorphism is not something new, it has achieved in many frameworks. My point that I'm trying to shine a light to, is not the use of polymorphic fields (although the use is much advised in this case), but rather on the idea of `introduce changes that introduces flexibility; but keep regression small by letting the old field lives; continue to strangle it and sunset it!`

I've made the field `burger_id` optional, as it is soon-to-be-deprecated, but not forgetting the introduced fields are marked required to keep data integrity in-check.

There's no urgency to remove the old field immediately, since there are parts of the code we have no confidence in not causing regression, so we strangle it by limiting any new changes only be done on the new fields

Observe it and ensure there are no new or existing usage of the old field, before finally chopping it off.

You can very much do so, contrasting to what I've done: instead of keeping old fields alive, just let exceptions thrown.

But I didn't want to entertain 3am calls that asks me to fix the bugs. Having the approach to proactively monitor it instead of a reactive reaction to the bug, still makes me look way more professional 😎
