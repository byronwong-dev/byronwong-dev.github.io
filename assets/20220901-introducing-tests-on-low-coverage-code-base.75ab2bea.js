const e={Author:"Byron Wong",Date:"2022-09-01T00:00:00.000Z",Slug:"introducing-tests-on-low-coverage-code-base",Keywords:"test, automation, cicd, unit-test, feature-test"},t=`<h1>Introducing Tests On Low Coverage Code Base</h1>
<p>If I ask you, what's the bread and butter in your code base?</p>
<p>Git version control? Linter? true to those, but equally important element would be -- your tests!</p>
<blockquote>
<h3><em>IMO, if you do not introduce test in your code base, and not maintaining the tests, you're like eating pizza without dough</em></h3>
</blockquote>
<p>If you do not realize or ditched the use of tests in your code base. &quot;Lacking of nutrients&quot; is how I would put it.</p>
<p>Why?</p>
<p>Simple, you won't have the energy or confidence to enable you in your journey to &quot;scale&quot;, &quot;transform&quot;, &quot;revolutionize&quot; or &quot;disrupt the industry&quot; \u{1F64A}</p>
<p>Let's take for instance, if you have a team of 5-6 developers, how do you ensure whatever deployed is working as-is? How do you sleep at night not thinking that one misaligned star in a far far away galaxy <em>aligned out of a sudden</em>, a big bad voodoo spell casted onto your code resulting you mischarge your customer and losing your money?</p>
<p>If that's not enough to convince you, perhaps I could point you to google &quot;why do i write test&quot; to have a more sensible explanation, come back here when you're otherwise <strong><em>convinced</em></strong>.</p>
<hr>
<p>Our code base will never see the end of day in a few more years to come, and on a day-to-day basis we're essentially writing <a href="https://www.martinfowler.com/bliki/SacrificialArchitecture.html">sacrificial codes that we may very soon throw away</a>, and that's completely okay! When hardware and users get more sophisticated, so does the code to enable such experience. To complement such awesome code and features, something equally <em>cool</em> should accompany it.</p>
<p>Test scripts aren't just hippy scripts that prints out a green statement in your console to give you an ego boost (I think it does sometimes \u{1F914}), but it gives you something <strong>better</strong>, peace of mind~</p>
<blockquote>
<h3>The confidence to completely tear down your code, write it in a different architectural paradigm or language, all comes from tests.</h3>
</blockquote>
<p>Let's jump right in, shall we?</p>
<hr>
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
<p>Able to identify the elements or piece of your code that is an anchor or a turning point of the logic, you definitely need to test it</p>
<pre><code class="language-js"><span class="hljs-keyword">function</span> <span class="hljs-title function_">characterKilled</span>(<span class="hljs-params">name</span>) 
{
    <span class="hljs-keyword">return</span> characterRepository.<span class="hljs-title function_">kill</span>(name)
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">characterDiedOn</span>(<span class="hljs-params">name</span>)
{
    <span class="hljs-keyword">const</span> character = characterRepository.<span class="hljs-title function_">get</span>(name)
    <span class="hljs-keyword">return</span> character.<span class="hljs-property">deleted_at</span>;
}
</code></pre>
<p>If you look at this piece of function above, we know that <code>deleted_at</code> is pivotal element of <code>character</code>, and it should be tested!</p>
<p>But let's take a look at the bottom:</p>
<pre><code class="language-js"><span class="hljs-keyword">function</span> <span class="hljs-title function_">lastIncidentHappenedToCharacterAt</span>(<span class="hljs-params">name</span>)
{
    <span class="hljs-keyword">const</span> character = characterRepository.<span class="hljs-title function_">get</span>(name)
    <span class="hljs-keyword">return</span> character.<span class="hljs-property">updated_at</span>;
}
</code></pre>
<p>It may not look like anything important, since we just wanted to know what happened, right?</p>
<p>Imagine the framework that provides <code>characterRepository</code> just decided to not updated <code>updated_at</code> when you upsert an entry, then you're torn.</p>
<p>Any piece of code you see you need to retrieve, for instance <code>updated_at</code>, <code>created_at</code> which we taken for granted, if its being used, try to add a simple assertion test on it!</p>
<h3>2. Assert on shapes of the payload if you aren't bothered with the &quot;filler&quot; contents</h3>
`;export{e as attributes,t as html};
