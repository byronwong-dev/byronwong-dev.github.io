const e={Author:"Byron Wong",Date:"2022-09-01T00:00:00.000Z",Slug:"introducing-tests-on-low-coverage-code-base",Keywords:"test, automation, cicd, unit-test, feature-test"},t=`<h1>Introducing Tests On Low Coverage Code Base</h1>
<blockquote>
<h3><em>In my humble opinion, if you do not introduce test in your code base, and not maintaining the test, you're like eating pizza without dough</em></h3>
</blockquote>
<p>The basic bread and butter in your everyday meal is gone, at the very moment you do not realize or ditched the use of tests in your code base. &quot;Lacking of nutrients&quot; is how I would put it.</p>
<p>Why?</p>
<p>Simple, you won't have the energy or confidence to enable you in your journey to &quot;scale&quot;, &quot;transform&quot;, &quot;revolutionize&quot; or &quot;disrupt the industry&quot; \u{1F64A}</p>
<p>Let's take for instance, if you have a team of 5-6 developers, how do you ensure whatever deployed is working as-is? How do you sleep at night not thinking one day something might happen and you incorrectly gave out money to your customer?</p>
<p>If that's not enough to convince you, perhaps I could point you to google &quot;why do i write test&quot;, come back here when you're otherwise <strong><em>convinced</em></strong>.</p>
<p>Test scripts aren't just hippy scripts that prints out a green statement in your console to give you an ego boost (I think it does sometimes \u{1F914}), but it's your artifact on what <em>should</em> and <em>would</em> happen to that piece of code you are testing against.</p>
<p>Our code base will never see the end of day in a few more years to come, andon a day-to-day basis we're essentially writing <a href="https://www.martinfowler.com/bliki/SacrificialArchitecture.html">sacrificial codes</a>, and that's completely okay! When hardware and users get more sophisticated, so does the code to enable such experience.</p>
<blockquote>
<h3>The confidence to completely tear down your code, write it in a different architectural paradigm or language, all comes from tests written.</h3>
</blockquote>
<p>Believe me, <em>&quot;any test is good test&quot;</em> as long as you've writing and maintaing it.</p>
<p>The intention here is skewed to provide you a couple extra pointers on lessons I've learnt when adding in test scripts into a low test coverage code base.</p>
<h3>1. Write tests on things you (or the devs before) has taken for granted</h3>
<p>The line is something along the line:</p>
<blockquote>
<p>&quot;Why on earth wasn't created_at being saved?&quot;</p>
<p>&quot;I don't know, I guess it might be from the migration we did? moving to typescript and ditching the old transpiler tool?&quot;</p>
<p>&quot;Shoot! Now what do we do?&quot;</p>
</blockquote>
<p>The framework that we're too familiar and overly rely on, will one day bite on you when it's no longer faithful to its owner -- graduate and moved on to a breaking change version, or a slight &quot;oopsies&quot;.</p>
<p>It is true we do not test what the framework has tested, because why do we? It's been written and reviewed by a dozens of people, why should you repeat their job?</p>
<blockquote>
<p>We test it when we find out that it plays a part in your business domain logic.</p>
</blockquote>
<p>Especially on things that &quot;automagically&quot; does it for you, would you leave complete trust to the framework and let it determine your fate? Or you follow this rule: <strong>When you aren't sure, just write test on it</strong></p>
<p>Rule of thumb: when you aren't sure, just write test on it</p>
<p>2nd rule of thumb: if you need to log it, perhaps write a test on it</p>
`;export{e as attributes,t as html};
