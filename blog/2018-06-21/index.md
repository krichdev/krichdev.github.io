---
date: "2018-06-25"
title: "Updating My Portfolio"
category: "Gatsby"
tags:
    - Gatsby
    - Graphql
    - Netlify
type: "blog"
---

My first go at a personal website was done with about 3 months of every day coding under my belt, and just used regular HTML, CSS, and a little bit of jQuery. Fast forward to today, and it has been just over year since I finished a coding bootcamp. What a perfect time to dust off and redo my portfolio website. With this make over I wanted to accomplish a couple of things. Increasing the speed was at the top of the list, incorporate a blog, and display side projects that use modern technology that I couldn't show experience with at my job.

## Enter Gatsby

My first introduction to Gatsby was a few months ago when YouTube videos were on auto play in the background. I was instantly interested and wanted to get my hands dirty. My initial first go with it was to try and remake my wife's business wordpress site. Distractions and getting side tracked got me off of that project (however, it's on deck for me now) and I moved on. When I decided it was time to redo my portfolio site, I knew I would give Gatsby a go.

## Speed

![](./desktop_speed_score.png)
> Page speed report for the first version of my personal site

As you can see, even a slight speed increase would be a win for me, as my v1 of my personal site wasn't even registering a speed on desktop. For mobile, I was clocking in at around 70 the handful of times I ran the test.

Out of the box, and with practically zero configuration, Gatsby helps with code splitting. This insures that only the critical HTML, CSS, data, and JavaScript is loaded on each page. Also, prefetching is enabled, so when you navigate to other pages your site feels amazingly fast.

Additionally, I used the `gatsby-plugin-sharp` and `gatsby-transformer-sharp` plugins to help with generating responsive images. Not only are multiple sizes of your images generated to help serve the right one, you also have a handful of loading filters. I went with the default 'blur-up' method which Facebook and Medium made popular.

These were the only two main emphasizes that I put on increasing speed, and take a look at these results! Mobile increased to 90, and desktop went from 0 to 96.

![](./after-speed-score.png)
> Page speed report after the redo with Gatsby

## Modern Tech

I was very excited about updating my portfolio because it would allow me to show some work with modern technologies. Being able to make reusable components in React, and import wherever needed was awesome. Then came the data integration. The Gatsby community has a handful of plugins that allow you to bring in your data from Wordpress, Contentful, Markdown files, and more. Once a build takes place, you then can query this data with GraphQL. 

This site was my first interaction with GraphQL and I have to say it's pretty awesome. I think of it as a powerful combination of REST API's and JSON. When you run `gatsby develop` you are prompted with two local host ports. One to view your site, and the other is a GraphiQL url. GraphiQL allows you to test your queries and see results in real time before you use them. 

Using GraphiQL was crucial, and the fact that it is self documenting saved me a ton of time. Just hit `ctrl + space` and you could see the list of available keywords to include in your query. Another great benefit I found with GraphQL is that your results mirror your query, so you don't have to guess what the key value pairs are.

