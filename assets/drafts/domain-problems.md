Having heard so much about how hot the JAMstack is for front-enders and how sweet it is to build a serverless site, I decided to give it a try on my recent re-build of this site. I'd played around with Netlify for a single-page static site, and was pleased with how easy that was to do, so I figured I'd continue with their service. I started by uploading a simple holding page for this site, then I went about setting my domain to direct to it. Trouble soon ensued.

What follows is an account of how I got tangled up in domain management, and a few things I learned while teasing it apart.

## Domains are not my thing

Despite having built full sites and custom apps from end-to-end, I still feel that my strengths and interests reside mainly in front-end development, so I wanted to focus on that (and possibly writing) in the current rebuild of this site. Given that this site is likely to remain pretty streamlined, I didn't see any reason to invoke any large CMS again, and I certainly didn't want to be messing around with maintaining databases and configuring servers, thank you very much.

Let me be clear: I'm really more of a front-end girl. I may have tried on the "full-stack" designation to see how it fit, but I'm definitely not into Dev Ops, and never have been. So when it comes to DNS records and the like, well... I'm at a bit of a loss. 

Until now, this had not been an issue. When I first registered my domain and built a site to place there, I did it all through a web hosting company and didn't really have to configure anything. [At least, not that I remember.] 

When you want to host your site with Netlify, however, and want to use a domain you already own, you have to change your nameservers. I read the docs: easy enough. Done. Within just a few minutes (far less than the potential 24-hour wait for propagation), I could already see that my domain was indeed directing to the single page on Netlify. Sweet! High fives to me, I'm awesome.

How could I have know this would break my email? Alas, it did. Take note: if you change your nameservers (seriously, I'm still not sure exactly what that means), any email you're receiving at that domain will no longer come it.

## GSuite to the rescue
I had been using a GMail account to fetch and send emails from my webhost's server already for all the reasons that we love GMail, so it wasn't a huge leap to consider upgrading to GSuite to handle my email directly. 

In order for GSuite to handle mail at your domain, you have to set a few new DNS records. Yeah, that stuff again. No problem, I can handle that: read the docs, change the records, look at me go!

Go where? Who knows, but it wasn't Domain Email Mastery. It was more like Email Absence Oblivion. Where were all those persistent, totally valuable newsletters I signed up for and continously delete without opening, while promising that one of these days I'll really take the time to read? And why hadn't I heard back about that potential freelance gig. Uh-oh, something was definitely up.

I couldn't figure it out on my own, so I had a chat with Cedric from GSuite. He checked my domain on Google Dig, and saw no sign of those DNS records I assured him I'd successfully set. I reset them.  We checked again together, with no luck. Then I asked the key question: Should I be setting these records with my webhost, through whom I'd registered and paid for the domain, or via Netlify, the target of my nameservers. The answer, which I'd pretty much concluded by that point, was the latter.

So I did that: I changed my DNS records with Netlify's DNS management tools, and was back up and running! Site and email, all in working order. Hooray!