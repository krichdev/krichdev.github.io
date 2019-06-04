---
type: blog
date: 2019-06-04T16:00:00Z
title: 'Real World Use Case for Renaming Destructed Properties '
category: Quick Tips
tags:
- ES6

---
You hear about a new javascript feature, and how it will help you be more productive or write cleaner code. You're pumped. You go to the docs to figure out how to implement it and come across a `var foo = bar` example.

Then you google something like `real world example of ...`  or at least that is my usual workflow. 

### Assigning destructed variables to new variable names

I knew that you could assign new variable names to destructed objects. I read more about this feature on the [mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_to_new_variable_names) and looked over their `foo/bar` example:

    var o = {p: 42, q: true};
    var {p: foo, q: bar} = o;
     
    console.log(foo); // 42 
    console.log(bar); // true

This all seemed easy to digest, but I still couldn't think of a real world use case. That was until I was working on a [Gatsby]() site and making multiple graphql queries for the page data.

### My real world use case for renaming destructed object properties

I had a page that had multiple queries for data, and had similar schemas. The queries looked like this:

    export const query = graphql`
    	query {
        	imageFiles {
            	edges {
                	node {
                    	...
                    }
                }
            }
            sourceYaml {
            	edges {
                	node {
                    	...
                    }
                }
            }
        }
    `

I wanted to use both sets of data inside my page component, and as you can see both have similar shapes and the same property names. 

This query results in something like this:

    data {
    	imageFiles {
        	edges {
            	node {
                	...
                }
            }
        }
        sourceYaml {
        	edges {
            	node {
                	...
                }
            }
        }
    }

 Then to use this data in my page component, I would pass it in as a prop like so:

    const Page = ({ data }) => {
    	return (
    		... page html
        )
    }

This would work, but because I don't want to write out long prop drilling like `data.imageFiles.edges` a bunch of times I destructed the data object out to something like this

    const Page = ({ 
    	data: {
        	imageFiles: { edges },
            sourceYaml: { edges },
    	} 
     }) => {
     	return (
        	... page html
        )
     }

Now this won't compile because  `edges` defined twice. After writing this out, and seeing that I would run into problems, I knew immediately that I could use the renaming feature here to solve this. 

Here is what the updated and renamed data object destructing looks like

     const Page = ({ 
    	data: {
        	imageFiles: { edges: sourceImages },
            sourceYaml: { edges: sources },
    	} 
     }) => {
     	return (
        	... page html
        )
     }

Now inside this component, I can use `sourceImages` and `sources` which are assigned to the `edges` property of `imageFiles` and `sourceYaml`. 

Not only will this shorten the data prop, but I think it will also make it easier to read. So when myself or another developer come to this code in the future, seeing `sourceImages` and `sources` will make more sense than something like `data.imageFiles.edges`