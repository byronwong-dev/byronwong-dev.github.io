const e={Author:"Byron Wong",Date:"2022-09-18T00:00:00.000Z",Slug:"tech-debt-from-rigid-database-structure-catches-up"},t=`<h1>Tech Debt From Rigid Database Structure Catches Up</h1>
<blockquote>
<p>Holy smokes, another rookie mistakes done 3 years ago (at the point of writing) catches up \u{1F628}</p>
</blockquote>
<p>The very thought and idea of <code>This requirement of (.*) will never change</code>, which I often made so often couple years ago has yet again, happily proven me wrong this time. Instead of a soft and gentle snooze, it went and gave me a huge uppercut that nearly decapitated me.</p>
<p>Soooo naive of me to assume requirements never change! Where my assumptions are based on the line of thought that &quot;This is a core business logic, they won't be changing how they run their business. With full honesty, this is dangerous and inhibits your journey to improve your crafts.</p>
<p>Remember, everything changes, and I am giving myself a disservice of making changes difficult!</p>
<hr>
<p>There's a fine line difference between making things easy to change, and making it &quot;flexible&quot;. This is a common trap that developers make, early in our journey. Let me give you an example:</p>
<pre><code class="language-js"><span class="hljs-comment">// option 1</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">makePayment</span>(<span class="hljs-params">burger</span>) {

}

<span class="hljs-comment">// option 2</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">makePaymentFor</span>(<span class="hljs-params">item, amount, options</span>) {
    <span class="hljs-keyword">if</span> (options.<span class="hljs-title function_">contains</span>(<span class="hljs-string">&#x27;tax&#x27;</span>)) {
        amount *= <span class="hljs-number">1.10</span>
    }
}
</code></pre>
<p>If you noticed option 2, we have the logic of <code>options</code> being passed in and it allows to be more &quot;flexible&quot;, perhaps adding another closure of checking <code>options.freeOfCharge</code> to indicate that this burger is &quot;payment free&quot;.</p>
<p>If you haven't noticed what's wrong with this, let me ask you a couple questions:</p>
<ul>
<li>If you are breaking the function to smaller pieces, do you have the confidence to remove <code>options</code>? If no, why? If yes, can you safely say that you can quickly put on the changes without much effort and worries?</li>
<li>If someone else were to modify your function, should they be allowed to change it safely without worrying it will affect other parts of the code?</li>
</ul>
<blockquote>
<p>When we introduce premature &quot;flexibility&quot;, we are taking away the ease to change</p>
</blockquote>
<p>So why am I talking about this &quot;flexibility&quot; issue? Because I wanted to emphasize on the trade-offs of making things &quot;flexible&quot;, there's a degree on how flexible it should be, without sacrificing the ease of change later on.</p>
<p>To guide the changes, <strong>only make it &quot;flexible&quot; to the degree where you need it, and <em>only</em> to the extend where the use case supports it</strong></p>
<hr>
<p>To illustrate the issue in simple example:</p>
<p><img src="/tech-debt-from-rigid-database-structure-catches-up-01.png" alt="Payments"></p>
<p>The database record has a fixed <code>burger_id</code> (a required field) for a &quot;one Burger has many Payments&quot; relationship (payments assumed may have failed, hence many records). The first thought was, should we be introducing <code>pizza_id</code> (in red) to cater for the new model?</p>
<p>I'm certain and confident that they will not stop at Pizza, it is not a question of &quot;will/would&quot; but &quot;when&quot;, so using a <code>pizza_id</code> doesn't do justice to this sickly code base that is in a dire need of a surgery to remove such tumour.</p>
<p>We definitely need to make it &quot;flexible&quot;, the natural solution here is to use polymorphic relationship by the different models. But also be careful on the change itself, <strong>how</strong> should we introduce the change without much rippling effect is another key point.</p>
<p>My approach?</p>
<p><img src="/tech-debt-from-rigid-database-structure-catches-up-02.png" alt="Payments"></p>
<blockquote>
<p>Still introduce changes but keep the old field available and updated, gradually phase out the need to use that field.</p>
</blockquote>
<p>Now I introduce the fields of <code>food_type</code> and <code>food_id</code> (both required) to allow polymorphism to support multiple different models, at the same time due to poor test coverage (which I will have to add, in conjunction with the refactoring effort), I still keep the old interface / field alive, but be very cautious of adding anything new, thus continue to strangle and monitor it closely.</p>
<p>Polymorphism is not something new, it has achieved in many frameworks. My point that I'm trying to shine a light to, is not the use of polymorphic fields (although the use is much advised in this case), but rather on the idea of <code>introduce changes that introduces flexibility; but keep regression small by letting the old field lives; continue to strangle it and sunset it!</code></p>
<p>I've made the field <code>burger_id</code> optional, as it is soon-to-be-deprecated, but not forgetting the introduced fields are marked required to keep data integrity in-check.</p>
<p>There's no urgency to remove the old field immediately, since there are parts of the code we have no confidence in not causing regression, so we strangle it by limiting any new changes only be done on the new fields</p>
<p>Observe it and ensure there are no new or existing usage of the old field, before finally chopping it off.</p>
<p>You can very much do so, contrasting to what I've done: instead of keeping old fields alive, just let exceptions thrown.</p>
<p>But I didn't want to entertain 3am calls that asks me to fix the bugs. Having the approach to proactively monitor it instead of a reactive reaction to the bug, still makes me look way more professional \u{1F60E}</p>
`;export{e as attributes,t as html};
