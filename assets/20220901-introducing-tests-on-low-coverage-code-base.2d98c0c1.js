const e={Author:"Byron Wong",Date:"2022-09-01T00:00:00.000Z",Slug:"introducing-tests-on-low-coverage-code-base",Keywords:"test, automation, cicd, unit-test, feature-test"},o=`<h1>Introducing Tests On Low Coverage Code Base</h1>
<blockquote>
<h3><em>In my humble opinion, if you do not introduce test in your code base, and not maintaining the test, you're like eating pizza without dough</em></h3>
</blockquote>
<p>The basic bread and butter in your everyday meal is gone, at the very moment you do not realize or ditched the use of tests in your code base. &quot;Lacking of nutrients&quot; is how I would put it.</p>
<p>Why?</p>
<p>Simple, you won't have the energy or confidence to enable you in your journey to &quot;scale&quot;, &quot;transform&quot;, &quot;revolutionize&quot; or &quot;disrupt the industry&quot; \u{1F64A}</p>
<p>Let's take for instance, if you have a team of 5-6 developers, how do you ensure whatever deployed is working as-is? How do you sleep at night not thinking one day something might happen and you incorrectly gave out money to your customer?</p>
<p>If that's not enough to convince you, perhaps I could point you to google &quot;why do i write test&quot;, come back here when you're otherwise <strong><em>convinced</em></strong>.</p>
<p>Now I'm not attempting to persuade you (_pardon me for what I've written prior), nor plan to write a detailed guide on how to write test, believe me, <em>&quot;any test is good test&quot;</em>.</p>
<p>I'm skewed to give you a couple extra pointers on lessons I've learnt when adding in test scripts into a low test coverage code base.</p>
<h3>1. Write tests on things you (or the devs before) has taken granted</h3>
<p>The line is something along the line:</p>
<blockquote>
<p>&quot;Why on earth wasn't created_at being saved?&quot;</p>
<p>&quot;I don't know, I guess it might be from the migration we did? moving from rollup worker into typescript&quot;</p>
<p>&quot;Shoot! Now what do we do?&quot;</p>
</blockquote>
<p>The point here is that we're ready to <a href="https://www.martinfowler.com/bliki/SacrificialArchitecture.html">sacrifice codes overtime</a>, and</p>
`;export{e as attributes,o as html};